import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";

function App() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [qd1, setQd1] = useState();
  const [qd2, setQd2] = useState();

  useEffect(() => {
    console.log(qd1, qd2);
  }, [qd1, qd2]);

  return (
    <Box bgColor="gray.200">
      <HStack p="8" spacing="4">
        <VStack spacing="4" alignItems="start">
          <Heading size="lg">始状態</Heading>
          <InputForm
            n={n1}
            handleN={(val) => setN1(Number(val))}
            handleQD={(val) => setQd1(val)}
          />
        </VStack>
        <VStack spacing="4" alignItems="start">
          <Heading size="lg">終状態</Heading>
          <InputForm
            n={n2}
            handleN={(val) => setN2(Number(val))}
            handleQD={(val) => setQd2(val)}
          />
        </VStack>
      </HStack>
    </Box>
  );
}

export default App;
