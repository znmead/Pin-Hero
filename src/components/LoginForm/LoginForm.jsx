import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './LoginForm.css';
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



function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <FormControl id="username"
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          isRequired>
          <FormLabel
            placeholder="username"
            htmlFor="username">
            Username:
          </FormLabel>
          <Input type="text" />
          <FormHelperText>Username</FormHelperText>
        </FormControl>
      </div>
      &nbsp;
      <span></span>
      <div>
        <FormControl>
        <FormLabel htmlFor="password">
          Password:
          <Input
            type="password"
            name="password"
            isRequired
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormLabel>
        <FormHelperText>Password</FormHelperText>
        </FormControl>
      </div>
      &nbsp;
      <span></span>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
