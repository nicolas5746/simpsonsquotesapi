import { useState, useEffect } from 'react';
import simpsonsApi from 'data/getCharacters';
import Card from 'components/Cards/Card';
import './App.sass';

const App = () => {
    let searchQuotes = 'Search quotes';
    let placeholder = 'Enter character name';

    const [filter, setFilter] = useState('');
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const characters = await simpsonsApi();
        setCharacters(characters);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="app">
            <h1>{searchQuotes}</h1>
            <input
                id="filter"
                name="filter"
                type="text"
                placeholder={placeholder}
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
            <div className="cards">
                {characters
                    .filter((char) => char.characterName.toLowerCase().match(filter.toLowerCase()))
                    .map((character, i) => (
                        <Card
                            key={i}
                            name={character.characterName}
                            image={character.characterImage}
                            quote={character.characterQuote}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;