import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
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
  Switch,
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

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Pin Hero');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <Heading as="h1" size="2xl">{heading}</Heading>
      <br></br>
      {/*  */}
      <div className="grid">
        <div className="grid-col grid-col_8">
          <Heading as="h2" size="xl">Your ultimate hockey pin tracker</Heading>
        </div>
        {/* <div>
        <img src="images/outdoorRink.jpg" id="odr" alt="odr"></img>
      </div> */}
        <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <br></br>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
