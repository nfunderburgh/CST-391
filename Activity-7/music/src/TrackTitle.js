import React from 'react';
import './Track.css';

const TrackTitle = (props) => {


    return (
        <div className='post-container'>
            <li>{props.trackTitle}</li>
            <button onClick={() => props.onGetDetails(props)}>OK</button>
        </div>
    );
};

export default TrackTitle;