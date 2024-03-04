import { User } from '@prisma/client'
import React, { FC } from 'react'
import { UserBox } from '@/components/UserBox'
import { BlobsSecondary } from '@/components/BlobsSecondary'

interface UserListProps {
    items: User[]
}

export const UserList: FC<UserListProps> = ({ items }) => {
    return (
        <aside className='bg-white shadow-inner shadow-purple-middle lg:rounded-xl lg:w-96 inset-y-0 pb-20 lg:pb-0 lg:ml-20 lg:block overflow-y-auto'>
            <div className='px-2'>
                <div className='flex justify-between mb-4 px-2 py-4 mt-2 bg-orange-middle rounded-lg shadow-md shadow-orange-dark relative overflow-hidden'>
                    <div className='text-2xl font-bold text-white'>
                        People
                    </div>
                    <BlobsSecondary />
                </div>
                <div>
                { items.map((item) => (
                    <UserBox data={item} key={item.id} />
                ))}
                </div>
            </div>
        </aside>
    )
}
