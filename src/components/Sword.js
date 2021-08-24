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

import useStyles from "../styles/swordStyles";

const Sword = ({ sword }) => {
  const classes = useStyles();
  const { cart, setCart, total, setTotal, cartItems, setCartItems } =
    useContext(DataContext);
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
        <div className={classes.imageContainer}>
          <CardMedia
            image={sword.image}
            className={classes.image}
            component="img"
          />
        </div>
        <CardContent className={classes.cardDetails}>
          <Typography className={classes.swordName}>{sword.name},</Typography>
          <Typography className={classes.swordWielder}>
            {sword.wielder}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonAndPrice}>
          <Typography className={classes.price}>£ {sword.price}</Typography>
          <Button
            className={classes.buyButton}
            onClick={() => searchCart(sword)}
            color="inherit"
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
