//HOOKS
import { useContext } from "react";
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
import { useStyles } from "./useStyles";

const Cart = () => {
  const classes = useStyles();
  const { cart, setCart, setCartItems, cartItems, total, setTotal } =
    useContext(DataContext);

  const onClickFunctionality = (item, operation) => {
    if (operation === "plus") {
      item.itemsInCart += 1;
      setTotal(total + parseFloat(item.price));
      setCartItems(cartItems + 1);
    }
    if (operation === "minus") {
      //REMOVING ITEM FROM CART IF QTY = 0
      if (item.itemsInCart === 1) {
        let updatedCart = cart.filter((i) => i.id !== item.id);
        setCartItems(cartItems - 1);
        setTotal(total - parseFloat(item.price));
        return setCart(updatedCart);
      }
      item.itemsInCart -= 1;
      setTotal(total - parseFloat(item.price));
      setCartItems(cartItems - 1);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <h1>Cart empty</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container className={classes.container} maxwidth="sm">
        {cart.map((item) => {
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
                    onClickFunctionality(item, "minus");
                  }}
                  size="small"
                >
                  <ArrowBackIosOutlinedIcon />
                </IconButton>
                <Typography variant="h5">{item.itemsInCart}</Typography>
                <IconButton
                  onClick={() => {
                    onClickFunctionality(item, "plus");
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
                  setCartItems(cartItems - item.itemsInCart);
                  setTotal(
                    total -
                      parseFloat(item.price) * parseFloat(item.itemsInCart)
                  );
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
