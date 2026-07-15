import React from "react";

const App = () => {

  const studentNames = ["Ayush Kumar","Suresh Yadav","Bhubnesvar Yadav","Keshari Lal Yaadav","Krishna Gopal"];

  return (
    <div>
      
      <h1 className="text-3xl font-extrabold m-10">Loop in Jsx With Map Filter : </h1>
      <ul>
        {
          studentNames.map((name) => {
            return <li>{name}</li>
          })
        }
      </ul>

    </div>
  );
};

export default App;
