
import { Modal } from '@/app/components/Modal';
import Image from 'next/image';
import React, { FC } from 'react'

interface ImageModalProps {
    isOpen?: boolean;
    onClose: () => void;
    src?: string | null
}

export const ImageModal: FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {

    if (!src) {
        return null
    }


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='w-80 h-80'>
                <Image 
                    alt='Image'
                    className='object-fit'
                    fill
                    src={src}
                />
            </div>
        </Modal>
    )
}
