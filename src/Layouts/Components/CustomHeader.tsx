import { Text, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const CustomHeader = () => {
  const [burger, burgerAction] = useDisclosure();

  const burgerClicked = () => {
    if (burger) burgerAction.close();
    else burgerAction.open();
  };

  return (
    <header style={{ height: '100%', margin: '0 15px' }}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Text>Custom header</Text>
        <Group gap={40} visibleFrom="sm">
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
        <Burger opened={burger} onClick={burgerClicked} hiddenFrom="sm" />
      </Group>
    </header>
  );
};
