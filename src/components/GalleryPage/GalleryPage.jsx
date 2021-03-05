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
      <p>import this

      The Zen of Python, by Tim Peters
      </p>

      <hr></hr>

      <p>
      Beautiful is better than ugly.
      Explicit is better than implicit.
      Simple is better than complex.
      Complex is better than complicated.
      Flat is better than nested.
      Sparse is better than dense.
      Readability counts.
      Special cases aren't special enough to break the rules.
      Although practicality beats purity.
      Errors should never pass silently.
      Unless explicitly silenced.
      In the face of ambiguity, refuse the temptation to guess.
      There should be one-- and preferably only one --obvious way to do it.
      Although that way may not be obvious at first unless you're Dutch.
      Now is better than never.
      Although never is often better than *right* now.
      If the implementation is hard to explain, it's a bad idea.
      If the implementation is easy to explain, it may be a good idea.
      Namespaces are one honking great idea -- let's do more of those!
      </p>
      <main>
            <h1>Pin Gallery</h1>
            <h3>Click a pin to view details about it.</h3>
            <section className="pins">
                {pins.map(pin => {
                    return (
                        <div key={pin.id} >
                            <h3>{pin.team}</h3>
                            <img src={pin.image_url} alt={pin.team} onClick={() => setPinDetails(pin)}/> 
                        </div>
                    );
                })}
            </section>
        </main>
    </div>
  );
}

export default GalleryPage;
