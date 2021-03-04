import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PinDetails.css';
import useReduxStore from "../../hooks/useReduxStore";
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
            <h1>Pin Details</h1>
            <Table variant="simple"
                className="pinTable">
                <TableCaption>Pin Table</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Year</Th>
                        <Th>Team</Th>
                        <Th>League</Th>
                        <Th>Image Link</Th>
                        <Th>Up for trade?</Th>
                        <Th>Belongs to user </Th>

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{pin.team}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <img src={pin.image_url} alt={pin.team} />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            {pin.league}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <Button onClick={() => history.push('/')}>Back to the Pin List</Button>
            {/*Add a details edit function */}

        </>

    )

}

export default PinDetails;