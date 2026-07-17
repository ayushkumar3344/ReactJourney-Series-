import React from "react";

const Students = ({student}) => {
  return (
    <div>
      <h3 className="text-2xl text-red-500 font-extrabold">Students :</h3>
      {student.map((student) => (
        <ul>
          <li>Student Name : {student.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Students;
