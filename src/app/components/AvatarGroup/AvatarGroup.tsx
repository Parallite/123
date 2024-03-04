import { User } from '@prisma/client'
import Image from 'next/image'
import React, { FC } from 'react'

interface AvatarGroup {
    users: User[]
}

export const AvatarGroup: FC<AvatarGroup> = ({
    users
}) => {

    const slicedUsers = users?.slice(0, 3)
    const positionAvatar = {
        0: 'top-0 left-[12px]',
        1: 'bottom-0',
        2: 'bottom-0 right-0'
    }

    return (
        <div className='relative h-11 w-11'>
            {slicedUsers.map((user, idx) => (
                <div
                    key={user.id}
                    className={`
                        absolute
                        inline-block
                        rounded-full
                        overflow-hidden
                        h-[21px]
                        w-[21px]
                        ${positionAvatar[idx as keyof typeof positionAvatar]}
                    `}
                >
                    <Image 
                        alt='Avatar'
                        fill
                        src={user?.image || '/images/placeholder.jpg'}
                    />
                </div>
            ))}
        </div>
    )
}
