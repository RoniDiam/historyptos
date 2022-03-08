import { Text, Input, Stack, HStack, Select, Button } from '@chakra-ui/react'
export default function Index() {
  return (
    <div>
      <Text fontSize='3xl' as="h1" ml="5" mt="3">Historyptos</Text>
      <Stack paddingX="10">
        <Text mb='8px'>Ingrese fecha de su compra: </Text>
        <Input type="date" placeholder='22-03-2001' />

        <Text mb='8px'>Ingrese su compra: </Text>
        <HStack>
          <Input type="number" placeholder='2' />
          <Select placeholder='Seleccione criptomoneda'>
            <option value='bitcoin'>Bitcoin</option>
            <option value='ethereum'>Ethereum</option>
            <option value='solana'>Solana</option>
          </Select>
        </HStack>
        <Button size="lg">
          Registrar compra
        </Button>
      </Stack>
    </div>

  )
}