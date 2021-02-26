import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
      <p>Change your password: {user.password}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Team: {user.team}</p>
      <p>League: {user.league}</p> 
      <p>Jersey Number: {user.player_number}</p>
      <p>Your pins are: </p>

      <table>
                <tbody>
                    <tr>
                        <td>Pins</td>
                        <td>{pins.id}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>{pins.team}</td>
                        <td><img src={pins.image_url} alt={pins.team} /></td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{pins.year}</td>
                        <td>League</td>
                        <td>{pins.league}</td>
                    </tr>
                    <tr>
                        <td>Tradeable?</td>
                        <td>{pins.tradeable.toString()}</td>
                    </tr>
                </tbody>
            </table>
      <div className="pins">
        <ul>
          {pins.map(pin => {
            return (
              <li key={pin.id}> 
              {pin.id} {pin.year} {pin.league} {pin.team} {pin.tradeable.toString()} {pin.user_id}
              &nbsp;
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
