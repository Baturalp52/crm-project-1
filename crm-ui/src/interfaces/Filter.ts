interface IFilter {
  name: string;
  label: string;
  filterFunc?: (item: any) => boolean;
}

export default IFilter;
