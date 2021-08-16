import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  //NAVBAR
  toolbar: {
    justifyContent: "space-between",
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
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "20px",

    // border: "2px solid red",
  },
});

export default useStyles;
