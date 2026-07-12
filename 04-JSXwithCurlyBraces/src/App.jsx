import React from 'react'

const App = () => {

  const name = "Ayush kumar";
  let a = 45;
  let b = 99;

  const path = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRu-BjT_TFqioXpxyw7OI-hdTFGFqI0qbv8erPPuOxxnAGLS5Cu"

  function fruit(){
    return "Khaoge kya apple ayush bhaiya"
  }

  function sum(a,b){
    return a * b;
  }

  const userObj = {
    name : "Anil",
    gmailID : "kumarayush8117@gmail.com",
    age : 45
  }

  const userArray = ['Ayush','Vinod','Rakhi','Bablu','Bittu']

  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{ name ? name : "User Not Found "}</h1>
      <h1>{ a * b }</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(845,674)}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userArray[4]}</h1>
      <img src={path} alt="Man Image" />
      <input type="text" value={name} />
    </div>
  )
}

export default App
