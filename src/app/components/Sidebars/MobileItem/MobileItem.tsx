'use client'

import Link from "next/link"
import clsx from "clsx"
import { FC } from "react";

interface MobileItemsProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

export const MobileItem: FC<MobileItemsProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if(onClick) return onClick
    }

    return (
        <Link 
            onClick={onClick}
            href={href}
            className={clsx(`
                group
                flex
                gap-x-3
                text-sm
                leading-6
                font-semibold
                w-full
                justify-center
                p-4
                text-white
                hover:bg-white
                hover:text-purple-middle
            `,
                active && "bg-blue-middle text-purple-middle w-full"
            )}
        >
            <Icon className="h-6 w-6"/>
        </Link>
    )
}
