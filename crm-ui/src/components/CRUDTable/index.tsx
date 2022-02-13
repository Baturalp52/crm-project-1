import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import resolve from "../../helpers/resolve";
import DeleteModal from "./DeleteModal";
import SearchBar from "./SearchBar";

interface ICRUDTableProps<DataType> {
  data: DataType[];
  cellNames: string[];
  keysToShow: string[];
  setModalData: (data: DataType | undefined) => void;
  setIsDataModalOpen: (value: boolean) => void;
  customDataComponent?: any;
  searchForm?: any;
  filters?: any;
}

const CRUDTable = <DataType extends { id: number }>(
  props: ICRUDTableProps<DataType>
) => {
  const {
    data,
    cellNames,
    setModalData,
    keysToShow,
    setIsDataModalOpen,
    customDataComponent,
    searchForm,
    filters,
  } = props;
  let customComponent = customDataComponent ? customDataComponent : [];

  const { t } = useTranslation("components", { keyPrefix: "crudTable" });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedDatasId, setSelectedDatasId] = useState<number[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  return (
    <Paper
      sx={{
        width: "calc(100% - 40px)",
        marginLeft: "auto",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      <DeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} />
      {Boolean(searchForm) && (
        <SearchBar searchForm={searchForm} filters={filters} />
      )}
      <TableContainer sx={{ maxHeight: "500px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  value="all"
                  checked={data.length === selectedDatasId.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedDatasId(data.map((c: DataType) => c.id));
                    } else setSelectedDatasId([]);
                  }}
                />
              </TableCell>
              {cellNames.map((name, index) => (
                <TableCell key={index}>{name}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell key={index}>
                      <Checkbox
                        value={item.id}
                        checked={selectedDatasId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedDatasId = [...selectedDatasId];
                            _selectedDatasId.push(item.id);
                            setSelectedDatasId(_selectedDatasId);
                          } else {
                            const _selectedDatasId = [...selectedDatasId];
                            _selectedDatasId.splice(
                              _selectedDatasId.indexOf(item.id),
                              1
                            );
                            setSelectedDatasId(_selectedDatasId);
                          }
                        }}
                      />
                    </TableCell>
                    {keysToShow.map((key, index) => (
                      <TableCell key={index}>
                        {Object.keys(customComponent).includes(key)
                          ? customComponent[key](item[key as keyof typeof item])
                          : key.includes(".")
                          ? resolve(key, item)
                          : item[key as keyof typeof item]}
                      </TableCell>
                    ))}

                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setModalData(item);
                          setIsDataModalOpen(true);
                        }}
                      >
                        <BorderColor />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={cellNames.length + 1} align="center">
                  {t("no-data")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowPerPage}
        page={currentPage}
        onPageChange={(e: unknown, newPage: number) => {
          setCurrentPage(newPage);
        }}
        onRowsPerPageChange={(e) => {
          setRowPerPage(+e.target.value);
          setCurrentPage(0);
        }}
      />
      <Stack padding={1}>
        <ButtonGroup
          sx={{ marginLeft: "auto" }}
          aria-label="medium button group contained"
          variant="contained"
        >
          <Button
            sx={{ border: "none !important" }}
            startIcon={<Add />}
            color="success"
            onClick={() => {
              setModalData(undefined);
              setIsDataModalOpen(true);
            }}
          >
            {t("add")}
          </Button>
          <Button
            sx={{ border: "none !important" }}
            startIcon={<DeleteForeverRounded />}
            color="error"
            onClick={() => {
              setOpenDeleteModal(true);
            }}
          >
            {t("delete")}
          </Button>
        </ButtonGroup>
      </Stack>
    </Paper>
  );
};

export default CRUDTable;
