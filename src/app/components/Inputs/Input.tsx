import clsx from "clsx"
import { FC } from "react"
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { FieldsId, AuthFormFields, SettingsFormFields, InputRegister } from "@/app/types"

import { BsFillPersonFill } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";

type IconType = "password" | "email" | "name"

// validationSchema

interface InputProps {
    label: string,
    id: FieldsId,
    type?: string,
    required?: boolean,
    register: InputRegister,
    errors: FieldErrors,
    icon?: IconType,
    disabled?: boolean,
    secondary?: boolean,
}

const icons = (icon: string) => {
    switch (icon) {
        case 'name': {
            return <BsFillPersonFill />;
        }
        case 'password': {
            return <BsKeyFill />;
        }
        case 'email': {
            return <BsEnvelopeFill />;
        }
        default: {
            return <></>;
        }
    }
};

export const Input: FC<InputProps> = ({
    label,
    id,
    type,
    icon,
    required,
    errors,
    disabled,
    secondary,
    register
}) => {
        return (
            <div>
                <label htmlFor={id} className={clsx(`
                block 
                text-sm 
                font-medium 
                leading-6 
                text-purple-middle`,
                    secondary && "text-green-light"
                )}>
                    {label}
                </label>
                <div className="mt-2 flex">
                    <input
                        id={id}
                        type={type}
                        autoComplete={id}
                        disabled={disabled}
                        {...register(id, { required })}
                        className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        shadow-sm
                        ring-1
                        ring-inset
                        text-purple-dark
                        ring-purple-middle
                        placeholder:text-purple-middle
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-orange-middle
                        sm:text-sm
                        sm:leading-6`,
                            errors[id] && "focus:ring-red",
                            disabled && "opacity-50 cursor-default",
                            icon && "rounded-s-md rounded-e-none",
                            secondary && " text-green-light, ring-green-light placeholder:text-green-light"
                        )}
                    />
                    {
                        icon && <div className="inline-flex justify-center rounded-e-md bg-white px-3 py-2 text-purple-middle
                    ring-1 ring-inset ring-purple-middle align-middle">{icons(icon)}</div>
                    }
                </div>
            </div>
        )
    }
