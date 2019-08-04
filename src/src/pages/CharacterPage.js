import React from 'react';
import characterContent from './character-content';
import CharacterList from '../components/CharacterList';

const CharacterPage = ( {match} ) => {
    const name = match.params.name;
    const character = characterContent.find(character => character.name === name);
    const otherCharacters = characterContent.filter(character => character.name !== name);

    if (!character) return <h1>Character was eaten by a grue!</h1>

    return (
        <>
            <h1>{character.name} </h1>
            <h3>Class: {character.class}</h3>
            {character.content.map((stat, key) => (
                <p key={key}>{stat}</p>
            ))}
            <CharacterList characters={otherCharacters} />
        </>
    );
}

export default CharacterPage;