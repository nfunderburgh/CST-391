import React, { useState } from 'react';
import Card from './Card.js'

const App = function() {
    return (
      <div>
        <h1>I like music!</h1>
        <Card
        albumTitle="Abby Road"
        albumDescription="Abbey Road is the eleventh studio album by English rock band the Beatles,
        released on 26 September 1969 by Apple Records. The recording sessions for the album were the
        last in which all four Beatles participated."
        imgURL="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        buttonText="OK"
        />
        <Card
        albumTitle="Revolver"
        albumDescription="It's a pun on the way an LP revolves at 33-and-a-third revolutions a minute."
        imgURL="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        buttonText="OK"
        />
        <Card
        albumTitle="Rubber Soul"
        albumDescription="The songs demonstrate the Beatles' increasing maturity as lyricists, and in their incorporation of brighter guitar tones and new instrumentation such as sitar, harmonium, and fuzz bass."
        imgURL="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        buttonText="OK"
        />
      </div>
    );
  };

export default App;