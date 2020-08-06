import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
    const { name, email, id } = props;
    return (
        <div className='bg-light-blue tc dib br3 ma3 pa2 grow bw-2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robotpic'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
