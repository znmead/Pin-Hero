import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PinDetails.css';
import useReduxStore from "../../hooks/useReduxStore";
import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    HStack,
    Image,
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

} from "@chakra-ui/react";

function PinDetails(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const pin = useSelector(store => store.pinDetailsReducer);

    const user = useSelector((store) => store.user);
    const pins = useSelector((store) => store.pins);
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_PIN' });

    }, []);

    // if (pin.team === undefined) {
    //     return <h1>Invalid Pin (No details found)</h1>
    // }

    return (
        <>
            <Heading as="h2" size="xl">
                Pin Details
            </Heading>
            <br></br>
            <br></br>
            {/* <Table variant="simple"
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

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{pin.id}</Td>
                        <Td>{pin.year}</Td>
                        <Td>{pin.team}</Td>
                        <Td>{pin.league}</Td>
                        <Td>{pin.tradeable.toString()}</Td>
                        <Td>{user.first_name}</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Year</Th>
                        <Th>Team</Th>
                        <Th>League</Th>
                        <Th>Up for trade?</Th>
                        <Th>Belongs to user </Th>
                    </Tr>
                </Tfoot>
            </Table> */}
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={pin.image_url} alt={pin.team} />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {pin.year}
                        </Box>
                    </Box>
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {pin.league}  &bull;  {pin.team} &nbsp; <Button onClick={() => history.push('/')}>Back to the Pin List</Button>
                    </Box>
                </Box>
            </Box>

            {/* <img src={pin.image_url} alt={pin.team} /> */}

            {/*Add a details edit function */}

        </>

    )

}

export default PinDetails;