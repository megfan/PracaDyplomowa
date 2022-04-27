import React, {FC} from 'react';
import {observer} from "mobx-react-lite"
import {BrowserRouter} from 'react-router-dom';
import {Routing} from "./components/Routing";


export const App: FC = observer(() => {
    return (
        <div className='App'>
            <BrowserRouter basename={'pracadyplomowa'}>
                <Routing/>
            </BrowserRouter>
        </div>
    )
});

export default App;
