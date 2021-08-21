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

export const useStyles = makeStyles({
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
  filterLabel: {
    color: colors.sDark,
  },

  select: {
    "&:after": {
      borderColor: colors.primary,
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
    backgroundColor: "#ffffff",
    width: "80%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  imageContainer: {
    marginTop: "10px",
    height: "60%",
  },
  image: {
    height: "100%",
  },
  price: {
    fontWeight: "700",
  },
  buttonAndPrice: {
    display: "flex",
    justifyContent: "space-evenly",
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
});

export const theme = createTheme({
  overrides: {
    MuiBadge: {
      badge: {
        backgroundColor: "#1b1b1b",
        color: "#ffffff",
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
