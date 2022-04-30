import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Stack,
    Center,
    Text
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
export default function Panel() {
    const router = useRouter();
    let urlAPI = "https://ckyu9ovtf8.execute-api.ap-south-1.amazonaws.com/crypto/purchase";
    const [loading, setIsLoading] = useState(false);
    const [arrayData, setArrayData] = useState([]);
    const [currentPrice, setCurrentPrice] = useState([]);
    let urlCoinGecko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

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

        axios({
            method: 'get',
            url: urlCoinGecko,
        }).then(response => {
            setCurrentPrice(response.data.map(crypto => {
                return ({
                    id: crypto.id,
                    currentPrice: crypto.current_price
                })
            }));
        }).catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            <Text fontSize='3xl' as="h1" ml="5" mt="3" onClick={() => { router.push("/") }} className="title-historyptos">Historyptos</Text>
            <Center h="100%">
                <Stack bg="whiteAlpha.900" paddingX="12" mt="10">
                    <Table variant='simple'>
                        <TableCaption>Mis cryptos</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Monto</Th>
                                <Th>Crypto</Th>
                                <Th>Precio que lo compré (USD)</Th>
                                <Th>Precio actual (USD)</Th>
                                <Th>Rentabilidad (USD)</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                arrayData.map(function (item, i) {
                                    let currentPriceCrypto = currentPrice.find(element => element.id == item.crypto)?.currentPrice;
                                    let profit = currentPriceCrypto - item.priceCrypto;
                                    return (
                                        <Tr>
                                            <Td>{item.date}</Td>
                                            <Td isNumeric>{item.amount}</Td>
                                            <Td style={{ textTransform: "capitalize" }}>{item.crypto}</Td>
                                            <Td>{item.priceCrypto}</Td>
                                            <Td>{currentPriceCrypto}</Td>
                                            <Td>{profit}</Td>
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