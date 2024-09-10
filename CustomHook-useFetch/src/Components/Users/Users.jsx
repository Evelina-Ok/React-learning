import React from "react";

export function ShowUsers() {

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
    )
}