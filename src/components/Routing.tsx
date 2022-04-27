import React, {FC} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {Navbar} from "./Navbar";
import {Info} from "./Info";
import {Footer} from "./Footer";
import {Main} from "./Main";


export const Routing: FC = (props) => {
    let location = useLocation();
    let key = location.pathname;

    return <>
        <Navbar/>
        <main>
            <Routes location={location} key={key}>
                <Route path={'/'}
                       caseSensitive={true}
                       element={<Main/>}/>
                <Route path={'/info'}
                       caseSensitive={true}
                       element={<Info/>}/>
            </Routes>
        </main>
        <Footer/>
    </>
}