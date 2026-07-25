// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [usersData, setUsersData] = useState([]);

//   useEffect(() => {
//     getUsersData();
//   }, [])

//   async function getUsersData() {
//     const url = "https://dummyjson.com/users";
//     let response = await fetch(url);
//     response = await response.json();
//     setUsersData(response.users)
//   }

//   console.log(usersData);
  

//   return (
//     <div>
//       <h1>Fetch Data Frpm API</h1>

//       {
//         usersData.map((user) => (
//           <>
//             <h1>{user.firstName}  {user.lastName}</h1>
//             <span>My Age is : {user.age}</span>
//             <br />
//             <span>My Gender is : {user.gender}</span>
//             <br />
//             <span>My D.O.B is : {user.birthDate}</span>
//             <br />
//             <span>I Am from : {user.address.city}</span>
//           </>
//         ))
//       }

//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {

  const [bikeInformation, setBikeInformation] = useState([]);

  useEffect(() => {
    bikeData();
  }, [])

  async function bikeData(){
    const bikeApi = "https://bikeindex.org/api/v3/search";
    let response = await fetch(bikeApi);
    response = await response.json();
    setBikeInformation(response.bikes);
  }

  console.log(bikeInformation);

  return (
    <div>
      <h1>Fetching All Bike Data Information.</h1>
      {
        bikeInformation.map((bike) => (
          <div>
            <h1>ID no. of Bike is {bike.id}</h1>
            <span>Bike Name : {bike.manufacturer_name}</span>
            <br />
            <span>Bike Imgae : <img src={bike.large_img} alt="Bike Image" width={"100px"} /></span>
            <br /><br />
            <span>Color of Bike is : {bike.frame_colors}</span>
            <br />
            <span>Bike Tile : {bike.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default App





