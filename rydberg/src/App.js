import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { quantumDefects } from "./quantumDefects";

function App() {
  const [n, setN] = useState(6);
  const [orbit, setOrbit] = useState();

  console.log(quantumDefects["ns1/2"]);
  return (
    <Box>
      <Card p="8">
        <CardHeader>
          <Heading size="lg">始状態</Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing={"4"} w="full" alignItems={"start"}>
            <FormControl>
              <FormLabel>主量子数</FormLabel>
              <NumberInput onChange={(e) => setN(e)} defaultValue={6} min={1} max={100}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>軌道</FormLabel>
              <Select onChange={(e) => setOrbit(e.target.value)}>
                <option value="ns1/2">s1/2</option>
                <option value="np1/2">p1/2</option>
                <option value="np3/2">p3/2</option>
                <option value="nd3/2">d3/2</option>
                <option value="nd5/2">d5/2</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>δ0</FormLabel>
              <Input defaultValue={orbit && quantumDefects[orbit][0]}></Input>
            </FormControl>

            <FormControl>
              <FormLabel>δ2</FormLabel>
              <Input defaultValue={orbit && quantumDefects[orbit][1]}></Input>
            </FormControl>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
