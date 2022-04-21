import React from 'react';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

export const Navbar = () => {
    
    return (
        <motion.div
            className='header'
            initial={{opacity: 0, y: '-180'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-100'}}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: .6
            }}
        >
            <h4 className='text-xl font-medium'>Receptury mieszanek - 
                <span className='text-greenTxt text-lg'> Nioski & Brojlery</span></h4>
        <div className='mr-4'>
            <Link to={'/'} className='mr-4 hover:text-greenTxt'>Home</Link>
            <Link to={'/info'} className='hover:text-greenTxt'>O projekcie</Link>
        </div>
        </motion.div>
    )
};