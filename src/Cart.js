import { Link } from "react-router-dom";
//HOOKS
import { useContext, useEffect } from "react";

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
  Button,
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
      setCartItems(cartItems + 1);
    }
    if (operation === "minus") {
      //REMOVING ITEM FROM CART IF QTY = 0
      if (item.itemsInCart === 1) {
        item.itemsInCart = 0;
        let updatedCart = cart.filter((i) => i.id !== item.id);
        setCartItems(cartItems - 1);
        return setCart(updatedCart);
      }
      item.itemsInCart -= 1;
      setCartItems(cartItems - 1);
    }
  };

  const removeItem = (item) => {
    let updatedCart = cart.filter((i) => i.id !== item.id);
    setCartItems(cartItems - item.itemsInCart);
    setCart(updatedCart);
    item.itemsInCart = 0;
  };

  //Setting the subtotal and price of items to show only the 2 digits after .
  const slicePrice = (item) => {
    let regex = /\./;
    if (item) {
      let price = `${item.price * item.itemsInCart}`;
      let indexOfDot = price.search(regex);
      price = price.slice(0, indexOfDot + 3);
      return price;
    }
    let subtotal = `${total}`;
    let indexOfDot = subtotal.search(regex);
    subtotal = parseFloat(subtotal.slice(0, indexOfDot + 3));
    return subtotal;
  };
  const subtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      let total = cart[i].itemsInCart * cart[i].price;
      subtotal += total;
    }
    return subtotal;
  };

  useEffect(() => {
    if (cart.length === 1) {
      let totalPrice = cart[0].price * cart[0].itemsInCart;
      setTotal(totalPrice);
    }
    setTotal(subtotal());
  });

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <Container className={classes.emptyCartContainer}>
          <Typography variant="h2" className={classes.emptyCartHeader}>
            Your cart is empty.
          </Typography>
          <Link to="/" className={classes.emptyCartLink}>
            <Button variant="contained" className={classes.emptyCartButton}>
              Browse swords
            </Button>
          </Link>
        </Container>
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
              <Typography>£{slicePrice(item)}</Typography>
              <IconButton
                onClick={() => {
                  removeItem(item);
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Card>
          );
        })}
        <div>
          <Typography style={{ backgroundColor: "white" }}>
            Subtotal : £{slicePrice()}
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Cart;
