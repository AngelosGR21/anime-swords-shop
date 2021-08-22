import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

const colors = {
  primary: "#ff8f00",
  pLight: "#ffc046",
  pDark: "#c56000",
  pText: "#000000",

  secondary: "#424242",
  sLight: "#6d6d6d",
  sDark: "#1b1b1b",
  sText: "#ffffff",
};

export const useStyles = makeStyles((theme) => ({
  //NAVBAR
  navbar: {
    backgroundColor: colors.primary,
    color: colors.sDark,
    boxShadow: `0px 4px 3px ${colors.sDark}`,
  },
  brand: {
    textDecoration: "none",
    color: colors.sDark,
    transition: "color",
    transitionDuration: "0.4s",
    "&:hover": {
      color: colors.sText,
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },

  //FILTER SECTION
  filterContainer: {
    height: "100px",
  },
  formControl: {
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  filterLabel: {
    color: colors.sDark,
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },

  select: {
    "&:after": {
      borderColor: colors.primary,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
  },

  //ITEMS SECTION
  containerOfSwords: {
    marginTop: "2rem",
  },
  swordContainer: {
    display: "flex",
    justifyContent: "center",
    width: "50px",
  },
  sword: {
    backgroundColor: colors.sText,
    width: "60%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0 20px",
    marginBottom: "40px",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
  },
  imageContainer: {
    marginTop: "10px",
    height: "60%",
    [theme.breakpoints.up("md")]: {
      marginTop: "0px",
    },
  },
  image: {
    height: "100%",
    objectFit: "contain",
  },
  cardDetails: {
    padding: "0",
  },
  swordName: {
    fontWeight: "200",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.7rem",
    },
  },
  swordWielder: {
    fontWeight: "200",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.7rem",
    },
  },
  buttonAndPrice: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  price: {
    fontWeight: "700",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.6rem",
    },
  },
  buyButton: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.6rem",
    },
  },

  //CART COMPONENT
  container: {
    marginTop: "3rem",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cartCard: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: "20px 30px",
  },
  cartImage: {
    width: "10%",
  },
  itemsNumberDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const theme = createTheme({
  overrides: {
    MuiBadge: {
      badge: {
        backgroundColor: colors.sDark,
        color: colors.sText,
      },
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: colors.primary,
        },
      },
    },
    MuiButton: {
      colorInherit: {
        color: colors.pDark,
      },
    },
  },
});
