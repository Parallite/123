import { Conversation, Message, User } from "@prisma/client";
import { FieldValues, UseFormRegister } from "react-hook-form";

// AuthForm

export type Variant = 'LOGIN' | 'REGISTER'

export interface AuthFormFields extends FieldValues {
    name: string,
    email: string,
    password: string
}

export type FieldsId = "name" | "email" | "password"

export type InputRegister =
    UseFormRegister<AuthFormFields> |
    UseFormRegister<SettingsFormFields> |
    UseFormRegister<MessageFormFields> |
    UseFormRegister<GroupChatFields>

// Messages

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[];
    messages: FullMessageType[]
};

export interface MessageFormFields extends FieldValues {
    message: string,
}

// Settings

export interface SettingsFormFields extends FieldValues {
    name: string,
    image: string
}

// Group chat

export interface GroupChatFields extends FieldValues {
    name: '',
    members: []
}