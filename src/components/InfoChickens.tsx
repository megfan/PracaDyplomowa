import React from 'react';
import Ch3 from "../assets/Ch3.jpg";


export const InfoChickens = () => {
    return <div className="info fullScreen mt-8" style={{backgroundImage: `url(${Ch3}`}}>
        <h1 className='text-4xl text-blueTxt mb-4'>Żywienie kur nieśnych i brojlerów</h1>
        <div className='bg-blueTxt w-32 h-1 p-0.5 my-4 rounded-2xl'> </div>
        <p className='w-2/5 text-left text-sm mt-8 tracking-widest font-light break-words text-justify'>
           Pasza dla kur powinna być dobrze zbilansowana. Ze względu na ograniczoność pobierania (bezzębny dziób) i specyfikę budowy ukłądu pokarmowego.
            Podstawą są pasze treściwe, podawane w formie rozdrobnionej dla zwiększenia ich dostępności dla enzymów trawiennych.
            Podstawą mieszanek najczęściej stosowanych w chowie przydomowym są zboża – smaczne, łatwostrawne, o wysokiej zawartości węglowodanów, głównie w formie skrobi. Należy jednak pamiętać, że białka zbóż nie są w stanie zaspokoić zapotrzebowania ptaków na proteiny, a szczególnie aminokwasy egzogenne (niezbędne do życia, a niesyntetyzowane w organizmie) – lizynę i metioninę. I tak pszenica ma za mało leucyny, żyto zawiera mało tryptofanu i treoniny, a ponadto posiada wiele substancji antyżywieniowych, dlatego nie jest polecane w kurzej diecie. Pszenżyto z kolei zawiera mniej szkodliwych z iązków, a przy tym ma więcej lizyny. Kukurydza ma bardzo wysoką wartość energetyczną, a dzięki ksantofilom (żółtym barwnikom roślinnym należącym do karotenoidów) zabarwia żółtko na pożądany kolor. Nie należy jednak podawać jej w nadmiernych ilościach, ponieważ zbyt wysoki udział w dawce może skutkować otłuszczeniem niosek. Owies dobrze uzupełnia energię i witaminy z grupy B, ale jest niestety zbyt włóknisty, by stosować go w dużym udziale bez pogorszenia strawności paszy. W hodowlach przyzagrodowych świetnie sprawdza się natomiast wzbogacanie jadłospisu niosek o gotowane lub parowane ziemniaki, tartą marchew, buraki, kapustę. Ptaki powinny mieć ponadto dostęp do zielonki.
        </p>
        <p className='text-blueTxt text-xs mt-4'>Materiał opublikowany w tygodnikach Wydawnictwa Promocji Regionu: CGD, CBR, CWA, CRY, CLI 16 lutego 2017 r.</p>
    </div>
}