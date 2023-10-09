import styled from 'styled-components';
import { Drawer, Group } from '@mantine/core';

export const StyledHeader = styled.header`
  height: 100%;
  margin: 0 15px;
`;

export const StyledHeaderGroup = styled(Group)`
  height: 100%;
`;

export const StyledDrawer = styled(Drawer)`
  .mantine-Drawer-title {
    font-size: 1.5rem;
  }
  .mantine-Drawer-close {
    transform: scale(1.5);
  }
`;
