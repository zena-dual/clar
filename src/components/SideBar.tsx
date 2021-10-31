import { FunctionComponent } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListIcon from '@material-ui/icons/List';
import { APP_URL } from '../app/settings';
import { appBarHeight } from './AppBar';

export const sideBarWidth = '240px';

const useStyles = makeStyles(({ palette, spacing }) => ({
  listItemIcon: {
    color: '#fff',
    minWidth: 'initial',
    marginRight: spacing(2),
  },
  list: {
    backgroundColor: palette.primary.main,
    color: '#fff',
    height: `calc(100vh - ${appBarHeight})`,
  },
}));

export const SideBar: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem button component="a" href={`${APP_URL}/word/`}>
        <ListItemIcon className={classes.listItemIcon}>
          <ListIcon />
        </ListItemIcon>

        <ListItemText primary="単語一覧" />
      </ListItem>

      <ListItem button component="a" href={`${APP_URL}/chant/`}>
        <ListItemIcon className={classes.listItemIcon}>
          <ChatBubbleIcon />
        </ListItemIcon>

        <ListItemText primary="名詠（詠唱）一覧" />
      </ListItem>
    </List>
  );
};
