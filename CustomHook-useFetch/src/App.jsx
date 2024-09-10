import { useState, useEffect } from "react";
import "./App.scss";
import { CardAvatar } from "./Components/Card/CardAvatar";
import { ShowUsers } from "./Components/Users/Users";
// import { FetchMasterclass } from "./Components/Fetch/FetchMasterClass";
import { useFetch } from './Components/Fetch/UseFetch'

function App() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const {userData, error} = useFetch(url)
  // the previous 2 lines or compacted into this one:
  // const {userData, error} = useFetch(`https://jsonplaceholder.typicode.com/users`)
  console.log(userData);
  

  
  return (
    <>
    {/* <FetchMasterclass /> */}
    </>
  );
}

export default App;
