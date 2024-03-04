'use client'

import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { FC, useCallback, useState } from 'react'
import { Avatar } from '@/components/Avatar'
import { LoadingModal } from '../LoadingModal'

interface UserBoxProps {
    data: User
}

export const UserBox: FC<UserBoxProps> = ({ data }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleClick = useCallback(() => {
        setIsLoading(true)

        axios.post('/api/conversations', {
            userId: data.id
        })
            .then((data) => {
                router.push(`/conversations/${data.data.id}`)
            })
            .finally(() => setIsLoading(false))
    }, [data, router])

    return (
        <>
            {isLoading && (
                <LoadingModal />
            )}
            <div
                onClick={handleClick}
                className='w-full relative flex items-center space-x-3 bg-white-primary p-3
            hover:bg-blue-light rounded-lg cursor-pointer text-blue-dark hover:text-white transition'
            >
                <Avatar user={data} />
                <div className='min-w-0 flex-1'>
                    <div className='focus:outline-none'>
                        <div className='flex justify-between items-center mb-1'>
                            <p className='text-sm font-medium'>
                                {data.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
