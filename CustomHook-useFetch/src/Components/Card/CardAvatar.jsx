import React from 'react'

// components to show the users
// props to take name, last username and wedsite
// div where we show this data
export const CardAvatar = (props) => {
  return (
    <div>
        <h4>{props.name}</h4>
        <h6>AKA: {props.username}</h6>
        <br />
        <br />
        <p>Find me at:</p>
        <p>{props.website}</p>
    </div>
  )
}
