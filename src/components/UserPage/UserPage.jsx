import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from "../../hooks/useReduxStore";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import './UserPage.css';
import Swal from 'sweetalert2'
import axios from 'axios';

import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  MdCheckCircle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  useToast

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

  const setPinDetails = (pin) => {
    console.log(`You want to see details for ${pin.team}`);
    dispatch({
      type: 'SET_PIN_DETAILS',
      payload: pin,
    });
    history.push('/details');
  }

  const handleSubmit = (event) => {
    <Progress size="xs" isIndeterminate />
    Swal.fire({
      text: 'Pin Added! Nice work, Jarvinski!',
      toast: true,
      position: 'top-right',
      icon: 'success',
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
      background: '#61dafb',

    }).then
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
    Swal.fire({
      title: "Hope you made a good trade! Sure you want to delete it?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      background: '#37474f',
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "aight, Jarvinski... deleted",
            icon: 'success',
            background: '#37474f',
          });
          dispatch({ type: 'DELETE_PIN', payload: id })
        } else if (result.isDenied) {
          Swal.fire({
            title: 'Good choice, Jarvinski',
            icon: 'info',
            background: '#37474f',
          });
          return;
        }
      });
  };

  const handleTradeableUpdate = (id) => {
    Swal.fire({
      title: "This is a sweet pin, are you sure you want to give it up?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
      background: '#37474f',
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "You'll regret this, Jarvinski",
            icon: "success",
            background: '#37474f',
          });
          dispatch({ type: 'UPDATE_PIN_TRADEABLE', payload: { tradeable: tradeable, id: id } });
        } else if (result.isDenied) {
          Swal.fire({
            title: 'Good choice, Jarvinski',
            icon: 'info',
            background: '#37474f',
          });
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
      <Text
       fontSize="4xl"
       bgGradient="linear(to-l, #7928CA,#FF0080)"
       bgClip="text">Welcome, {user.username}!</Text>
      
      
      <p>Last Name: {user.last_name}</p>
      <p>Team: {user.team}</p>
      <p>League: {user.league}</p>
      <p>Jersey Number: {user.player_number}</p>
      &nbsp;&nbsp;&nbsp;&nbsp;
      
      <Heading as="h2" size="xl">
        Click on an ID to view details
      </Heading>
      <br></br>
      {addPinToggle ? (
          <>
            <form className="formPanel" onSubmit={handleSubmit}>
              <FormControl id="year"
                type="text"
                value={year}
                defaultValue={1982}
                onChange={(event) => setYear(event.target.value)}
                isRequired>
                <FormLabel>Year</FormLabel>
                <Input type="text" />
                {/* <FormHelperText>1982?</FormHelperText> */}
              </FormControl>
              <span></span>
              &nbsp;
              <FormControl id="team"
                placeholder="Team"
                value={team}
                onChange={(event) => setTeam(event.target.value)}
                isRequired
              >
                <FormLabel>Team</FormLabel>
                <Input type="text" />
                <FormHelperText>Anyone but the Spuds</FormHelperText>
              </FormControl>
              <span></span>
              &nbsp;
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
                {/* <FormHelperText>PeeWee much?</FormHelperText> */}
              </FormControl>
              <span></span>
              &nbsp;
              <FormControl id="image"
                type="text"
                value={image_url}
                onChange={(event) => setImage_Url(event.target.value)}

              >
                <FormLabel>Image Link</FormLabel>
                <Input type="text" />
                <FormHelperText>Upload a picture?</FormHelperText>
              </FormControl>
              <span></span>
              &nbsp;
              <FormControl as="fieldset"
                type="text"
                value={tradeable}
                onChange={(event) => setTradeable(event.target.value)}
              >
                <FormLabel as="legend">Up for trade?</FormLabel>
                <RadioGroup defaultValue="FALSE">
                  <HStack spacing="24px">
                    <Radio value="TRUE">Yes</Radio>
                    <Radio value="FALSE">No</Radio>
                  </HStack>
                </RadioGroup>
                {/* <FormHelperText>Choose wisely, Jarvinski</FormHelperText> */}
              </FormControl>
              &nbsp;
              <span></span>
              <ButtonGroup variant="outline" spacing="40">
                <Button className="Button" type="cancel"
                  onClick={() => setPinToggle(false)}>Cancel
              </Button>
              &nbsp;
                <Button className="Button" type="submit">Save Pin </Button>
              </ButtonGroup>
            </form>
          </>
        ) : (
            <button
              className="btn" onClick={() => setPinToggle(true)}>Add Pin</button>
          )} <br></br>
          <br></br>
      <Divider orientation="horizontal" />
      <Table variant="simple"
        className="pinTable">
        <TableCaption>Pin Table</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Year</Th>
            <Th>Team</Th>
            <Th>League</Th>
            <Th>Up for trade?</Th>
            <Th>Belongs to user </Th>
            <Th>Delete</Th>
            <Th>Toggle Trade Status</Th>
          </Tr>
        </Thead>

        <Tbody>
          
          {pins.map((pin, i) => {
            const yes = true;
            const no = false;
            return (
              <Tr key={i} cursor="pointer" >
                <Td onClick={() => setPinDetails(pin)}>{pin.id}</Td>
                <Td>{pin.year}</Td>
                <Td>{pin.team}</Td>
                <Td>{pin.league}</Td>
                <Td>{pin.tradeable.toString()}</Td>
                <Td>{user.first_name}</Td>
                <Td><Button
                  className="Button" size="sm" onClick={() => handleDelete(pin.id)}>Delete</Button> &nbsp;</Td>
                <Td><Button
                  className="Button" size="sm" onClick={() => handleTradeableUpdate(pin.id)}>Toggle Trade Status</Button></Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Year</Th>
            <Th>Team</Th>
            <Th>League</Th>
            <Th>Up for trade?</Th>
            <Th>Belongs to user </Th>
            <Th>Delete</Th>
            <Th>Toggle Trade Status</Th>
          </Tr>
        </Tfoot>
      </Table>

      <Divider orientation="horizontal" />
      &nbsp;

      <div className="pinList">
      <Heading as="h2" size="xl">
        Pin List
      </Heading>
        <UnorderedList spacing={3}>
          {pins.map((pin) => {
            return (
              <ListItem key={pin.id}>
                {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
                {pin.id} {pin.year} {pin.league} {pin.team} {pin.tradeable.toString()}
              &nbsp;

                <Button
                  className="Button" size="sm" onClick={() => handleDelete(pin.id)}>Delete</Button>
                <Button
                  className="Button" size="sm" onClick={() => handleTradeableUpdate(pin.id)}>Toggle Trade Status</Button>
              </ListItem>
            )
          })}
        </UnorderedList>
        <span></span>
              &nbsp;
              <Divider orientation="horizontal" />
        
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
