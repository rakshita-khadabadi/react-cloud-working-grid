import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Occupants = ({ }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Occupants
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Occupants;