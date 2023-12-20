import React from "react";
import TrackTitle from './TrackTitle.js';

const TrackList = (props) => {
    const onGetDetails = (track) => {
        console.log('track', track);
        console.log('props', props);
        props.setLyricsText(track.trackLyrics);
        props.setVideoText(track.trackVideo);

    }

    console.log('props TrackList', props);
    const tracks = props.tracks.map((track) => {
        return (
            <div>
                <TrackTitle
                    trackTitle={track.title}
                    trackLyrics={track.lyrics}
                    trackVideo={track.video}
                    onGetDetails={onGetDetails}
                />
            </div>

        );
    });
    return <div className="container">{tracks}</div>
};

export default TrackList;