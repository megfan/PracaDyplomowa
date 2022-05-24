import React, {FC} from 'react';

interface InputProps {
    index: number;
    onChange: (index: number, valueAsNumber: number) => void;
    inputWidth: string
}

export const Input: FC<InputProps> = ({index, onChange, inputWidth}) => {
    return (
            <div className="flex items-center">
                <input id="checkbox-table-1"
                       inputMode={'text'}
                       type="number"
                       autoComplete={'off'}
                       onChange={(v) => onChange(index, v.target.valueAsNumber)}
                       className={'bg-greenMedium border border-greenLight text-greenLight text:D-sm rounded-lg ' +
                           'focus:ring-greenLight focus:border-greenLight focus:bg-greenLight block pl-4 p-2.5 dark:bg-dark dark:border-greenLight ' +
                           'dark:text-white dark:focus:ring-dark dark:focus:border-greenLight ' + inputWidth}/>
            </div>
    )
};