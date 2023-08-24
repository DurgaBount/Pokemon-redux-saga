import { BASE_URL } from "../helpers/constants";

export async function fetchPokemonList() {
  return fetch(`${BASE_URL}/pokemon`)
    .then(response => response.json())
    .then(async data => {
      const pokemonWithDetails = await Promise.all(
        data.results.map(async pokemon => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );
      return pokemonWithDetails;
    })
    .catch(err => {
      console.error("Error fetching Pokemon list:", err);
      throw err; // You might want to propagate the error further up
    });
}

export async function fetchPokemonDetails(pokemonName) {
  return fetch(`${BASE_URL}/pokemon/${pokemonName}`).then(response => response.json()).then(data => data).catch(err => {
    console.error("Error fetching Pokemon Details:", err);
      throw err; // You might want to propagate the error further up
  })
}
