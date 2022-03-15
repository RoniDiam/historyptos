import { Text, Input, Stack, HStack, Select, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  let urlAPI = "https://ckyu9ovtf8.execute-api.ap-south-1.amazonaws.com/crypto/purchase";
  const [loading, setIsLoading] = useState(false);
  const [arrayCryptos, setArrayCryptos] = useState([]);
  const [priceCrypto, setPriceCrypto] = useState("");
  const [formFields, setFormFields] = useState({
    fields: { date: "", amount: "", crypto: "" },
    errors: {},
  });

  let urlCoinGecko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    axios({
      method: 'get',
      url: urlCoinGecko,
    }).then(response => {
      setArrayCryptos(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);


  const changeValue = (e) => {
    const { name, value } = e.target;

    if (name === "crypto") {
      let cryptoSearch = arrayCryptos.find(element => element.id == value);
      let price = cryptoSearch.current_price;
      setPriceCrypto(price);
    }
    if (name === "amount" && value <= 0) {
      const formFieldsCopy = { ...formFields };
      formFieldsCopy.errors[name] = "No es un amount valido";
      setFormFields(formFieldsCopy);
    } else {
      const formFieldsCopy = { ...formFields };
      delete formFieldsCopy.errors["amount"];
      formFieldsCopy.fields[name] = value;
      setFormFields(formFieldsCopy);
    }
  };

  const onClickBuyCrypto = async (e) => {
    //e.preventDefault();
    console.log(e);
    const {
      fields: { date, amount, crypto },
    } = formFields;
    if (date == "" || amount == "" || crypto == "Seleccione criptomoneda") {
      console.log("Completar campos");
    }
    else {
      axios({
        method: 'post',
        url: urlAPI,
        data: {
          date: date,
          amount: amount,
          crypto: crypto,
          priceCrypto: priceCrypto,
        }
      }).then(response => {
        router.push("/panel");
        setIsLoading(false);
      }).catch(err => {
        console.log(err);
        setIsLoading(false);
      });
    }
  };
  return (
    <div>
      <Text fontSize='3xl' as="h1" ml="5" mt="3">Historyptos</Text>
      <Stack paddingX="10">
        <Text mb='8px'>Ingrese fecha de su compra: </Text>
        <Input type="date" placeholder='22-03-2001' onChange={changeValue} name="date" isRequired />

        <Text mb='8px'>Ingrese su compra: </Text>
        <HStack>
          <Input type="number" placeholder='2' onChange={changeValue} name="amount" />
          <Select placeholder='Seleccione criptomoneda' onChange={changeValue} name="crypto">
            {
              arrayCryptos.map(function (item, i) {
                return (
                  <option value={item.id}>{item.id}</option>
                );
              })
            }
          </Select>
        </HStack>
        <Text>Usted esta comprando cada token a: {priceCrypto} USD</Text>
        <Button size="lg" onClick={onClickBuyCrypto}>
          Registrar compra
        </Button>
      </Stack>
    </div>

  )
}