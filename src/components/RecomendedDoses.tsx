import React from 'react';
import {recommendedDosesData} from "../localDB/RecommendedDB";


export const RecomendedDoses = () => {
    return <>
        <tr className="text-xs text-greenTxt bg-greenDark dark:bg-greenDark dark:greenTxt uppercase">
            <th className="px-6 py-3" scope="row">Zalecane w 1 kg paszy dla różnych grup produkcyjnych:</th>
            <th className="px-6 py-3"/>
            <th className="px-6 py-3"/>
            <th className="px-6 py-3"/>
            <th className="px-6 py-3">energia</th>
            <th className="px-6 py-3">białko</th>
            <th className="px-6 py-3">lizyna</th>
            <th className="px-6 py-3">metionina</th>
            <th className="px-6 py-3">tryptofan</th>
            <th className="px-6 py-3">arginina</th>
            <th className="px-6 py-3">włókno</th>
            <th className="px-6 py-3">Ca</th>
            <th className="px-6 py-3">P ogólny</th>
            <th className="px-6 py-3">Na</th>
        </tr>
        {recommendedDosesData.map(d => {
            return <tr
                className="bg-white border-b dark:bg-white dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200"
                key={'recommendeDOsesData' + d.białko + d.lizyna}>
                <th className="px-6 py-3">{d.name}</th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td className="px-6 py-3">{d.energia}</td>
                <td className="px-6 py-3">{d.białko}</td>
                <td className="px-6 py-3">{d.lizyna}</td>
                <td className="px-6 py-3">{d.metionina}</td>
                <td className="px-6 py-3">{d.tryptofan}</td>
                <td className="px-6 py-3">{d.arginina}</td>
                <td className="px-6 py-3">{d.włókno}</td>
                <td className="px-6 py-3">{d.Ca}</td>
                <td className="px-6 py-3">{d.P}</td>
                <td className="px-6 py-3">{d.Na}</td>
            </tr>
        })}
    </>
}