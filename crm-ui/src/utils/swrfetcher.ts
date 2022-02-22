import { SWRConfiguration } from "swr";
import BaseService from "../services/index";

const fetcher: SWRConfiguration["fetcher"] = (resource, init) =>
  BaseService.get(resource)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export default fetcher;
