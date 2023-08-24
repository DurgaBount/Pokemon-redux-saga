import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetails from "./pages/pokemonDetails";
import PokemonsList from "./pages/pokemonsList";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PokemonsList />} />
      <Route path="/pokemon/:pokemonID" element={<PokemonDetails />} />
    </Routes>
  );
}

export default App;
