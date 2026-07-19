import React from 'react'
import User from './components/User';

const App = () => {

  const displayName = (name) => {
    alert(name)
  }

  const handleGold = () => {
    alert("Gold Function Called Successfully");
  }

  return (
    <div className="m-10">

      <h1 className="text-3xl font-extrabold underline my-10">
        Pass Function in components as Props :
      </h1>

      <User displayName={displayName} name={"Sourabh Raguvanshi"} handleGold={handleGold} />
      <User displayName={displayName} name={"Rohit Thakur"} handleGold={handleGold} />
      <User displayName={displayName} name={"David Warner"} handleGold={handleGold} />
      <User displayName={displayName} name={"Vishal Mishra"} handleGold={handleGold} />
      <User displayName={displayName} name={"Amit Shah"} handleGold={handleGold} />

    </div>
  );
}

export default App
