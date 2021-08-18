//HOOKS
import { useContext, useState } from "react";
//COMPONENTS
import Navbar from "./components/Navbar";

//CONTEXT
import { DataContext } from "./utils/DataProvider";

//IMPORTING ICONS
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
//MATERIAL-UI COMPONENTS
import {
  Card,
  CardMedia,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
//MATERIAL-UI STYLES
import useStyles from "./useStyles";

const Cart = () => {
  const classes = useStyles();
  const { cart, setCart } = useContext(DataContext);
  const [rerender, setRerender] = useState(true);

  return (
    <>
      <Navbar />
      <Container className={classes.container} maxwidth="sm">
        {cart.map((item) => {
          console.log(item.itemsInCart);
          return (
            <Card className={classes.cartCard} raised={true} key={item.id}>
              <CardMedia
                src={item.image}
                component="img"
                className={classes.cartImage}
              />
              <Typography>{item.name}</Typography>
              <div className={classes.itemsNumberDiv}>
                <IconButton
                  onClick={() => {
                    item.itemsInCart -= 1;
                    setRerender(rerender ? !rerender : true);
                  }}
                  size="small"
                >
                  <ArrowBackIosOutlinedIcon />
                </IconButton>
                <Typography variant="h5">{item.itemsInCart}</Typography>
                <IconButton
                  onClick={() => {
                    item.itemsInCart += 1;
                    setRerender(rerender ? !rerender : true);
                  }}
                  size="small"
                >
                  <ArrowForwardIosOutlinedIcon />
                </IconButton>
              </div>
              <Typography>{item.price * item.itemsInCart}</Typography>
              <IconButton
                onClick={() => {
                  let updatedCart = cart.filter((i) => i.id !== item.id);
                  setCart(updatedCart);
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Cart;
