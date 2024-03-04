'use client'

import clsx from "clsx"
import { FC, ReactNode } from "react"

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined,
    fullWidth?: boolean,
    children?: ReactNode,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                min-w-[100px]
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                text-white
            `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary ? "bg-blue-middle hover:bg-orange-middle" : "text-white",
                danger && "bg-red hover:bg-orange-middle focus-visible:outline-orange-middle",
                !secondary && !danger && "bg-purple-middle hover:ring-white hover:bg-orange-middle hover:border-blue-dark hover:shadow-blue-light focus-visible:outline-bg-blue-middle"
            )}
        >
            {children}
        </button>
    )
}
