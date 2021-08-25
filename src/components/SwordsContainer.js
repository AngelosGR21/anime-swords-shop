import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

import { Grid } from "@material-ui/core";

import useStyles from "../styles/swordsContainerStyles";
import Sword from "./Sword";
import Filter from "./Filter";

const Swords = () => {
  const classes = useStyles();
  const { allSwords } = useContext(DataContext);
  return (
    <>
      <Grid container component="section">
        <Filter />
        <Grid
          container
          item
          className={classes.containerOfSwords}
          xs={12}
          component="main"
        >
          {allSwords.map((sword) => {
            return <Sword sword={sword} key={sword.id}></Sword>;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Swords;
