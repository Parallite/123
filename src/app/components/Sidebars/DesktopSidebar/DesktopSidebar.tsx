'use client'

import { useRoutes } from "@/app/hooks/useRoutes"
import { FC, useState } from "react"
import { DesktopItem } from "@/components/Sidebars/DesktopItem"
import { User } from "@prisma/client"
import { Avatar } from "@/components/Avatar"
import { SettingsModal } from "../SettingModal"

interface DesktopSidebarProps {
    currentUser: User
}

export const DesktopSidebar: FC<DesktopSidebarProps> = ({ currentUser }) => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <SettingsModal 
                currentUser={currentUser}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div className="hidden lg:fixed lg:inset-y-0 lg:left-2 lg:z-40 lg:w-20 xl:px-6
            lg:overflow-auto lg:pb-4 lg:flex lg:flex-col justify-between">
                <div className="flex justify-center mt-4">
                    <div className="w-20 h-20 rounded-full relative flex justify-center items-center">
                        <div className="absolute w-4 h-4 bg-red origin-[50%_31px] rotate-0  -translate-y-[150%] rounded-[30%70%70%30%/30%30%70%70%]" />
                        <div className="absolute w-4 h-4 bg-blue-middle origin-[50%_31px] rotate-[60deg] -translate-y-[150%] rounded-[71%29%70%30%/46%65%35%54%]" />
                        <div className="absolute w-4 h-4 bg-orange-light origin-[50%_31px] rotate-[120deg] -translate-y-[150%] rounded-[86%14%86%35%/35%59%41%65%]" />
                        <div className="absolute w-4 h-4 bg-purple-middle origin-[50%_31px] rotate-[180deg] -translate-y-[150%] rounded-[26%74%45%55%/53%63%37%47%]" />
                        <div className="absolute w-4 h-4 bg-orange-dark origin-[50%_31px] rotate-[240deg] -translate-y-[150%] rounded-[71%29%44%56%/26%63%37%74%]" />
                        <div className="absolute w-4 h-4 bg-green-middle origin-[50%_31px] rotate-[300deg]  -translate-y-[150%] rounded-[26%74%19%81%/69%49%51%31%]" />
                        <div className="w-4 h-4 bg-blue-light rounded-full" />
                    </div>
                </div>
                <nav className="mt-4 flex flex-col justify-between border-y-2 border-purple-middle py-20">
                    <ul role="list" className="flex flex-col items-center space-y-1">
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                                active={item.active}
                                onClick={item.onClick}
                            />
                        ))}
                    </ul>
                </nav>
                <nav className="mt-4 mb-4 flex flex-col justify-between items-center">
                    <div
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer hover:opacity-75 transition"
                    >
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    )
}
