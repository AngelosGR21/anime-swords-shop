// IMPORTING COMPONENTS
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//IMPORTING STYLES
import useStyles from "../useStyles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.navbar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Brand</Typography>
          <IconButton>
            <Badge badgeContent={1} color="error">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
