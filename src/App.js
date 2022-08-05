import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const city = "Austin";
  const [weather, setWeather] = useState([]);
  // const JokeAPI = require('sv443-joke-api');

  useEffect(
    (name) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`, {})
        .then((r) => r.json())
        .then((pokemon) => setPokemon(pokemon));
    },
    [currentPokemonId]
  );

  useEffect(() => {
    fetch(`http://wttr.in/${city}?format=j1`, {})
      .then((r) => r.json())
      .then((weather) => setWeather(weather.current_condition[0]));
    // console.log(weather.current_condition)
  }, []);

  // useEffect((name) => {
  //   fetch("https://pokeapi.co/api/v2/pokemon", {})
  //     .then((r) => r.json())
  //     .then((pokemons) => {
  //       setPokemons(pokemons.results);
  //     });
  // }, []);

  function handleClick() {
    setCurrentPokemonId(currentPokemonId + 1);
  }
  console.log(weather)
  return (
    <div className="App">
      <h3>Current Weather: {weather.FeelsLikeF}</h3>
      <button onClick={handleClick}>Next Pokemon</button>
      {/* {pokemons.map((pokemon) => {
        return <h1>Pokemon: {pokemon.name}, {pokemon.url}</h1>
      
      })} */}
      <h1>{pokemon.name}</h1>
      {pokemon ? <img src={pokemon.sprites.front_default} /> : "No pokemon yet"}
     
    </div>
  );
}

export default App;
