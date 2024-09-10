import { useState, useEffect } from "react";
import { CardAvatar } from "../Card/CardAvatar";

export function FetchMasterclass() {
const url = `https://jsonplaceholder.typicode.com/users`;

  const [userData, setUserData] = useState(null);

  function getAllUsers() {
    // fetch(url).then((res) => {res.json()}) or
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log("data", data))
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }

  // useEffect syntax:
  // useEffect fetches all the data when website loads
  // useEffect(() => {})
    useEffect(() => {
      getAllUsers();
    }, [])
    console.log(userData);
    
  
  return (
    <>
      <h1>Fetch example</h1>
      <button onClick={() => getAllUsers()}>Fetch users</button>
      {/* --// {userData.map(() => {})}//-- */}
      {userData?.map((user) => {
        return (
          <CardAvatar
          // give unique id for each user: key={user.id}
            key={user.id}
            name={user.name}
            website={user.website}
            username={user.useername}
          />
        );
      })}
    </>
  );
}
