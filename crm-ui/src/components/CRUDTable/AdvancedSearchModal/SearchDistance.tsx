import { Grid, Stack, TextField } from "@mui/material";
import { ICompany } from "../../../interfaces/Company";
import companies from "../../../mockData/companies";
import FormDropdown from "../../FormDropdown";

const SearchDistance = (props: any) => {
  const { search, setSearch } = props;
  return (
    <Grid item xs={12} md={4}>
      <Stack direction="row">
        <FormDropdown<ICompany>
          label="Select Company"
          handleChange={(e) => {
            const cSearch = { ...search };
            cSearch.distance = {
              company: {},
              value: 0,
            };
            cSearch.distance.company = companies.filter(
              (company) => company.id === e.target.value
            )[0];

            setSearch(cSearch);
          }}
          datas={companies}
          defaultValue="Select Company"
          selectedValue={
            search.distance
              ? search.distance.company
                ? search.distance.company.id
                : 0
              : 0
          }
          dataToValue={(item) => `${item.id} - ${item.name}`}
          getValue={(item) => item.id}
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
