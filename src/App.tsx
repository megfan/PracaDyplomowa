import React, {FC} from 'react';
import {observer} from "mobx-react-lite"
import {Home} from "./components/Home";
import {DataTable} from "./components/DataTable/DataTable";
import {Navbar} from "./components/Navbar";
import {Info} from "./components/Info";
import {Footer} from "./components/Footer";


export const App: FC = observer(() => {
    return (
        <div className='App'>
            <Navbar/>
            <Home/>
            <DataTable/>
            <Info/>
            <Footer/>
        </div>
    )
});

export default App;
