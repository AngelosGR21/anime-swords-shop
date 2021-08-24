import { makeStyles } from "@material-ui/styles";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: colors.primary,
    color: colors.sDark,
    boxShadow: `0px 4px 3px ${colors.sDark}`,
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4rem",
    },
  },
  toolbar: {
    justifyContent: "space-between",
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
  badge: {
    [theme.breakpoints.up("md")]: {
      height: "25px",
      minWidth: "25px",
      fontSize: "0.9rem",
      borderRadius: "25px",
    },
  },
  brandAndCartButton: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
  },
}));

export default useStyles;
