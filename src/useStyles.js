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

export default useStyles;
