import React, { FC, ReactNode } from 'react'
import { DesktopSidebar } from '@/components/Sidebars/DesktopSidebar'
import { MobileFooter } from '@/components/Sidebars/MobileFooter'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

interface SidebarProps {
    children: ReactNode
}

export const Sidebar: FC<SidebarProps> = async ({children}) => {
    const currentUser = await getCurrentUser()
    return (
        <div className='h-full'>
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter />
            <main className='h-full lg:p-4'>
                {children}
            </main>
        </div>
    )
}
