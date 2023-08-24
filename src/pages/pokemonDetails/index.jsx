import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";
import PokemonDetailsCard from "../../components/pokemonDetailsCard";
const PokemonDetails = () => {
  const pokemansDetails = useSelector((state) => state.pokeman.pokemansDetails);
  const { pokemonID } = useParams();

  const pokemon = pokemansDetails?.find(
    (pokemon) => pokemon?.details.id == pokemonID
  );

  return (
    <div className="details-container">
      {pokemon && <PokemonDetailsCard pokeman={pokemon}></PokemonDetailsCard>}
    </div>
  );
};

export default PokemonDetails;
