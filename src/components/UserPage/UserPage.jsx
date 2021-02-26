import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from "../../hooks/useReduxStore";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert';

function UserPage() {
  let [addPinToggle, setPinToggle] = useState(false);
  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  const store = useReduxStore();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_PIN', payload: store.addPin });
    setPinToggle(false);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PIN', payload: id })
    
  };

  const handleTeamChange = (e) => {
    dispatch({ type: 'SET_USER_TEAM', payload: e.target.value });
  };

  const handleLeagueChange = (e) => {
    dispatch({ type: 'SET_USER_LEAGUE', payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
  }, []);

  console.log('user, pins', user, pins);

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

      <div className="pinTable">
      <thead>
          <tr>
            <th>Description</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <table>
          <tbody>
            <tr>
              <td>Pins:</td>
              <td>{pins.id}</td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>{pins.team}</td>
              <td><img src={pins.image_url} alt={pins.team} /></td>
            </tr>
            <tr>
              <td>Year:</td>
              <td>{pins.year}</td>
            </tr>
            <tr>
              <td>League:</td>
              <td>{pins.league}</td>
            </tr>
            <tr>
              <td>Tradeable?</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pins">
        <ul>
          {pins.map(pin => {
            return (
              <li key={pin.id}>
                {pin.id} {pin.year} {pin.league} {pin.team} {pin.tradeable.toString()} {pin.user_id}
              &nbsp;
                <button onClick={() => handleDelete(pin.id)}>Delete</button></li>
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
