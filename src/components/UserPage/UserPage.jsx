import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from "../../hooks/useReduxStore";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './UserPage.css';
import swal from 'sweetalert';
import axios from 'axios';


function UserPage() {
  let [addPinToggle, setPinToggle] = useState(false);
  let [updatePinToggle, setUpdatePinToggle] = useState(false);

  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  const store = useReduxStore();

  const dispatch = useDispatch();
  const history = useHistory();

  const [year, setYear] = useState('');
  const [team, setTeam] = useState('');
  const [league, setLeague] = useState('');
  const [image_url, setImage_Url] = useState('');
  const [tradeable, setTradeable] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding Pin`, { year, team, league, image_url, tradeable });
    dispatch({
      type: 'ADD_PIN',
      payload: {
        year: year,
        team: team,
        league: league,
        image_url: image_url,
        tradeable: tradeable

      }
    });
    setPinToggle(false);

    history.push('/')
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PIN', payload: id })
    dispatch({ type: 'FETCH_PIN' });
  };

  const handleTradeableUpdate = (id) => {
    dispatch({ type: 'UPDATE_PIN_TRADEABLE', payload: { tradeable: !tradeable, id: id } })
    // dispatch({ type: 'FETCH_PIN' });
  }


  const handleTeamChange = (e) => {
      dispatch({ type: 'SET_PIN_TEAM', payload: e.target.value });
    };

    const handleLeagueChange = (e) => {
      dispatch({ type: 'SET_PIN_LEAGUE', payload: e.target.value });
    };

    const handleYearChange = (e) => {
      dispatch({ type: 'SET_PIN_YEAR', payload: e.target.value });
    };

    const handleUrlChange = (e) => {
      dispatch({ type: 'SET_PIN_URL', payload: e.target.value });
    };

    const handleTradeableChange = (event) => {
      dispatch({ type: 'SET_PIN_TRADEABLE', payload: { tradeable: !tradeable } });
    };

    const handleUserIdChange = (e) => {
      dispatch({ type: 'SET_PIN_USER_ID', payload: user.id });
    };


  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
    
  }, []);

  console.log('user, pins', user, pins);
  // <button onClick={() => handleTradeableUpdate(pin.tradeable)}>Update trade status</button>
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2> <LogOutButton className="btn" />
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
            <th>Image Link</th>
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
                <td>{pin.image_url}</td>
                <td>{pin.tradeable.toString()}</td>
                <td>{user.first_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pins">
        <ul>
          {pins.map((pin) => {
            return (
              <li key={pin.id}>
                {pin.id} {pin.year} {pin.league} {pin.team} {pin.tradeable.toString()} {pin.user_id}
              &nbsp;
                
                <button onClick={() => handleDelete(pin.id)}>Delete</button> &nbsp;
                <button onClick={() => handleTradeableUpdate(pin.id)}>Toggle Trade Status</button>
              </li>
            )
          })}
        </ul>

        {addPinToggle ? (
          <>
            <form onSubmit={handleSubmit}>
              <label>Pin Year (YYYY):
              <input
                    type="number"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    required
                  />
                </label>
                <span></span>
                <label>Team:
              <input
                    type="text"
                    value={team}
                    onChange={(event) => setTeam(event.target.value)}
                    required
                  />
                </label>
                <span></span>
                <label>League:
              <input
                    type="text"
                    value={league}
                    onChange={(event) => setLeague(event.target.value)}
                    required
                  />
                </label>
                <span></span>
                <label>Image Link:
              <input
                    type="text"
                    value={image_url}
                    onChange={(event) => setImage_Url(event.target.value)}
                    required
                  />
                </label>
                <span></span>
                <label>Up for trade?
              <input
                    type="text"
                    value={tradeable}
                    onChange={(event) => setTradeable(event.target.value)}
                    required
                  />
                </label>
                <span></span>
                <label htmlFor="input-user.id">User ID</label>
                <input
                  type="number"
                  id="input-user.id"
                  value={store.user.id}
                  onChange={handleUserIdChange}
                  required
                />

                <button type="submit">Save Pin </button>
              </form>
            </>
          ) : (
              <button onClick={() => setPinToggle(true)}>Add Pin</button>
            )}
        </div>

      </div >
    );
  }

  // this allows us to use <App /> in index.js
  export default UserPage;

// {updatePinToggle ? (
//   <>
//   <form onSubmit={handleTradeableUpdate}>
//     <label htmlFor="input-tradeable">Tradeable Status? </label>
//     <input
//     type="text"
//     id="input-tradeable"
//     value={store.updatePinReducer.pinTradeable}
//     onChange={handleSubmit}
//     required
//     />
//     <button onClick={() => handleTradeableUpdate(pin.tradeable)}>Update trade status</button>
//     </form>
//   </>
// ) : (
//     <button onClick={() => setPinToggle(true)}>Update Trade Status</button>
//   )}


// {updatePinToggle ? (
//   <>
//     <form key={pin.id} onSubmit={handleTradeableUpdate}>
//       <label>Tradeable Status? </label>
//       <input
//         key={pin.id}
//         type="text"
//         value={tradeable}
//         onChange={(event) => setTradeable(event.target.value)}
//         required
//       />
//       <button type="submit">Save Pin </button>
//     </form>
//   </>
// ) : (
//     <button onClick={() => setUpdatePinToggle(true)}>Update Trade Status</button>
//   )}
