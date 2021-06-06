import { FunctionComponent } from 'react';
import { Divider, Drawer, Typography, makeStyles } from '@material-ui/core';
import { APP_NAME } from '../app/settings';

export const sideBarWidth = 240;

const useStyles = makeStyles(({ spacing }) => ({
  sideBar: {
    width: sideBarWidth,
    flexShrink: 0,
  },
  sideBarPaper: {
    width: sideBarWidth,
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingBottom: spacing(2),
    paddingTop: spacing(2),
  },
}));

export const SideBar: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      className={classes.sideBar}
      classes={{
        paper: classes.sideBarPaper,
      }}
      variant="permanent"
    >
      <Typography variant="h1" color="primary" className={classes.title}>
        {APP_NAME}
      </Typography>

      <Divider />
    </Drawer>
  );
};
