import React from 'react';

import Iframe from 'react-iframe';

const Pdf = (props) => {
    return( 
        <embed 
            style={{ height:"100%", width:"100%" }} 
            src={require('../../../pdf/pdf1.pdf')}
            zoom="scale"
            type="application/pdf"
        />
    )
}

export default Pdf;