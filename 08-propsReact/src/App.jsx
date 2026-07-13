import React, { useState } from 'react'
import User from './components/User'
import Group from './components/Group'
import Student from './components/Student'

const App = () => {

  // let name = "Subash Keshav";
  // let age = 45;
  // let emailID = "kumarayush8117@gmail.com"

  const dataRecorde = {
    name : "Shivam Dube",
    rollNo : 56,
    emailID : "kumarayush8117@gmail.com",
    distict : "Kangra"
  }

  const dataRecorde2 = {
    name : "Goutam Ganguli",
    rollNo : 22,
    emailID : "goutam778@gmail.com",
    distict : "Palampur"
  }

  const dataRecorde3 = {
    name : "Shiwali",
    rollNo : 30,
    emailID : "shiwali@gmail.com",
    distict : "Shimla"
  }

  let collegeName = ["IIT","NIT","MIT","CU","DU","MIT"];

  const [student, setStudent] = useState("Ayush Bhai")

  return (
    <div>
      <h1>Props in React</h1>
      {/* <User name={name} age={age} email={emailID} /> */}

      <Student name={student} />
      <button onClick={() => {setStudent("Rishav Pant")}}>Click</button>

      <Group colleges={collegeName} />

      <User name={dataRecorde} />
      <User name={dataRecorde2} />
      <User name={dataRecorde3} />


    </div>
  )
}

export default App
