import { Box, Button, Text, Title } from '@mantine/core';
import { CommonLayout } from '@/Layouts';

function App() {
  return (
    <CommonLayout>
      <Box m={20}>
        <Title>Nice Title</Title>
        <Text mt={10}>Hello world something</Text>
        <Button mt={10}>Click me!</Button>
      </Box>
    </CommonLayout>
  );
}

export default App;
