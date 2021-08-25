import { makeStyles } from "@material-ui/core";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  errorPageContainer: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  errorPageImage: {
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "57%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "65%",
    },
  },
  errorPageBox: {
    width: "100%",
    marginTop: "2rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },
  },
  errorPageHeader: {
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.9rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "3.2rem",
    },
  },
  errorPageLink: {
    textDecoration: "none",
  },
  errorPageButton: {
    marginTop: "2rem",
    fontSize: "1rem",
    color: colors.primary,
    backgroundColor: colors.pText,
    padding: "8px 30px",
    "&:hover": {
      color: colors.pLight,
      backgroundColor: colors.sDark,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1rem",
      padding: "10px 32px",
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
