import React from 'react'
import { Link, Typography } from '@material-ui/core';

const Copyright = (theme) => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          CurliQ's Style 'n' Reviews
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright

