'use client'

import { useConversation } from "@/app/hooks/useConversation"
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { CldUploadButton } from 'next-cloudinary';

import { MessageInput } from "./MessageInput";
import { MessageFormFields } from "@/app/types";

export const Form = () => {
    const { conversationId } = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<MessageFormFields>({
        defaultValues: {
            message: ''
        }
    })

    const onSubmit: SubmitHandler<MessageFormFields> = (data) => {
        setValue('message', '', { shouldValidate: true });

        axios.post('/api/messages', {
            ...data,
            conversationId
        })
    }

    const handleUpload = (result: any) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId
        })
    }

    return (
        <div className="py-4 px-4 rounded-b-xl bg-white border-t-[2px] flex items-center gap-2 lg:gap-4 w-full">
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={handleUpload}
                uploadPreset="rza3ffqm"
            >
                <HiPhoto size={30} className="text-purple-middle hover:text-orange-middle" />
            </CldUploadButton>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-2 lg:gap-4 w-full"
            >
                <MessageInput
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder="Type a message here..."
                />
                <button
                    type="submit"
                    className="rounded-full p-2 bg-purple-middle cursor-pointer hover:bg-orange-middle transition">
                    <HiPaperAirplane
                        size={18}
                        className="text-slate-50"
                    />
                </button>
            </form>
        </div>
    )
}
