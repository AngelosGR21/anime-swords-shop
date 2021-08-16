import { useContext } from "react";
import { DataContext } from "../utils/DataProvider";

import { Grid } from "@material-ui/core";

import useStyles from "../useStyles";
import Sword from "./Sword";

const Swords = () => {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  return (
    <>
      <Grid container spacing={0} className={classes.containerOfSwords}>
        {data.map((sword) => {
          return <Sword sword={sword} key={sword.id}></Sword>;
        })}
      </Grid>
    </>
  );
};

export default Swords;
