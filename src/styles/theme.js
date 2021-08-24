import colors from "./colors";
import { createTheme } from "@material-ui/core";

const theme = createTheme({
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

export default theme;
