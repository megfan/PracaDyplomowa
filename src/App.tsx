import React, {FC} from 'react';
import {observer} from "mobx-react-lite"
import {BrowserRouter as Router} from 'react-router-dom';
import {Routing} from "./components/Routing";


export const App: FC = observer(() => {
    return (
        <div className='App'>
            <Router>
                <Routing/>
            </Router>
        </div>
    )
});

export default App;
