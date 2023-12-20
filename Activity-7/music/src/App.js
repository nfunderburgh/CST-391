import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchAlbum from "./SearchAlbum.js";
import NavBar from "./NavBar.js";
//import NewAlbum from "./EditAlbum";
import OneAlbum from "./OneAlbum.js";
import './App.css';
import dataSource from "./dataSource.js";
import NewAlbum from "./NewAlbum.js";
//import Card from "./Card";
//import EditAlbum from "./EditAlbum.js";
// import Card from './Card';
// import SearchForm from "./SearchForm";
//import albums from './albums.json';





const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [albumList, setAlbumList] = useState([]);
    const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);

    let refresh = false;

    const loadAlbums = async () => {
        const response = await dataSource.get('/albums');
        setAlbumList(response.data);
    }

    useEffect(() => {
        loadAlbums();
    }, [refresh]);

    const updateSearchResults = (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
    };

    const updateSingleAlbum = (id, navigate) => {
        console.log('Update Single album = ', id);
        console.log('Update Single album = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < albumList.length; ++i) {
            if (albumList[i].id === id) indexNumber = i;
        }
        setCurrentlySelectedAlbumId(indexNumber);
        console.log('update path', '/show/' + indexNumber);
        navigate('/show/' + indexNumber);
    };

    console.log('albumList', albumList);
    const renderedList = albumList.filter((album) => {
        if (
            album.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === ''
        ) {
            return true;
        }
        return false;
    });
    console.log('renderedList', renderedList)

    const onNewAlbum = (navigate) => {
        loadAlbums();
        navigate("/");
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchAlbum
                            updateSearchResults={updateSearchResults}
                            albumList={renderedList}
                            updateSingleAlbum={updateSingleAlbum}
                        />
                    }
                />
                <Route exact path='/new' element={<NewAlbum onNewAlbum={onNewAlbum} />} />
                <Route
                    exact
                    path='/show/:albumId'
                    element={<OneAlbum album={albumList[currentlySelectedAlbumId]} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;