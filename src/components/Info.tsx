import React, {FC} from 'react';
import {motion} from 'framer-motion';
import Ch3 from "../assets/Ch3.jpg";

interface InfoProps {
}

export const Info: FC<InfoProps> = (props) => {
    return <motion.div className="info"
                       style={{backgroundImage: `url(${Ch3}`}}
                       initial={{y: '2000px', opacity: 0}}
                       animate={{y: 0, opacity: 1}}
                       exit={{y: window.innerWidth, opacity: 1}}
                       transition={{
                           duration: 1,
                           ease: "easeInOut",
                           delay: .5
                       }}>
        <p className='w-2/5 text-left'>
            Bacon ipsum dolor amet chuck pig biltong, spare ribs ham hock buffalo doner salami pork chop beef. Cupim
            turkey capicola, meatball picanha ham pork chop frankfurter jerky. Alcatra kevin pork cow swine turducken,
            turkey sausage rump. Cow turducken sirloin tongue chislic. Turducken biltong landjaeger meatball, kielbasa
            pork chop frankfurter rump bacon ground round pig beef ribs.
            Drumstick filet mignon venison, shank salami pork chop shankle swine cow turkey. Sausage shoulder ham
            turkey, frankfurter salami picanha kevin cow pork belly venison drumstick bresaola. Turducken t-bone
            pancetta chuck landjaeger. Kielbasa tenderloin porchetta alcatra prosciutto strip steak spare ribs t-bone
            ham turducken. Shoulder filet mignon shankle short loin. Rump filet mignon porchetta picanha doner.
            Short ribs shankle buffalo biltong beef ribs. Boudin kevin flank, strip steak meatloaf short ribs biltong
            porchetta. Turkey kielbasa corned beef tongue, pork hamburger pastrami strip steak capicola pork belly.
            Short loin corned beef ribeye bresaola. Tenderloin venison landjaeger strip steak ham hock. Ribeye jowl
            shank spare ribs, beef chicken pork loin. Venison ribeye strip steak salami brisket kevin prosciutto
            meatball.
        </p>
    </motion.div>
}