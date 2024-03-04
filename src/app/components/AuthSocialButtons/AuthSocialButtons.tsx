import { FC } from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonsProps {
    icon: IconType,
    onClick: () => void
}

export const AuthSocialButtons: FC<AuthSocialButtonsProps> = ({
    icon: Icon,
    onClick
}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-purple-middle
    ring-1 ring-inset ring-purple-middle hover:ring-white hover:bg-orange-middle hover:text-white focus:outline-offset-0'
    >
        <Icon />
    </button>
  )
}
