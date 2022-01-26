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

interface ICRUDTableProps<DataType> {
  data: DataType[];
  cellNames: string[];
  keysToShow: string[];
  setModalData: (data: DataType | undefined) => void;
  setIsDataModalOpen: (value: boolean) => void;
}

const CRUDTable = <DataType extends { id: number }>(
  props: ICRUDTableProps<DataType>
) => {
  const { data, cellNames, setModalData, keysToShow, setIsDataModalOpen } =
    props;

  const { t } = useTranslation("components", { keyPrefix: "crudTable" });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedDatasId, setSelectedDatasId] = useState<number[]>([]);
  return (
    <Paper
      sx={{
        width: "calc(100% - 40px)",
        marginLeft: "auto",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
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
              {cellNames.map((name) => (
                <TableCell>{name}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
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
                  {keysToShow.map((key) => (
                    <>
                      <TableCell>{item[key as keyof typeof item]}</TableCell>
                    </>
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
              ))}
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
      <Stack padding={"1rem"}>
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
          >
            {t("delete")}
          </Button>
        </ButtonGroup>
      </Stack>
    </Paper>
  );
};

export default CRUDTable;
