interface IFilter {
  name: string;
  label: string;
  filterFunc?: (item: any) => boolean;
  notVisible?: boolean;
}

export default IFilter;
