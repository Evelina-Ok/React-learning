import { useState } from 'react'
import './App.scss'

// import { useFetch } from './Components/Fetch/UseFetch'

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

function getAllUsers() {
  // fetch(url).then((res) => {res.json()}) or
  fetch(url).then(res => res.json()).then(data => console.log("data", data)).catch(error => console.error(error))
}

  return (
    <>
      <div>
      
      </div>
    </>
  )
}

export default App
