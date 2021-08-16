// IMPORTING COMPONENTS
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

//IMPORTING STYLES
import useStyles from "../useStyles";

const Navbar = () => {
  const { cart } = useContext(DataContext);
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.navbar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Brand</Typography>
          <IconButton>
            <Badge badgeContent={cart.length} showZero color="error">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
