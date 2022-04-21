import React, {FC} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {Navbar} from "./Navbar";
import {Info} from "./Info";
import {Footer} from "./Footer";
import {Main} from "./Main";


export const Routing: FC = (props) => {
    let location = useLocation();
    let key = location.pathname;

    return <>
        <AnimatePresence>
            <Navbar/>
            <Routes location={location} key={key}>
                <Route path={'/'}
                       element={<Main/>}/>
                <Route path={'/info'}
                       element={<Info/>}/>
            </Routes>
            <Footer/>
        </AnimatePresence>
    </>
}