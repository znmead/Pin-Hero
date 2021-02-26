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
    dispatch({ type: 'FETCH_PIN' });
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
      <table className="pinTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Team</th>
            <th>League</th>
            <th>Up for trade?</th>
            <th>Belongs to user </th>

          </tr>
        </thead>
        <tbody>
          {pins.map((pin, i) => {
            return (
              <tr key={i}>
                <td>{pin.id}</td>
                <td>{pin.year}</td>
                <td>{pin.team}</td>
                <td>{pin.league}</td>
                <td>{pin.tradeable.toString()}</td>
                <td>{user.first_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
