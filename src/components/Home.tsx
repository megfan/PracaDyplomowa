import React from 'react';
import {motion} from 'framer-motion';
import Ch1 from '../assets/Ch1.jpg';

export const Home = () => {
    return (
        <motion.div className='home'
             style={{backgroundImage: `url(${Ch1}`}}
                    initial={{y: window.innerHeight}}
                    animate={{y: 0}}
                    transition={{
                        duration: .5,
                        ease: "easeInOut",
                        delay: .2
                    }}
        >
            <motion.div
                className='flex justify-start flex-col text-left m-16'
                initial={{opacity: 0, marginTop: '-4rem'}}
                animate={{opacity: 1, marginTop: '4rem'}}
                transition={{
                    duration: .5,
                    ease: "easeInOut",
                    delay: .4
                }}
            >

                <h1 className='mb-4 font-semibold text-4xl text-greenTxt'>Szkoła Główna Gospodarstwa Wiejskiego w Warszawie</h1>
                <h2 className='mb-16 font-semibold text-4xl text-greenTxt'> - Wydział Rolnictwa i Biologii </h2>
                <h3 className='text-xl text-white'>Małgorzata Staszewska</h3>
                <h3>Praca dyplomowa</h3>
                <h2 className='text-2xl my-4 text-greenTxt '>"Arkusz obliczeniowy receptur mieszanek - Kury nioski i
                    brojlery"</h2>
            </motion.div>
            <motion.div className='flex items-end flex-col text-white self-end'
                        initial={{opacity: 0, marginTop: '-4rem'}}
                        animate={{opacity: 1, marginTop: '8rem'}}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            delay: .6
                        }}
            >
                <h4>Praca wykonana pod kierunkiem</h4>
                <h4>Tytuł naukowy, imię i nazwisko promotora</h4>
                <h4>Miejsce zatrudnienia promotora (Wydział/Katedra/Zakład)</h4>
            </motion.div>
        </motion.div>
    )
}