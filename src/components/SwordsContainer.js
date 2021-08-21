import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

import { Grid } from "@material-ui/core";

import { useStyles } from "../useStyles";
import Sword from "./Sword";
import Filter from "./Filter";

const Swords = () => {
  const classes = useStyles();
  const { allSwords } = useContext(DataContext);
  return (
    <>
      <Grid container>
        <Filter />
        <Grid container item className={classes.containerOfSwords} xs={12}>
          {allSwords.map((sword) => {
            return <Sword sword={sword} key={sword.id}></Sword>;
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Swords;
