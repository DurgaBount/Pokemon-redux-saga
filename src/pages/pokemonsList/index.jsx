import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../../redux/reducers/PokemanActions";
import PokemonCard from "../../components/pokemonCard";
import "./styles.css";

const PokemonsList = () => {
  const dispatch = useDispatch();
  const pokemansDetails = useSelector((state) => state.pokeman.pokemansDetails);

  useEffect(() => {
    if (!pokemansDetails?.length) {
      dispatch(fetchPokemonData());
    }
  }, [pokemansDetails]);

  return (
    <div className="container">
      <h1>Pokemon List</h1>
      <div className="pokemon-cards-row">
        {pokemansDetails?.map((pokeman) => (
          <PokemonCard pokeman={pokeman} key={pokeman.name}></PokemonCard>
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
