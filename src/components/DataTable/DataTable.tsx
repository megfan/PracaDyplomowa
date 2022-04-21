import {observer} from "mobx-react-lite"
import React, {FC} from "react";
import {DataTableHeader} from "./DataTableHeader";
import {dataState} from "../../DataTableState";
import {ingredientsList} from "../../localDB/DB";
import {headerData} from "../../localDB/headerData";
import {Summary} from "../Summary";
import {RecomendedDoses} from "../RecomendedDoses";
import {motion} from 'framer-motion';
import {DataTableBody} from "./DataTableBody";

export const DataTable: FC = observer(() => {
    const state = dataState;

    return <>

        <motion.div className="relative overflow-x-auto my-16 mx-24 pb-8"
                    initial={{y: '2000px', opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: window.innerWidth, opacity: 1}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: .5
                    }}>
            <div className='mt-32 mb-32 text-greenTxt font-quick flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-4'>
                    Arkusz obliczeniowy receptur mieszanek</h1>
                <h2 className='text-xl'>Wykonany na podstawie materiałów opracowanych przez dr hab. Andrzej Łozicki, prof. SGGW</h2>
                <div className='bg-greenTxt w-32 h-1 mt-16 rounded-2xl'> </div>
            </div>
            <div className="rounded-2xl relative overflow-x-auto">
            <table className="w-full text-sm text-left text-greenTxt dark:greenTxt pb-8 shadow-md rounded-lg ">
                <DataTableHeader list={Object.values(headerData)}/>
                <tbody>
                <DataTableBody list={ingredientsList} state={state}/>
                <Summary summaryList={Array.from(state.summaryValues)}
                         totalVal={state.summaryTotal}
                         totalPrice={state.priceTotal}
                />
                </tbody>
                <RecomendedDoses/>
            </table>
            </div>
        </motion.div>
    </>
}); 
