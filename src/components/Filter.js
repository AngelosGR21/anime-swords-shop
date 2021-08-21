import { useContext } from "react";
import { Grid, Select, InputLabel, FormControl } from "@material-ui/core";

import { DataContext } from "../utils/DataProvider";
import useStyles from "../useStyles";

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
    <Grid container item xs={12} justifyContent="flex-start">
      <FormControl>
        <InputLabel htmlFor="title-filter">Filter</InputLabel>
        <Select
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
