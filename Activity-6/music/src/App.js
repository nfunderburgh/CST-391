import React, { useState, useEffect } from "react";
import Card from './Card.js';
import './App.css';
import albums from './albums.json';
import SearchForm from './SearchForm.js';

const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);

    const updateSearchResults = (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
    }

    useEffect(() => {
        setAlbumList(albums);
    }, [albumList]);

    const renderedList = () => {
        return albumList.map((album) => {
            if(
                album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                searchPhrase === ''
            )
                return (
                    <Card 
                        key={album.id}
                        albumTitle={album.title} 
                        albumDescription={album.description} 
                        buttonText='OK' imageURL={album.image} 
                    />
                );
            else console.log('Does not match ' + searchPhrase);
        });
    };
    return(
        <div>
            <div className="container">
                <SearchForm onSubmit={updateSearchResults}/>
            </div>
            <div className="container">{renderedList()}</div>
        </div>
    );
};

export default App;