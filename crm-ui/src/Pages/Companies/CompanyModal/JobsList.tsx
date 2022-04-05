// @mui
import { List, ListItem } from "@mui/material";
// formik
import { useFormikContext } from "formik";
// interfaces
import { IJob } from "../../../interfaces/Job";

interface Formik {
  values: any;
}

const JobsList = () => {
  const {
    values: { jobs },
  }: Formik = useFormikContext();
  return (
    <List sx={{ padding: 1 }}>
      {jobs && jobs.length > 0 ? (
        jobs?.map((job: IJob, index: number) => (
          <ListItem key={index}>{job.name}</ListItem>
        ))
      ) : (
        <ListItem>No Jobs</ListItem>
      )}
    </List>
  );
};

export default JobsList;
