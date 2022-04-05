// @mui
import { Grid, MenuItem, Stack, TextField } from "@mui/material";
// interfaces
import { ICompany } from "../../../interfaces/Company";
// components
import FormDropdown from "../../FormDropdown";
// swr
import useSWR from "swr";

const SearchDistance = (props: any) => {
  const { search, setSearch } = props;
  const { data: companies } = useSWR("companies");
  if (!companies) return null;
  return (
    <Grid item xs={12} md={4}>
      <Stack direction="row">
        <FormDropdown<ICompany>
          label="Select Company"
          onChange={(e: any) => {
            const cSearch = { ...search };
            cSearch.distance = {
              company: {},
              value: 0,
            };
            cSearch.distance.company = companies.filter(
              (company: ICompany) => company.id === Number(e.target.value)
            )[0];

            setSearch(cSearch);
          }}
          options={companies}
          defaultValue="Select Company"
          selectedValue={
            search.distance
              ? search.distance.company
                ? search.distance.company.id
                : 0
              : 0
          }
          renderOptions={(option) => (
            <MenuItem value={option.id}>
              {option.id + " - " + option.name}
            </MenuItem>
          )}
        />
        <TextField
          label="Distance"
          type="number"
          name={"distance"}
          value={search.distance ? search.distance.value : 0}
          disabled={!Boolean(search.distance ? search.distance.company : false)}
          variant="standard"
          margin="dense"
          onChange={(e) => {
            const cSearch = { ...search };
            cSearch.distance.value = e.target.value;
            setSearch(cSearch);
          }}
        />
      </Stack>
    </Grid>
  );
};

export default SearchDistance;
