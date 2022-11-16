import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { quantumDefects } from "../quantumDefects";

const InputForm = ({ n, handleN, handleQD }) => {
  const [orbit, setOrbit] = useState();
  const [quantumDefects0, setQuantumDefects0] = useState();
  const [quantumDefects2, setQuantumDefects2] = useState();

  const onChangeOrbit = (orbit) => {
    setOrbit(orbit);
    setQuantumDefects0(quantumDefects[orbit][0]);
    setQuantumDefects2(quantumDefects[orbit][2]);
  };

  useEffect(() => {
    if(!n || !quantumDefects0 || !quantumDefects2)return;
    if(typeof n !== "number" || typeof quantumDefects0 !== "number" || typeof quantumDefects2 !== "number"){
      alert("数字以外の型が入力されています。")
      return;
    }
    const quantumDefect =
      quantumDefects0 + quantumDefects2 / (n - quantumDefects0) ** 2;
      console.log((n - quantumDefects0) ** 2);
    handleQD(quantumDefect);
  }, [quantumDefects0, quantumDefects2, n, handleQD]);

  return (
    <Card p="8" bgColor="white">
      <CardBody>
        <VStack spacing={"4"} w="full" alignItems={"start"}>
          <FormControl>
            <FormLabel>主量子数</FormLabel>
            <NumberInput
              onChange={(e) => handleN(e)}
              defaultValue={n}
              min={1}
              max={100}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>軌道</FormLabel>
            <Select onChange={(e) => onChangeOrbit(e.target.value)}>
              <option value="ns1/2">s1/2</option>
              <option value="np1/2">p1/2</option>
              <option value="np3/2">p3/2</option>
              <option value="nd3/2">d3/2</option>
              <option value="nd5/2">d5/2</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>δ0</FormLabel>
            <Input
              defaultValue={orbit && quantumDefects[orbit][0]}
              onChange={(e) => setQuantumDefects0(e.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>δ2</FormLabel>
            <Input
              defaultValue={orbit && quantumDefects[orbit][1]}
              onChange={(e) => setQuantumDefects2(e.value)}
            ></Input>
          </FormControl>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default InputForm;
