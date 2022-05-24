import React, {FC} from 'react';

export interface HomeProps {
    bg: string;
    type: string;

}

export const Home: FC<HomeProps> = (({bg, type}) => {
    return (
        <div className={('home ' + type)}
             style={{backgroundImage: `url(${bg}`}}>
            <div className='flex justify-start flex-col text-left m-32'>
                <h1 className={'mb-4 font-semibold text-4xl' + (type === 'chicken' ? ' text-blueTxt' : '')}>Szkoła
                    Główna Gospodarstwa Wiejskiego w Warszawie</h1>
                <h2 className={'mb-16 font-semibold text-4xl' + (type === 'chicken' ? ' text-blueTxt' : '')}> - Wydział
                    Rolnictwa i Biologii </h2>
                <h3 className='text-xl text-white'>Małgorzata Staszewska</h3>
                <h3>Praca dyplomowa</h3>
                <h2 className={'text-2xl my-4' + (type === 'chicken' ? ' text-blueTxt ' : '')}>"Arkusz obliczeniowy
                    receptur mieszanek - Kury nioski i
                    brojlery"</h2>
            </div>
            <div className='flex items-end flex-col text-white self-end m-16'>
                <h4>Praca wykonana pod kierunkiem</h4>
                <h4>dr hab. Andrzej Łozick</h4>
                <h4>Wydział Hodowli, Bioinżynierii i Ochrony Zwierząt</h4>
                <h4>Katedra Żywienia Zwierzat i Gospodarki Paszowej</h4>
                <h4> Samodzielna Pracownia Żywienia Zwierząt</h4>
            </div>
        </div>
    )
});