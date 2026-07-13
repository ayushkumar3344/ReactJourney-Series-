import React from 'react'

const User = ({name}) => {

  return (
    <div>

      <hr />

      <h1> My Name is : {name.name} </h1>
      <h1> My Schooll Roll No is : {name.rollNo} </h1>
      <h1> My GmailID is : {name.emailID} </h1>
      <h1> My Am from District {name.distict} </h1>
      
    </div>
  )

}

export default User
