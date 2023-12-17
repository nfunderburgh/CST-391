import React from 'react';
import SearchForm from './SearchForm.js';
import AlbumList from './AlbumList.js';

const SearchAlbum = (props) => {
    console.log('props with update single album', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />
            <AlbumList albumList={props.albumList} onClick={props.updateSingleAlbum} />
        </div>
    );
};

export default SearchAlbum;