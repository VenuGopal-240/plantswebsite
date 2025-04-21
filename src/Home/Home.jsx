// src/pages/Home.js
import React, { useContext, useEffect } from 'react';
import PlantList from '../PlantCard/PlantList';
import { MyContext } from '../App';

const Home = () => {

  const {originals,setPlants} = useContext(MyContext);
  useEffect(()=>{
    console.log(originals);
    setPlants(originals);  
  })
  return (
    <div className="container my-4" style={{marginTop:"5rem"}}>
      <h1 style={{textAlign:"center"}}> Welcome to Vigneswara Nursery Plants</h1>
      <img src="https://img.freepik.com/free-vector/group-young-children-cartoon-character-white_1308-51039.jpg?t=st=1741672376~exp=1741675976~hmac=e85611fd7a0775856689d01f781b322967478955015ba01bdfda5df7c4ec2752&w=1800" alt="logo" width='100%' height='600vh'/>
    </div>
  );
};

export default Home;
