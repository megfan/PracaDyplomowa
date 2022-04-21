import React, {FC} from "react";

interface ConversionValuesProps {
    value?: number;
    converter: number;
}

export const ConversionValues: FC<ConversionValuesProps> = ({value, converter}) => {
    return <>
        <td className="px-6 py-4">
            {converter}
            <span className={'ml-2 text-white'}>{!!value && (Math.round(converter * value) / 100)}</span>
        </td>
    </>
}