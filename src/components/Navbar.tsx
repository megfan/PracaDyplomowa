import React from 'react';
import {NavLink as Link} from "react-router-dom";
import {AppState, birdType} from "../AppState";

export const Navbar = () => {
    const state = new AppState();

    return (
        <div className='header'>
            <h4 className='text-xl font-medium'>Receptury mieszanek</h4>
            <nav>
                <ul className='mx-4 flex'>
                    <li className='text-lg mr-4'>
                        <Link to="/PracaDyplomowa" onClick={() => state.setType(birdType.CHICKEN)} 
                              className={({isActive}) => isActive ? 'text-blueTxt font-bold' : ''}>
                            Nioski & Brojlery
                        </Link>
                    </li>
                    <li className='text-lg mr-4'>
                        <Link to="/perlice"  onClick={() => state.setType(birdType.NUMIDIES)} 
                              className={({isActive}) => isActive ? 'text-blueTxt font-bold' : ''}>
                            Perlice
                        </Link>
                    </li>
                    <li className='text-lg mr-4'>
                        <Link to="/kaczki"  onClick={() => state.setType(birdType.DUCK)} 
                              className={({isActive}) => isActive ? 'text-blueTxt font-bold' : ''}>
                            Kaczki
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};