const simpsonsApi = async () => {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=50'
    const response = await fetch(url);
    const data = await response.json();

    const characters = data.map((character) => ({
        characterQuote: character.quote,
        characterName: character.character,
        characterImage: character.image
    }));
    return characters;
}

export default simpsonsApi;