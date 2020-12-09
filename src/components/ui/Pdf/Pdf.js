import React from 'react';

import classes from './Pdf.css';

// const Pdf = (props) => {
//     return( 
//         <div className={classes.Pdf}>
//         <object data={require('../../../pdf/pdf1.pdf')+"#toolbar=0"} type="application/pdf">
//             <a href={require('../../../pdf/pdf1.pdf')}>test.pdf</a>
//         </object>
//         </div>
//     )
// }

// export default Pdf;


const Pdf = () => {
    return( 
        <embed 
            className={classes.Pdf} 
            src={require('../../../pdf/pdf1.pdf')+"#toolbar=0"}
            type="application/pdf"
        />
    )
}

export default Pdf;