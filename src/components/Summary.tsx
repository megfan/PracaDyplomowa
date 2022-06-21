import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import {DataTableState} from "./DataTable/DataTableState";

interface SummaryProps {
    state: DataTableState;
}

export const Summary: FC<SummaryProps> = (observer((
    {state}) => {
    return <tr>
        <th className="px-6 py-8">W 1 kg przygotowanej mieszanki</th>
        <th className="px-6 py-3">{state.summaryTotal}&nbsp;%</th>
        <th className="px-6 py-3">{state.priceTotal}&nbsp;PLN</th>
        {Array.from(state.summaryValues).map(([key, val]) => {
            return <th className="px-6 py-3" key={'summaryBaluesKeys' + key}>x {val}</th>
        })}
    </tr>
}));