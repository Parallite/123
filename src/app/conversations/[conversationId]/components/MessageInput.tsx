import { InputRegister } from "@/app/types";
import { FC } from "react";
import { FieldErrors } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: InputRegister;
    errors: FieldErrors
}

export const MessageInput: FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
    return (
        <div className="relative w-full">
            <input 
                id={id}
                type={type}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
    )
}
