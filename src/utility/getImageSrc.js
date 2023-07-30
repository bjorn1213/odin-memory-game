async function getPokemonImageSrc(pokemonId) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(`${baseUrl}${pokemonId}`);
  const data = await response.json();

  return data.sprites.front_default;
}

export default getPokemonImageSrc;
