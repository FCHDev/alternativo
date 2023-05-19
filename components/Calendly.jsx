import React from 'react';
import {InlineWidget} from 'react-calendly'

const Calendly = () => {

    return (
        <div className="mb-3 mx-3">
            <InlineWidget
                url="https://calendly.com/alternativo/contact?hide_gdpr_banner=1"
                styles={{height: "800px", width: "100vw", borderRadius: "20px"}}/>
        </div>
    );
};

export default Calendly;

// https://calendly.com/frnchevalier/test-event  https://calendly.com/alternativo/declaration_fiscale https://calendly.com/alternativo/contact