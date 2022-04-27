import React, {FC} from 'react';
import {Navbar} from "./Navbar";
import {Info} from "./Info";
import {Footer} from "./Footer";
import {Main} from "./Main";
import {Route} from 'react-router-dom';


export const Routing: FC = (props) => {

    return <>
        <Navbar/>
        <main>
            <Route path={'/'}
                   caseSensitive={true}
                   element={<Main/>}/>
            <Route path={'/info'}
                   caseSensitive={true}
                   element={<Info/>}/>
        </main>
        <Footer/>
    </>
}