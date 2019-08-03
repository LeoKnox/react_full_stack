import React from 'react';
import characterContent from './character-content'
import { Link } from 'react-router-dom'

const CharactersList = () => {
    return (
        <>
            <h1>Characters</h1>
            {characterContent.map((char, key) => (
                <Link to={`/character/${char.name}`} key={key}>
                    {char.name} : {char.class}
                </Link>
            ))}
        </>
    );
};

export default CharactersList;