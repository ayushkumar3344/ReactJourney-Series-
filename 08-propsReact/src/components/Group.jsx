import React from 'react'

const Group = ({colleges}) => {
  return (
    <div>
        <hr />
      <h1> My first college Name is {colleges[0]} </h1>
      <h1> My 2nd college Name is {colleges[1]} </h1>
      <h1> My 3rd college Name is {colleges[2]} </h1>
      <h1> My 4th college Name is {colleges[3]} </h1>
    </div>
  )
}

export default Group