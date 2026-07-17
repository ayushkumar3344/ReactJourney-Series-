import React from "react";
import Students from "./Students";

const College = ({college}) => {
  return (
    <div>
      <h1 className="text-3xl text-green-500 font-extrabold">College Nama : {college.name}</h1>
      <ul>
        <li>
          <h3>City : {college.city}</h3>
        </li>
        <li>
          <h3>Website : {college.website}</h3>
        </li>
        <li>
            <Students student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default College;
