import React from 'react';
import characterContent from './character-content';

const CharacterPage = ( {match} ) => {
    const name = match.params.name;
    const character = characterContent.find(character => character.name === name);

    if (!character) return <h1>Character was eaten by a grue!</h1>
    
    return (
        <>
            <h1>{character.name} </h1>
            <h2>Class: {character.class}</h2>
            {character.content.map((stat, key) => (
                <p key={key}>{stat}</p>
            ))}
        </>
    );
}

export default CharacterPage;