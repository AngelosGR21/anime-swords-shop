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
  Divider,
} from "@material-ui/core";
//MATERIAL-UI STYLES
import useStyles from "./styles/cartStyles";

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
      if (indexOfDot === -1) {
        return price;
      }
      price = price.slice(0, indexOfDot + 3);
      return price;
    }
    let subtotal = `${total}`;
    let indexOfDot = subtotal.search(regex);
    if (indexOfDot === -1) {
      return subtotal;
    }
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
      <Container
        className={classes.container}
        maxWidth="xl"
        component="section"
      >
        {cart.map((item) => {
          return (
            <Card
              className={classes.cartCard}
              raised={true}
              key={item.id}
              component="article"
            >
              <CardMedia
                src={item.image}
                component="img"
                className={classes.cartImage}
              />
              <Typography className={classes.itemName} component="h3">
                {item.name}
              </Typography>
              <div className={classes.itemsNumberDiv}>
                <IconButton
                  onClick={() => {
                    onClickFunctionality(item, "minus");
                  }}
                  size="small"
                >
                  <ArrowBackIosOutlinedIcon className={classes.iconButtons} />
                </IconButton>
                <Typography className={classes.itemsInCart}>
                  {item.itemsInCart}
                </Typography>
                <IconButton
                  onClick={() => {
                    onClickFunctionality(item, "plus");
                  }}
                  size="small"
                >
                  <ArrowForwardIosOutlinedIcon
                    className={classes.iconButtons}
                  />
                </IconButton>
              </div>
              <Typography className={classes.itemsInCartPrice}>
                £{slicePrice(item)}
              </Typography>
              <IconButton
                color="secondary"
                onClick={() => {
                  removeItem(item);
                }}
              >
                <DeleteOutlineOutlinedIcon className={classes.deleteIcon} />
              </IconButton>
            </Card>
          );
        })}
        <Divider orientation="horizontal" classes={{ root: classes.divider }} />
        <div className={classes.subtotalContainer}>
          <Typography className={classes.subtotal}>
            Subtotal : £{slicePrice()}
          </Typography>
          <Button className={classes.cartButton} variant="contained">
            Checkout
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Cart;
