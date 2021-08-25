import { makeStyles } from "@material-ui/styles";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
