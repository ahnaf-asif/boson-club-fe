import { AppShell } from '@mantine/core';
import { CustomHeader } from './Components';

export const CommonLayout = ({ children }: any) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <CustomHeader />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
