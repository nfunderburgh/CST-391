import React from 'react';
import { useState } from 'react';

const TrackVideo = (props) => {

    return (
        <div>
            <a href={props.text}>{props.text}</a>
        </div>
    );
};

export default TrackVideo;