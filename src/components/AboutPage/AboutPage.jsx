import React from 'react';

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

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p>
            <Heading as="h1" size="xl">This app was made with the following technologies</Heading> <br></br>

            
            
            PERN Stack: <br></br>
            Postgresql - Backend database <br></br>
            Express - Backend web application framework for Node <br></br>
            React - JavaScript library for frontend user interfaces <br></br>
            Node.js - Backend JavaScript runtime environment <br></br>

            <br></br>
            <br></br>

            <Heading as="h1" size="xl">Assistive technologies</Heading><br></br>

            Redux - React state management container <br></br>
            FileStack.js - image and files import API <br></br>
            Chakra UI - Component library to make React beautiful <br></br>

            </p>
            {/* <hr></hr> */}
            <br></br>

            

          <br></br>

          <p>
          <Heading as="h1" size="xl">Future features</Heading>

            {/* <hr></hr> */}
            <br></br>

            NHL api integration for news/scores<br></br>
            Web scraper for local hockey schdules<br></br>
            Interactive trading capability<br></br>
            Dark mode<br></br>
            Lifetime player stats<br></br>
            
          </p>

          <br></br>
          {/* <hr></hr> */}
          <br></br>

      </div>
    </div>
  );
}

export default AboutPage;
