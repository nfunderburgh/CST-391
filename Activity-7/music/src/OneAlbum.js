import React, { useState } from "react";
import TrackLyrics from './TrackLyrics.js';
import TrackVideo from './TrackVideo.js';
import TrackList from './TrackList.js';

const OneAlbum = (props) => {

    const trackList = props.album.tracks;
    const [Lyricstext, setLyricsText] = useState("Show lyrics of selected track here.");
    const [Videotext, setVideoText] = useState("Show video link here");
    console.log('Tracks List ', trackList);

    const updateLyrics = (text) => {
        setLyricsText(text);
    }

    const updateVideo = (text) => {
        console.log('Update text to ', text);
        setVideoText(text);
    }

    return (
        <div className='container'>
            <h2>Album Details for {props.album.title}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <img
                            src={props.album.image}
                            className='card-img-top'
                            alt={props.album.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.album.title}</h5>
                            <p className="card-text">{props.album.description}</p>
                            <div className="list-group">
                                <li>Show the album's tracks here</li>
                                <TrackList tracks={trackList} setLyricsText={updateLyrics} setVideoText={updateVideo} />

                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col col-sm-9">
                    <div className="card">
                        <TrackLyrics text={Lyricstext} />
                    </div>
                    <div className="card">
                        <TrackVideo text={Videotext} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OneAlbum;