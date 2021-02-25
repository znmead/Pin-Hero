import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';



function UserPage() {
  let [addPinToggle, setPinToggle] = useState(false);
  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_PIN', payload: store.addPin });
    setPinToggle(false);
  };
  
  const deletePin = (id) => {
    dispatch({ type: 'DELETE_PIN', payload: id })
  };

  
  
  
  
  

  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
  }, []);

  console.log('user, pins',user, pins);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Your pins are: </p>
      <div className="pins">
        <ul>
          {pins.map(pin => {
            return (
              <li key={pin.id}> 
              {pin.id} {pin.team} 
              
              <button type="delete" 
              value={pin.id} 
              onClick={() => deletePin()}>Delete</button></li>
              )
          })}
        </ul>
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
