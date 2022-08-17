import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const city = "Austin";
  const [weather, setWeather] = useState([]);
  const [shows, setShows] = useState([]);
  // const JokeAPI = require('sv443-joke-api');

  const SHOWS_URL = "http://api.tvmaze.com";

  // useEffect(() => {
  //   fetch(SHOWS_URL + '/shows')
  //   .then((r) => r.json())
  //   .then((shows) => setShows(shows))
  //   // console.log(shows)


// for (var i = 1; i < 101; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz")
//   else if (i % 3 == 0) console.log("Fizz")
//   else console.log(i)
// }

// function multiply(num, num2) {
//   console.log (num * num2)

// }
// multiply(2,3)

var arr = [1, 2, 3, 4, 5];
arr.unshift(-1, 0); // 7
// console.log(arr); //(7)

arr.shift((-1))
// console.log(arr)

var str = "I love Charlie and Bailey.";
var strSplit = str.split(' ',3);
// console.log(strSplit);
// console.log(strSplit);



var str = "abcdefg";
var sliceParam = str.slice(2)
console.log(sliceParam)

  async function getShows() {
    console.log("getShows called");
    const ul = document.getElementById("show-list");
    await fetchShows().then((data) => {
      data.forEach((show) => {
        ul.innerHTML += `
      <li>${show.name}</li>
      `;
        console.log(data);
      });
    });
  }
  function alphabetPosition(text) {
    var chari,
        arr = [],
        alphabet = "abcdefghijklmnopqrstuvwxyz",
        i;

    for (var i = 0; i < text.length; i++){
        chari = text[i].toLowerCase();
        if (alphabet.indexOf(chari) !== -1){
            arr.push(alphabet.indexOf(chari));
        }
    }
    return arr;
    //new 
}
console.log(alphabetPosition("Hello World!!1"));

  async function fetchShows() {
    let res = await fetch(SHOWS_URL + "/shows");
    let data = await res.json();
    console.log("data", data);
    return data;
  }

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
  // console.log(weather)

  return (
    <div className="App">
      <h3>Current Weather: {weather.FeelsLikeF}</h3>
      <button onClick={handleClick}>Next Pokemon</button>
      {/* {pokemons.map((pokemon) => {
        return <h1>Pokemon: {pokemon.name}, {pokemon.url}</h1>
      
      })} */}

      <h1>{pokemon.name}</h1>
      {pokemon ? <img src={pokemon.sprites.front_default} /> : "No pokemon yet"}
      <h3>
        {shows.map((show) => {
          return <div>{show.name}</div>;
        })}
      </h3>
    </div>
  );
}

export default App;
