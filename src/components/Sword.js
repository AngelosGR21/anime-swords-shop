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
  const { cart, setCart, total, setTotal } = useContext(DataContext);
  console.log(cart);
  console.log(total);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.swordContainer}>
      <Card className={classes.sword} raised={true}>
        <CardMedia
          image={sword.image}
          className={classes.image}
          component="img"
        />
        <CardContent>
          <Typography>{sword.name}</Typography>
          <Typography>{sword.wielder}</Typography>
          <Typography>£ {sword.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setCart([...cart, sword]);
              setTotal(total + parseFloat(sword.price));
            }}
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
