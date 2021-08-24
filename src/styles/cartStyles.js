import { makeStyles } from "@material-ui/styles";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  //CART COMPONENT
  container: {
    marginTop: "2.5rem",
    marginBottom: "3rem",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "50px 10px 40px",
    backgroundColor: colors.sText,
    borderRadius: "5px",
  },
  cartCard: {
    marginBottom: "2rem",
    width: "70%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 30px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  cartImage: {
    width: "40%",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "20%",
    },
  },
  itemName: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  itemsNumberDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "10px",
  },
  iconButtons: {
    width: "1rem",
    height: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "1.3rem",
      height: "1.3rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1.6rem",
      height: "1.6rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "2rem",
      height: "2rem",
    },
  },
  itemsInCart: {
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.9rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.3rem",
    },
  },
  itemsInCartPrice: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  deleteIcon: {
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.7rem",
    },
  },

  divider: {
    height: "1px",
    width: "90%",
    marginBottom: "10px",
  },
  subtotalContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: "20px",
  },
  subtotal: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  cartButton: {
    fontSize: "1rem",
    color: colors.primary,
    backgroundColor: colors.pText,
    "&:hover": {
      color: colors.pLight,
      backgroundColor: colors.sDark,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: "8px 18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
      marginRight: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.9rem",
      padding: "10px 20px",
    },
  },

  //EMPTY CART
  emptyCartContainer: {
    display: "flex",
    height: "70vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartHeader: {
    fontSize: "1.9rem",
    color: colors.sDark,
    fontWeight: "400",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
    },
  },
  emptyCartLink: {
    marginTop: "2rem",
    textDecoration: "none",
  },
  emptyCartButton: {
    fontSize: "1rem",
    color: colors.primary,
    backgroundColor: colors.pText,
    "&:hover": {
      color: colors.pLight,
      backgroundColor: colors.sDark,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: "8px 18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.9rem",
      padding: "10px 20px",
    },
  },
}));

export default useStyles;
