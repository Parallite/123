import { useOtherUser } from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import { MdDeleteOutline } from "react-icons/md";
import { format } from "date-fns"
import { FC, Fragment, useMemo, useState } from "react"
import { Avatar } from "@/components/Avatar"
import { ConfirmModal } from "./ConfirmModal"
import { AvatarGroup } from "@/app/components/AvatarGroup";
import { useActiveList } from "@/app/hooks/useActiveList";

interface ProfileDrawerProps {
    isOpen: boolean,
    onClose: () => void,
    data: Conversation & {
        users: User[]
    }
}

export const ProfileDrawer: FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
}) => {
    const otherUser = useOtherUser(data);
    const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false)

    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt), 'PP')
    }, [otherUser.createdAt]);

    const title = useMemo(() => {
        return data.name || otherUser.name
    }, [data.name, otherUser.name]);

    const statusText = useMemo(() => {
        if (data.isGroup) {
            return `${data.users.length} members`
        }

        return isActive ? 'Active' : 'Offline'
    }, [data, isActive])

    return (
        <>
            <ConfirmModal
                isOpen={confirmModalOpen}
                onClose={() => setConfirmModalOpen(false)}
            />
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className='relative z-50' onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel
                                        className='pointer-events-auto w-screen max-w-md'
                                    >
                                        <div className="relative flex h-full flex-col overflow-hidden bg-purple-dark py-6 shadow-xl">
                                            <div className="px-4 sm:px-6 z-10">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            onClick={onClose}
                                                            type="button"
                                                            className="rounded-md bg-red text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-orange-middle focus:ring-offset-2"
                                                        >
                                                            <span className="sr-only">
                                                                Close panel
                                                            </span>
                                                            <IoClose size={24} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6 z-10">
                                                <div className="flex flex-col items-center h-full justify-between bg">
                                                    <div className="flex flex-col items-center gap-y-2 text-white">
                                                        <div>
                                                            {
                                                                data.isGroup ? (
                                                                    <AvatarGroup users={data.users} />
                                                                ) : (
                                                                    <Avatar user={otherUser} />

                                                                )
                                                            }
                                                        </div>
                                                        <div>
                                                            {title}
                                                        </div>
                                                        <div className="text-sm text-green-middle">
                                                            {statusText}
                                                        </div>
                                                    </div>
                                                    <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0">
                                                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                                            {
                                                                data.isGroup &&  (
                                                                    <div>
                                                                        <dt className="text-sm font-medium text-green-middle sm:w-40 sm:flex-shrink-0">
                                                                            Emails:
                                                                        </dt>
                                                                        <dd className="mt-1 text-sm text-white sm:col-span-2">
                                                                            {
                                                                                data.users.map((user) => user.email).join(', ')
                                                                            }
                                                                        </dd>
                                                                    </div>
                                                                )
                                                            }
                                                            {!data.isGroup && (
                                                                <div>
                                                                    <dt className="text-sm font-medium text-green-middle sm:flex-shrink-0">
                                                                        Email
                                                                    </dt>
                                                                    <dd className="mt-1 text-sm text-white sm:col-span-2">
                                                                        {otherUser.email}
                                                                    </dd>
                                                                </div>
                                                            )}
                                                            {!data.isGroup && (
                                                                <>
                                                                    <hr />
                                                                    <div>
                                                                        <dt className="text-sm font-medium text-green-middle sm:w-40 sm:flex-shrink-0">
                                                                            Joined
                                                                        </dt>
                                                                        <dd className="mt-1 text-sm text-white sm:col-span-2">
                                                                            <time dateTime={joinedDate}>
                                                                                {joinedDate}
                                                                            </time>
                                                                        </dd>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </dl>
                                                    </div>
                                                    <div className="flex gap-10 my-8 z-10">
                                                        <div
                                                            onClick={() => setConfirmModalOpen(true)}
                                                            className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                                                        >
                                                            <div className="w-10 h-10 bg-red text-white rounded-full flex items-center justify-center">
                                                                <MdDeleteOutline size={20} />
                                                            </div>
                                                            <div className="text-sm text-red font-bold uppercase">
                                                                Delete
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='absolute w-40 h-40 -top-10 -right-10 bg-orange-middle rounded-[35%65%52%48%/28%46%54%72%]'/>
                                            <div className='absolute w-2 h-2 top-24 right-14 z-20 bg-white rounded-full'/>
                                            <div className='absolute w-2 h-2 bottom-32 right-44 z-20 bg-white rounded-full'/>
                                            <div className='absolute w-80 h-60 -bottom-14 -right-12 bg-green-light rounded-[70%30%69%31%/43%28%72%67%]'/>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
