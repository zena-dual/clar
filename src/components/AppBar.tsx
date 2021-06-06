import { FunctionComponent } from 'react';
import { AppBar as MuiAppBar, Typography, makeStyles } from '@material-ui/core';
import { sideBarWidth } from './SideBar';

export const appBarHeight = 60;

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    minHeight: appBarHeight,
    padding: spacing(2),
    paddingLeft: sideBarWidth + spacing(2),
  },
  title: {
    fontSize: '1.5rem',
  },
}));

interface Props {
  title?: string;
}

export const AppBar: FunctionComponent<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <MuiAppBar className={classes.container}>
      <Typography variant="h1" color="inherit" className={classes.title}>
        {title ?? ''}
      </Typography>
    </MuiAppBar>
  );
};
