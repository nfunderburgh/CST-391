import React from 'react';
import { useState } from 'react';

const TrackLyrics = (props) => {

    // const [lyrics, setLyrics] = useState('Show lyrics of selected track here.');

    return (
        <div>
            <p>{props.text}</p>
        </div>
    );
};

export default TrackLyrics;