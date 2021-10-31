import { FunctionComponent } from 'react';
import { AppBar as MuiAppBar, Link, Typography, makeStyles } from '@material-ui/core';
import { APP_NAME } from '../app/settings';

export const appBarHeight = '60px';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    minHeight: appBarHeight,
    padding: `${spacing(2)}px ${spacing(3)}px`,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
}));

export const AppBar: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <MuiAppBar className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        <Link color="initial" href="/">
          {APP_NAME}
        </Link>
      </Typography>
    </MuiAppBar>
  );
};
