import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

import useStyles from "../useStyles";

const Sword = ({ sword }) => {
  const classes = useStyles();
  const { cart, setCart, total, setTotal, cartItems, setCartItems } =
    useContext(DataContext);
  console.log(cart);

  //CART FUNCTIONALITY
  const searchCart = (sword) => {
    let search = cart.find((item) => item.name === sword.name);
    if (search !== undefined) {
      sword.itemsInCart += 1;
      setCart([...cart]);
      setCartItems(cartItems + 1);
      setTotal(total + parseFloat(sword.price));
    } else {
      sword.itemsInCart += 1;
      setCart([...cart, sword]);
      setCartItems(cartItems + 1);
      setTotal(total + parseFloat(sword.price));
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.swordContainer}>
      <Card className={classes.sword} raised={true}>
        <CardMedia
          image={sword.image}
          className={classes.image}
          component="img"
        />
        <CardContent>
          <Typography>{sword.name},</Typography>
          <Typography>{sword.wielder}</Typography>
          <Typography>£ {sword.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => searchCart(sword)}
            color="primary"
            endIcon={<AddShoppingCart />}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Sword;
