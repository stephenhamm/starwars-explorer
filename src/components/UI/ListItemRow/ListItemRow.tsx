import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/icons/AccountCircle';

interface Props {
  title: string;
  listIndex: number;
  clicked: Function
}

const ListItemRow = (props: Props) => (
    <ListItem button onClick={() => props.clicked(props.listIndex)}>
      <ListItemAvatar>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.title} />
    </ListItem>
);

export default ListItemRow;