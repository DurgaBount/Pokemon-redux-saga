import { Link } from "react-router-dom";
import { IMAGE_URL } from "../helpers/constants";

const PokemonCard = ({ pokeman }) => {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokeman?.details?.id}`}>
        <div>
          <img
            src={`${IMAGE_URL}${String(pokeman?.details?.id).padStart(
              3,
              "0"
            )}.png`}
            alt={pokeman.name}
          />
          <p>{pokeman.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
