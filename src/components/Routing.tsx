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
            <Routes location={location} key={key}>
                <Route path={'/'}
                       element={<Main/>}/>
                <Route path={'/info'}
                       element={<Info/>}/>
            </Routes>
            <Footer/>
    </>
}