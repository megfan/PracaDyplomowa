import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    
    return (
        <div className='header'>
            <h4 className='text-xl font-medium'>Receptury mieszanek - 
                <span className='text-greenTxt text-lg'> Nioski & Brojlery</span></h4>
        <div className='mr-4'>
            <Link to={'/'} className='mr-4 hover:text-greenTxt'>Home</Link>
            <Link to={'/info'} className='hover:text-greenTxt'>O projekcie</Link>
        </div>
        </div>
    )
};