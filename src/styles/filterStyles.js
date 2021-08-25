import { makeStyles } from "@material-ui/styles";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    height: "100px",
  },
  formControl: {
    width: "90%",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "50%",
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
}));

export default useStyles;
