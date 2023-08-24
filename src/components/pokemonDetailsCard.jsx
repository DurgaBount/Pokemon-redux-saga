import { IMAGE_URL } from "../helpers/constants";

const PokemonDetailsCard = ({ pokeman }) => {
  return (
    <div className="row-container">
      <div>
        <img
          src={`${IMAGE_URL}${String(pokeman.details.id).padStart(3, "0")}.png`}
          alt={pokeman.name}
        />
      </div>
      <div>
        <h1>{pokeman.name}</h1>
        <h1>{pokeman.details.height}</h1>
        <h1>ID: {pokeman.details.id}</h1>
        <h1>Height: {pokeman.details.height}</h1>
        <h1>Weight: {pokeman.details.weight}</h1>
        <h1>Abilities:</h1>
        <ul>
          {pokeman.details.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
