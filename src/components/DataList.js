import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
// import { getContacts } from "../api/Contacts.js";
import Searchbar from "./Searchbar.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "98%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const DataList = (props) => {
  const classes = useStyles();
  // const [contacts, setContacts] = useState([]);
  const [checked, setChecked] = useState([0]);
  const [query, setQuery] = useState("");
  // useEffect(() => {
  //   let mounted = true;
  //   getContacts().then((items) => {
  //     if (mounted) {
  //       setContacts(
  //         items.sort((a, b) => a.last_name.localeCompare(b.last_name))
  //       );
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  console.log("PROPS:")
  console.log(props)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const listItems = () => {
    console.log("IDs: " + checked);
    return props.contacts.map(
      ({ id, first_name, last_name, avatar, email }) => (
        <div>
          <ListItem key={id} alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={first_name + " " + last_name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {email}
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(id)}
                checked={checked.indexOf(id) !== -1}
                inputProps={{
                  "aria-labelledby": `checkbox-list-secondary-label-${id}`,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )
    );
  };

  return (
    <div>
      {/* <Searchbar query={query} updateQuery={setQuery} /> */}
      <List className={classes.root}>{listItems()}</List>
    </div>
  );
};

export default DataList;
