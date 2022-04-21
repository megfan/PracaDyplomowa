import React, {FC} from 'react';
import {Input} from "./Input";
import {observer} from "mobx-react-lite";

interface InputWithConversionProps {
    index: number;
    onChange: (index: number, value: number) => void;
    val: number | undefined;
    converter: number | undefined;
}

export const InputWithConversion: FC<InputWithConversionProps> = (observer(({index, onChange, val, converter}) => {
    return <div className={'flex flex-row items-center'}>
            <Input index={index}
                   inputWidth='w-10'
                   onChange={(index, valueAsNumber) => onChange(index, valueAsNumber)}/>
            <span className={'ml-4 text-white'}>{!!val && !!converter && (Math.round(converter * val) / 100)}</span>
    </div>
}));