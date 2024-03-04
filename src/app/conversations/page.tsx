'use client'

import clsx from "clsx"
import { useConversation } from "@/app/hooks/useConversation";
import { EmptyState } from "@/components/EmptyState";

const Home = () => {
    const { isOpen } = useConversation();

    return (
        <div
            className={clsx(
                "h-full w-full lg:block bg-white lg:rounded-xl shadow-inner shadow-purple-middle",
                isOpen ? "block" : "hidden"
            )}
                    >
            <EmptyState />
        </div>
    )
}

export default Home