// IMPORTING COMPONENTS
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

//IMPORTING STYLES
import useStyles from "../useStyles";

const Navbar = () => {
  const { cartItems } = useContext(DataContext);
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.navbar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Brand</Typography>
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={cartItems} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
