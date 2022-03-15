import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Stack,
    Center
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Panel() {
    let urlAPI = "https://ckyu9ovtf8.execute-api.ap-south-1.amazonaws.com/crypto/purchase";
    const [loading, setIsLoading] = useState(false);
    const [arrayData, setArrayData] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: urlAPI,
        }).then(response => {
            setArrayData(response.data);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);
    return (
        <div>
            <Center h="100%">
                <Stack bg="whiteAlpha.900" paddingX="12" mt="10">
                    <Table variant='simple'>
                        <TableCaption>Pacientes</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Monto</Th>
                                <Th>Crypto</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                arrayData.map(function (item, i) {
                                    return (
                                        <Tr>
                                            <Td>{item.date}</Td>
                                            <Td isNumeric>{item.amount}</Td>
                                            <Td>{item.crypto}</Td>
                                        </Tr>

                                    );
                                })
                            }
                        </Tbody>
                    </Table>
                </Stack>
            </Center>
        </div>
    )
}