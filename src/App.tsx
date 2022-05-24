import React, {FC} from 'react';
import {observer} from "mobx-react-lite"
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {RouterApp} from "./components/RouterApp";


export const App: FC = observer(() => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar/>
                <RouterApp/>
                <Footer/>
            </div>
        </BrowserRouter>
)
});

export default App;
