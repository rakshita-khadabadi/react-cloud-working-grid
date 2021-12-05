import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Leaseholderheader = ({ }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Leaseholder
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Leaseholderheader;