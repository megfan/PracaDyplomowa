import React, {FC} from 'react';
import {Home} from "../Home";
import {DataTable} from "../DataTable/DataTable";
import {InfoChickens} from "../InfoChickens";
import {birdType} from "../../AppState";
import {InfoNumididae} from "../InfoNumididae";
import {InfoDucks} from "../InfoDucks";


interface MainProps {
    background: any;
    bird: birdType;
    type: string
}

export const Main: FC<MainProps> = ({background, bird, type}) => {
    const birdInfoPage = () => {
        switch(bird) {
            case birdType.CHICKEN:   return <InfoChickens />;
            case birdType.NUMIDIES: return <InfoNumididae />;
            case birdType.DUCK:   return <InfoDucks/>;
            default: return <h1>No project match</h1>
        }
    }
    
    return (<>
            <Home bg={background} type={type}/>
            <DataTable bird={bird}/>
            {birdInfoPage()}
        </>
    )
}