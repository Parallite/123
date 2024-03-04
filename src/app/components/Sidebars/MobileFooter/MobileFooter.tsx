'use client'

import { useConversation } from '@/app/hooks/useConversation';
import { useRoutes } from '@/app/hooks/useRoutes'
import React from 'react'
import { MobileItem } from '@/components/Sidebars/MobileItem';

export const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) {
        return null
    }
    return (
        <div className='fixed justify-between w-full bottom-0 z-40 flex items-center 
     border-t-[1px] lg:hidden bg-purple-middle border-purple-middle '>
            {
                routes.map((route) => (
                    <MobileItem
                        key={route.label}
                        href={route.href}
                        icon={route.icon}
                        active={route.active}
                        onClick={route.onClick}
                    />
                ))
            }
        </div>
    )
}
