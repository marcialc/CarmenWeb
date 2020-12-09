import React from 'react';

import classes from './Pdf.css';

const Pdf = () => {
    return( 
        <object className={classes.Pdf} data={require('./pdf2.pdf')+"#toolbar=0"} type="application/pdf">
            <a href={require('./pdf2.pdf')}>test.pdf</a>
        </object>
    )
}

export default Pdf;


// const Pdf = () => {
//     return( 
//         <embed 
//             className={classes.Pdf} 
//             src={require('./pdf2.pdf')+"#toolbar=0"}
//             zoom="scale"
//             type="application/pdf"
//         />
//     )
// }

// export default Pdf;

// const Pdf = () => {
//     return( 
//         <div className={classes.Pdf} >
//             <img src={require('./one.jpg')} />
//             <img src={require('./two.jpg')} />
//         </div>
//     )
// }

// export default Pdf;