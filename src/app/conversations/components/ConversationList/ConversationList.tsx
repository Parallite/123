'use client'

import { useConversation } from '@/app/hooks/useConversation';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { ConversationBox } from '@/app/conversations/components/ConversationBox';
import { FullConversationType } from '@/app/types';
import { LuUserPlus2 } from "react-icons/lu";
import { BlobsSecondary } from '@/components/BlobsSecondary';
import { GroupChatModal } from '@/app/conversations/[conversationId]/components/GroupChatModal';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { pusherClient } from '@/app/libs/pusher';
import { find } from 'lodash';

interface ConversationListProps {
    initialItems: FullConversationType[];
    users: User[]
}

export const ConversationList: FC<ConversationListProps> = ({
    initialItems,
    users
}) => {
    const session = useSession();
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const router = useRouter();
    const { conversationId, isOpen } = useConversation();
    
    const pusherKey = useMemo(() => {
        return session.data?.user?.email
    }, [session.data?.user?.email]);

    useEffect(() => {
        if (!pusherKey) return

        pusherClient.subscribe(pusherKey);

        const newConversationHandler = (conversation: FullConversationType) => { 
            setItems((current) => {
                if(find(current, {id: conversationId})) {
                    return current
                }

                return [conversation, ... current]
            })
        }

        //add a new conversation in real-time
        pusherClient.bind('conversation:new', newConversationHandler);

        return () => {
            pusherClient.unsubscribe(pusherKey);
            pusherClient.unbind('conversation:new', newConversationHandler);

        }
    }, [pusherKey])

    return (
        <>
            <GroupChatModal 
                users={users}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <aside
                className={clsx(`bg-white shadow-inner shadow-purple-middle lg:rounded-xl lg:block overflow-y-auto block 
                left-0
                lg:w-96 
                inset-y-0 
                pb-20 
                lg:pb-0 
                lg:ml-20 
                lg:left-10
            `,
                    isOpen ? 'hidden' : 'block w-full left-0'
                )}
            >
                <div className='px-2'>
                    <div className='flex justify-between mb-4 px-2 py-4 mt-2 bg-orange-middle rounded-lg shadow-md shadow-orange-dark relative overflow-hidden'>
                        <div>
                            <div className='text-2xl font-bold text-white'>
                                Messages
                            </div>
                            <BlobsSecondary />
                        </div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className='flex items-center justify-center p-1 w-8 h-8 rounded-full text-white cursor-pointer hover:text-white hover:bg-purple-middle hover:shadow-md hover:shadow-purple-middle transition'>
                            <LuUserPlus2 size={20} />
                        </div>
                    </div>
                    {items.map((item) => (
                        <ConversationBox
                            key={item.id}
                            data={item}
                            selected={conversationId === item.id}
                        />
                    ))}
                </div>
            </aside>
        </>
    )
}
