import i18n from "../../i18n";

export interface IFilter {
  id: number;
  pageName: string;
  keysToShow: string[];
  cellNames: string[];
  filters: {
    id: number;
    filterName: string;
  }[];
}

let t = (key: string, page: string) => i18n.t(`pages:${page}.table.${key}`);

const filters: IFilter[] = [
  {
    id: 1,
    pageName: "candidates",
    keysToShow: ["id", "name", "surname", "city"],
    cellNames: [
      t("id", "candidates"),
      t("name", "candidates"),
      t("surname", "candidates"),
      t("city", "candidates"),
    ],
    filters: [
      {
        id: 1,
        filterName: "mapsCoord",
      },
      {
        id: 2,
        filterName: "requestedJob",
      },
      {
        id: 3,
        filterName: "diploma",
      },
      {
        id: 4,
        filterName: "keywords",
      },
    ],
  },
  {
    id: 2,
    pageName: "companies",
    keysToShow: ["id", "name", "city"],
    cellNames: [
      t("id", "companies"),
      t("name", "companies"),
      t("city", "companies"),
    ],
    filters: [
      {
        id: 1,
        filterName: "mapsCoord",
      },
      {
        id: 2,
        filterName: "name",
      },
      {
        id: 3,
        filterName: "sector",
      },
    ],
  },
];

export default filters;
