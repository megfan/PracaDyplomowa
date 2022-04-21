import React, {FC} from 'react';
import {DataTableState, Ingredient} from "../../DataTableState";
import {observer} from "mobx-react-lite";
import {Input} from "./Input";
import {InputWithConversion} from "./InputWithConversion";
import {ConversionValues} from "./ConversionValues";

interface DataTableBodyProps {
    list: Ingredient[];
    state: DataTableState;
}

export const DataTableBody: FC<DataTableBodyProps> = (observer(({list, state}) => {
    return (<>
        {list.map(ingredient => {
            return <tr
                className="bg-white border-b dark:bg-greenDark dark:border-greenLight hover:bg-greenDark dark:hover:bg-greenMedium">
                <th scope="row" className="px-6 py-4 font-medium text-greenTxt dark:text-white whitespace-nowrap">
                    {ingredient.name}
                </th>
                <td className="w-4 p-4">
                    <Input index={ingredient.index}
                           inputWidth='w-20'
                           onChange={(index, valueAsNumber) => state.setDataValue(index, valueAsNumber)}/>
                </td>
                <td className="w-4 p-4">
                    <InputWithConversion
                        index={ingredient.index}
                        onChange={(index, valueAsNumber) => state.setPrice(index, valueAsNumber)}
                        val={state.dataValues.get(ingredient.index)}
                        converter={state.prices.get(ingredient.index)}/>
                </td>


                {Object.values(ingredient.converters).map(v => {
                    return <ConversionValues
                        value={state.dataValues.get(ingredient.index)}
                        converter={v}
                        key={'conversionValues' + v}/>
                })}
            </tr>
        })}
        </>
    )
}));