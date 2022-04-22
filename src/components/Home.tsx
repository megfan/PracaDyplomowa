import React from 'react';
import Ch1 from '../assets/Ch1.jpg';

export const Home = () => {
    return (
        <div className='home'
             style={{backgroundImage: `url(${Ch1}`}}>
            <div className='flex justify-start flex-col text-left m-16'>
                <h1 className='mb-4 font-semibold text-4xl text-greenTxt'>Szkoła Główna Gospodarstwa Wiejskiego w Warszawie</h1>
                <h2 className='mb-16 font-semibold text-4xl text-greenTxt'> - Wydział Rolnictwa i Biologii </h2>
                <h3 className='text-xl text-white'>Małgorzata Staszewska</h3>
                <h3>Praca dyplomowa</h3>
                <h2 className='text-2xl my-4 text-greenTxt '>"Arkusz obliczeniowy receptur mieszanek - Kury nioski i
                    brojlery"</h2>
            </div>
            <div className='flex items-end flex-col text-white self-end'>
                <h4>Praca wykonana pod kierunkiem</h4>
                <h4>Tytuł naukowy, imię i nazwisko promotora</h4>
                <h4>Miejsce zatrudnienia promotora (Wydział/Katedra/Zakład)</h4>
            </div>
        </div>
    )
}