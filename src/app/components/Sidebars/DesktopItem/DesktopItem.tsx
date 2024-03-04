import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
    href: string;
    label: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

export const DesktopItem: FC<DesktopItemProps> = ({
    href,
    label,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <li onClick={handleClick}>
            <Link
                href={href}
                className={clsx(`
                    group 
                    flex
                    m-2 
                    gap-x-3
                    rounded-md
                    p-3 
                    text-sm 
                    leading-6 
                    font-semibold 
                    text-white
                    shadow-2xl
                    hover:bg-white
                    hover:text-purple-middle
                    hover:rounded-[50%50%32%68%/65%25%75%35%]
                    ransition-all
                    duration-500
                `,
                active && 'bg-orange-middle text-purple-middle rounded-[70%30%69%31%/43%28%72%57%]'
            )}>
                <Icon className="h-6 w-6 shrink-0" />
                <span className='sr-only'>
                    {label}
                </span>
            </Link>
        </li>
    )
}
