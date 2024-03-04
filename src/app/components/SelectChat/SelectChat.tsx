import React, { FC } from 'react'
import Select from 'react-select'


interface OptionType {
  value: string;
  label: string | null;
};

// Скорректировать типизацию

interface SelectChatProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: OptionType[];
  disabled?: boolean;
}

export const SelectChat: FC<SelectChatProps> = ({
  label,
  value,
  onChange,
  options,
  disabled
}) => {
  return (
    <div className='z-[100]'>
        <label className='block text-sm font-medium leading-6 text-green-light'>
          {label}
        </label>
        <div className='mt-2'>
        <Select 
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999
            }),
          }}
          classNames={{
            control: () => 'text-sm'
          }}
        />
        </div>
    </div>
  )
}
