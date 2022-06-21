import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Main} from "./Chickens/Main";
import Ch1 from '../assets/Ch1.jpg';
// import D1 from '../assets/D5.jpg';
import D1 from '../assets/D2.jpg';
// import D1 from '../assets/D1.jpg';
import P1 from '../assets/P1.jpg';
import {birdType} from "../AppState";


export const RouterApp: FC = () => {
    return (
        <Routes>
            <Route path='/PracaDyplomowa' element={<Main background={Ch1} bird={birdType.CHICKEN} type={'chicken'} key={1}/>} />
            <Route path='/perlice' element={<Main background={P1} bird={birdType.NUMIDIES} type={'duck'}  key={2}/>} />
            <Route path='/kaczki' element={<Main background={D1} bird={birdType.DUCK} type={'duck'}  key={3}/>} />
        </Routes>
    )
};