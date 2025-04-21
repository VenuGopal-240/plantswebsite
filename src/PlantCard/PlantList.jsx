// src/components/PlantList.js
import React, { useContext, useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import { MyContext } from '../App';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PlantList = () => {
  const { plants, setPlants, duplicatePlants, setDuplicatesPlants, setOriginals, originals } = useContext(MyContext);

  // useEffect(()=>{
  //   setDuplicatesPlants();
  // },[plants]);

  const addToCart = (data) => {
    setDuplicatesPlants([...duplicatePlants, data]);
    setDuplicatesPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, cartStatus: true }
          : obj
      )
    );
    setPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, cartStatus: true }
          : obj
      )
    );
    setOriginals((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, cartStatus: true }
          : obj
      )
    );
    // setDuplicatesPlants(cart); 
  }
  // console.log(cart);

  const increment = (data) => {
    setDuplicatesPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
          : obj
      )
    );
    setPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
          : obj
      )
    );
    setOriginals((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) + 1 }
          : obj
      )
    );
  }
  const decrement = (data) => {
    if(data.quantity<=1){
     alert("Cart Minimun Reached")
    }
    else{
    setDuplicatesPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
          : obj
      )
    );
    setPlants((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
          : obj
      )
    );
    setOriginals((list) =>
      list?.map((obj) =>
        obj?.id === data?.id
          ? { ...obj, quantity: parseInt(obj.quantity) - 1 }
          : obj
      )
    );
  }
  }
  const [open, setOpen] = useState(false);
  const [description,setDescription] = useState('');
  const handleDialog = (a) => {
    setOpen(true);
    setDescription(a);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>

      <div style={styles.gridContainer} >
        {plants?.map((fruit) => (
          <div key={fruit.id} style={styles.card}>
            <img src={fruit.image} alt={fruit.name} style={styles.image} onClick={() => handleDialog(fruit.description)} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            <h3>{fruit.name}</h3>
            <p>Price: ₹{fruit.price}</p>
            <p>Region: {fruit.region}</p>
            {fruit.cartStatus === false ? <Button variant="contained" color="success" onClick={() => addToCart(fruit)} >ADD TO CART</Button> :
              <div><button style={{ marginRight: "0.5rem" }} onClick={() => decrement(fruit)}>-</button>
                {fruit.quantity}
                <button color="success" style={{ marginLeft: "0.5rem", color: "green" }} onClick={() => increment(fruit)}>+</button></div>
            }
          </div>
        ))}
      </div>
      {
        duplicatePlants?.forEach((fruit) => fruit.total = fruit.price * fruit.quantity)
      }
      {
        plants?.forEach((fruit) => fruit.total = fruit.price * fruit.quantity)
      }
      {
        originals?.forEach((fruit) => fruit.total = fruit.price * fruit.quantity)
      }

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Description about Plant</DialogTitle>
        <DialogContent>
          {description}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      
    </>


  );
};

export default PlantList;

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
    gap: '20px',
    padding: '20px',
    
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '80px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '80px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
};