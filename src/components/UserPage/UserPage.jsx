import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function UserPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  console.log('user, pins', user.state, pins.state);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p>Your pins are: </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
