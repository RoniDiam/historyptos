import { Text, Input, Stack, HStack, Select, Button } from '@chakra-ui/react'
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  let urlAPI = "https://ckyu9ovtf8.execute-api.ap-south-1.amazonaws.com/crypto/purchase";
  const [loading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    fields: { date: "", amount: "", crypto: "" },
    errors: {},
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
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
    axios({
      method: 'post',
      url: urlAPI,
      data: {
        date: date,
        amount: amount,
        crypto: crypto
      }
    }).then(response => {
      router.push("/panel");
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  };
  return (
    <div>
      <Text fontSize='3xl' as="h1" ml="5" mt="3">Historyptos</Text>
      <Stack paddingX="10">
        <Text mb='8px'>Ingrese fecha de su compra: </Text>
        <Input type="date" placeholder='22-03-2001' onChange={changeValue} name="date" />

        <Text mb='8px'>Ingrese su compra: </Text>
        <HStack>
          <Input type="number" placeholder='2' onChange={changeValue} name="amount" />
          <Select placeholder='Seleccione criptomoneda' onChange={changeValue} name="crypto">
            <option value='bitcoin'>Bitcoin</option>
            <option value='ethereum'>Ethereum</option>
            <option value='solana'>Solana</option>
          </Select>
        </HStack>
        <Button size="lg" onClick={onClickBuyCrypto}>
          Registrar compra
        </Button>
      </Stack>
    </div>

  )
}