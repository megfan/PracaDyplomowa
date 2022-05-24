import React, {FC} from "react";
import {observer} from "mobx-react-lite";

interface SummaryProps {
    summaryList: Array<[string, number]>;
    totalVal: number;
    totalPrice: number;
}

export const Summary: FC<SummaryProps> = (observer((
    {summaryList, totalVal, totalPrice}) => {
    return <tr>
        <th className="px-6 py-8">W 1 kg przygotowanej mieszanki</th>
        <th className="px-6 py-3">{totalVal}&nbsp;%</th>
        <th className="px-6 py-3">{totalPrice}&nbsp;PLN</th>
        {summaryList.map(([key, val]) => {
            return <th className="px-6 py-3" key={'summaryBaluesKeys' + key}>x {val}</th>
        })}
    </tr>
}));