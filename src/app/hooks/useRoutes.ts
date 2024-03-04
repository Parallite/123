import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { signOut } from "next-auth/react";
import { useConversation } from "./useConversation";
import { LuUsers, LuMessagesSquare, LuLogOut, LuHome } from "react-icons/lu";

export const useRoutes = () => {
    const pathname = usePathname()
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Home',
            href: '/',
            icon: LuHome,
            active: pathname === '/'
        },
        {
            label: 'Chat',
            href: '/conversations',
            icon: LuMessagesSquare,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: LuUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            onClick: () => signOut(),
            href: '#',
            icon: LuLogOut,
        }
    ], [pathname, conversationId])

    return routes
}
