import React, {FC} from "react";

interface DataTableHeaderProps {
    list: string[];
}
export const DataTableHeader: FC<DataTableHeaderProps> = (props) => {
    return <>
        <thead className="text-xs text-greenLight uppercase bg-greenMedium dark:bg-greenMedium dark:text-greenLight">
        <tr>
            {props.list.map((h,idx) => {
                return  <th className="px-6 py-3" key={'headerData' + idx}>
                    {h}
                </th>
            })}
        </tr>
        </thead>
    </>
}