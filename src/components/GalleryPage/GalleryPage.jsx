import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from "../../hooks/useReduxStore";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSound from 'use-sound';
import './GalleryPage.css';
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

} from "@chakra-ui/react"



function GalleryPage() {
  let [addPinToggle, setPinToggle] = useState(false);
  let [updatePinToggle, setUpdatePinToggle] = useState(false);

  const user = useSelector((store) => store.user);
  const pins = useSelector((store) => store.pins);
  const store = useReduxStore();

  const dispatch = useDispatch();
  const history = useHistory();

  const setPinDetails = (pin) => {
    console.log(`You want to see details for ${pin.team}`);
    dispatch({
      type: 'SET_PIN_DETAILS',
      payload: pin,
    });
    history.push('/details');
  }

  return (
    <div className="container">
      <Heading as="h1" size="2xl">Pin Gallery</Heading>
      <br></br>
      <Heading as="h2" size="1xl">Click a pin to view details about it.</Heading>
      <br></br>
      <hr></hr>
      <br></br>

      <p>

      </p>
      <main>
        
        <section className="pins">
          {pins.map(pin => {
            return (
              <div key={pin.id} >
                <Heading as="h2" size="1xl">{pin.year} {pin.league} {pin.team}</Heading>
                <br></br>
                <img src={pin.image_url} alt={pin.team} onClick={() => setPinDetails(pin)} />
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
              </div>
              
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default GalleryPage;
