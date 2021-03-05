import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';
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

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Need an account? Register here!</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <FormControl
          type="text"
          name="username"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}>

        
        <FormLabel htmlFor="username">
          Username:
          <Input type="text" />
        </FormLabel>
        <FormHelperText>Username</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl
        type="password"
        name="password"
        value={password}
        required
        onChange={(event) => setPassword(event.target.value)}
        >
        <FormLabel htmlFor="password">
          Password:
          <Input type="text" />
        </FormLabel>
        <FormHelperText>Password</FormHelperText>
        </FormControl>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
