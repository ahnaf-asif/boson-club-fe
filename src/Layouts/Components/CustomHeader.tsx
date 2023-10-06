import { Text, Group } from '@mantine/core';

export const CustomHeader = () => {
  return (
    <header style={{ height: '100%', margin: '0 15px' }}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Text>Custom header</Text>
        <Group gap={40}>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
      </Group>
    </header>
  );
};
