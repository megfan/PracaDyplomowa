import React, {FC} from 'react';

let currentYear = new Date().getFullYear();

export const Footer: FC = () => {
    return   <footer className="App-footer">
        <p>Copyright &copy; {currentYear} M45. All rights reserved. </p>
        <p>Małgorzata Staszewska</p>
    </footer>
}