import React from 'react';
import {InlineWidget} from 'react-calendly'

const Calendly = () => {

    return (
        <div className="my-3 mx-3">
            <InlineWidget
                url="https://calendly.com/frnchevalier/test-event"
                styles={{height: "800px", width: "100vw", borderRadius: "20px"}}/>
        </div>
    );
};

export default Calendly;