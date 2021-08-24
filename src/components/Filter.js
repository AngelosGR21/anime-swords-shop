import { useContext } from "react";
import { Grid, Select, InputLabel, FormControl } from "@material-ui/core";

import { DataContext } from "../utils/DataProvider";
import useStyles from "../styles/filterStyles";

const Filter = () => {
  const classes = useStyles();
  const { titles, setAllSwords, data } = useContext(DataContext);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAllSwords(data);
    } else {
      let filterSwords = data.filter(
        (sword) => sword.animeTitle === e.target.value
      );
      setAllSwords(filterSwords);
    }
  };
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      alignContent="center"
      className={classes.filterContainer}
    >
      <FormControl className={classes.formControl}>
        <InputLabel
          htmlFor="title-filter"
          classes={{
            root: classes.filterLabel,
          }}
        >
          Filter by title
        </InputLabel>
        <Select
          className={classes.select}
          native
          onChange={handleChange}
          inputProps={{ id: "title-filter" }}
        >
          <option value="" aria-label="None" />
          {titles.map((title, i) => {
            return (
              <option key={i} value={title}>
                {title}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Filter;
