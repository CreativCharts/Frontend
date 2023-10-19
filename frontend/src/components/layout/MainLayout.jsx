import React from 'react';
import { Container, Grid } from '@mui/material';

export const MainLayout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Grid children={children} container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
};

export const SidebarLayout = ({ children }) => {
  return (
    <Grid item columns={12} md={3}>
      {children}
    </Grid>
  );
};

export const ContentLayout = ({ children }) => {
  return (
      /* auto fit*/
    <Grid item columns={12} md={9}>
      {children}
    </Grid>
  );
};
