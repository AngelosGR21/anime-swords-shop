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
import useStyles from "../styles/navbarStyles";

const Navbar = () => {
  const { cartItems } = useContext(DataContext);
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.navbar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.brand}>
            <Typography variant="h5" className={classes.brandAndCartButton}>
              Shinai
            </Typography>
          </Link>
          <Link to="/cart" className={{}}>
            <IconButton>
              <Badge
                badgeContent={cartItems}
                max={99}
                classes={{ badge: classes.badge }}
              >
                <ShoppingBasketIcon className={classes.brandAndCartButton} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
