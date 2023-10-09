import { Text, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { StyledDrawer, StyledHeader, StyledHeaderGroup } from './CustomHeader.styles.tsx';

export const CustomHeader = () => {
  const [burger, burgerAction] = useDisclosure();

  const burgerClicked = () => {
    if (burger) burgerAction.close();
    else burgerAction.open();
  };

  return (
    <StyledHeader>
      <StyledHeaderGroup justify="space-between" align="center">
        <Text>Custom header</Text>
        <Group gap={40} visibleFrom="sm">
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </Group>
        <Burger opened={burger} onClick={burgerClicked} hiddenFrom="sm" />
        <StyledDrawer opened={burger} onClose={burgerClicked} title="Brand" size="100%">
          <Box mt={30}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
          </Box>
        </StyledDrawer>
      </StyledHeaderGroup>
    </StyledHeader>
  );
};
