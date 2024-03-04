import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebars/Sidebar";
import { getUsers } from "@/app/actions/getUsers";
import { UserList } from "@/components/UserList";
import { BoblsBg } from "@/components/BoblsBg";

interface UsersLayoutProps {
    children: ReactNode
}

export default async function UsersLayout({
    children
}: UsersLayoutProps) {
    const users = await getUsers()

    return (
        <Sidebar>
            <div className="h-full flex justify-start gap-4">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}