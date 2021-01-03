import { FunctionComponent } from 'react';
import { AppBar as MuiAppBar, Typography, makeStyles } from '@material-ui/core';
import { APP_NAME } from '../app/settings';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    padding: spacing(2),
  },
  title: {
    fontSize: '1.5rem',
  },
}));

export const AppBar: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <MuiAppBar className={classes.container}>
      <Typography variant="h1" color="inherit" className={classes.title}>
        {APP_NAME}
      </Typography>
    </MuiAppBar>
  );
};
