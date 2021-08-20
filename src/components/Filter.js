import { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import { DataContext } from "../utils/DataProvider";
import useStyles from "../useStyles";

const Filter = () => {
  const classes = useStyles();
  const { titles } = useContext(DataContext);
  return (
    <Grid container item direction="column" xs={12} sm={3}>
      <Grid container item direction="column">
        <Typography>Filters :</Typography>
        {titles.map((title, i) => {
          return (
            <Grid item key={i}>
              {title}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Filter;
