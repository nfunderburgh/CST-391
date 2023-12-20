import React from 'react';

const Card = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.albumId);
        props.onClick(props.albumId, uri);
    }

    console.log('Image URL:', props.imageURL);
    return (
        <div className='card' style={{width: '18rem'}}>
            <img src={props.imageURL} alt="title" />
            <div className='card-body'>
                <h5 className="card-title">{props.albumTitle}</h5>
                <p className="card-text"> {props.albumDescription}</p>
                <button className="btn btn-primary" onClick={() => handleButtonClick(props.albumId, '/show/')}>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default Card;
