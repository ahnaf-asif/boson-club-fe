import { AppShell } from '@mantine/core';
import { CustomHeader } from './Components';
import { StyledAppShell } from './CommonLayout.styles.tsx';

export const CommonLayout = ({ children }: any) => {
  return (
    <StyledAppShell>
      <AppShell.Header>
        <CustomHeader />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </StyledAppShell>
  );
};
