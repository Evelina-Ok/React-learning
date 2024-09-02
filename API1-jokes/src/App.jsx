import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";

function App() {
  //firstly url we need to use to build our app
  const url = `https://official-joke-api.appspot.com/jokes/random`;
  //useState declares a state variable.
  //values and setter using array destructuring
  //useState returns an array with exactly two values:
  //1. The current state. During the first render, it will match the initialState you have passed.
  //2. The set function that lets you update the state to a different value and trigger a re-render.
  const [randomJoke, setRandomJoke] = useState();
  async function getRandomJoke() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    setRandomJoke(data);
  }

  useEffect(() => {
    getRandomJoke();
  }, []);
  console.log(randomJoke?.punchline, "data");

  return (
    <>
    {randomJoke.random.map((item) => {
      return(
         {/* <h3>{punchline}</h3>
    <h3>{setup}</h3> */}
      // <button onClick={getRandomJoke}></button>
      )
    })}
     
    </>
  );
}

export default App;
