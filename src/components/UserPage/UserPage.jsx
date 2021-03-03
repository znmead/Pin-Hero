import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from "../../hooks/useReduxStore";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import './UserPage.css';
import swal from 'sweetalert';
import axios from 'axios';

import { Button, ButtonGroup } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Select,

} from "@chakra-ui/react"


function UserPage(props) {
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
  const [tradeable, setTradeable] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_PIN' });
  }, []);

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
    swal({
      title: "Hope you made a good trade! Sure you want to delete it?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((yesDelete) => {
        if (yesDelete) {
          swal("aight, Jarvinski", {
            icon: "success",
          });
          dispatch({ type: 'DELETE_PIN', payload: id })
        } else {
          return;
        }
      });
  };

  const handleTradeableUpdate = (id) => {
    swal({
      title: "This is a sweet pin, are you sure you want to give it up?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    })
      .then((yesTrade) => {
        if (yesTrade) {
          swal("You'll regret this, Jarvinski", {
            icon: "success",
          });
          dispatch({ type: 'UPDATE_PIN_TRADEABLE', payload: { tradeable: tradeable, id: id } });
        } else {
          return;
        }
      });
  };

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

  console.log('user, pins', user, pins);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2> <LogOutButton className="btn" />
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

      <div className="pinList">
        <ul>
          {pins.map((pin) => {
            return (
              <li key={pin.id}>
                {pin.id} {pin.year} {pin.league} {pin.team} {pin.tradeable.toString()} {pin.user_id}
              &nbsp;

                <Button
                  className="Button" size="sm" onClick={() => handleDelete(pin.id)}>Delete</Button> &nbsp;
                <Button
                  className="Button" size="sm" onClick={() => handleTradeableUpdate(pin.id)}>Toggle Trade Status</Button>
              </li>
            )
          })}
        </ul>

        {addPinToggle ? (
          <>
            <form className="formPanel" onSubmit={handleSubmit}>
              <FormControl id="year"
                type="number"
                value={year}
                defaultValue={1982}
                onChange={(event) => setYear(event.target.value)}
                isRequired>
                <FormLabel>Year</FormLabel>
                <NumberInput max={2021} min={1982}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <span></span>
              <FormControl id="team"
                value={team}
                onChange={(event) => setTeam(event.target.value)}
                isRequired
              >
                <FormLabel>Team</FormLabel>
                <Input type="text" />
                <FormHelperText>Knights or Avs?</FormHelperText>
              </FormControl>
              <span></span>
              <FormControl id="league"
                type="text"
                value={league}
                onChange={(event) => setLeague(event.target.value)}
                isRequired
              >
                <FormLabel>League</FormLabel>
                <Select placeholder="Select League">
                  <option>Termites</option>
                  <option>Mites</option>
                  <option>Squirt</option>
                  <option>PeeWee</option>
                  <option>Bantam</option>
                  <option>NHL</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              <span></span>
              <FormControl id="url"
                type="url"
                value={image_url}
                onChange={(event) => setImage_Url(event.target.value)}
                isRequired
              >
                <FormLabel>Image Link</FormLabel>
                <Input type="url" />
                <FormHelperText>Upload a picture?</FormHelperText>
              </FormControl>
              <span></span>
              <FormControl as="fieldset"
                type="text"
                value={tradeable}
                onChange={(event) => setTradeable(event.target.value)}
              >
                <FormLabel as="legend">Up for trade?</FormLabel>
                <RadioGroup defaultValue="FALSE">
                  <HStack spacing="24px">
                    <Radio value="TRUE">Aight</Radio>
                    <Radio value="FALSE">Nah</Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>Choose wisely, Jarvinski</FormHelperText>
              </FormControl>
              <Button className="Button" type="submit">Save Pin </Button>
              <Button className="Button" type="cancel"
              onClick={() =>  setPinToggle(false)}>Cancel</Button>
            </form>
          </>
        ) : (
            <button
              className="btn" onClick={() =>  setPinToggle(true)}>Add Pin</button>
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

{/* <label htmlFor="input-user.id">User ID</label>
                <input
                  type="number"
                  id="input-user.id"
                  value={store.user.id}
                  onChange={handleUserIdChange}
                  required
                /> */}

              //   <label>Pin Year (YYYY):
              // <input
              //     type="number"
              //     value={year}
              //     onChange={(event) => setYear(event.target.value)}
              //     required
              //   />
              // </label>
              // <label>Team:
              // <input
              //     type="text"
              //     value={team}
              //     onChange={(event) => setTeam(event.target.value)}
              //     required
              //   />
              // </label>
              // <label>League:
              // <input
              //     type="text"
              //     value={league}
              //     onChange={(event) => setLeague(event.target.value)}
              //     required
              //   />
              // </label>

              // <label>Image Link:
              // <input
              //     type="text"
              //     value={image_url}
              //     onChange={(event) => setImage_Url(event.target.value)}
              //     required
              //   />
              // </label>

              // <label>Up for trade?
              // <input
              //     type="text"
              //     value={tradeable}
              //     onChange={(event) => setTradeable(event.target.value)}
              //     required
              //   />
              // </label>
              // <span></span>
