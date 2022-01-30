import React, { useState } from "react";
import { Visibility } from "@mui/icons-material";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { resolve } from "./helpers";

interface ICRUDTableProps<DataType> {
  data: DataType[];
  cellNames: string[];
  keysToShow: string[];
  setModalData: (data: DataType | undefined) => void;
  setIsDataModalOpen: (value: boolean) => void;
  customDataComponent?: any;
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
  } = props;
  let customComponent = customDataComponent ? customDataComponent : [];

  const { t } = useTranslation("components", { keyPrefix: "crudTable" });

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
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
              {cellNames.map((name) => (
                <TableCell>{name}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0
              ? data
                  .slice(
                    currentPage * rowPerPage,
                    (currentPage + 1) * rowPerPage
                  )
                  .map((item, index) => (
                    <TableRow key={index}>
                      {keysToShow.map((key, index) => (
                        <>
                          <TableCell key={index}>
                            {Object.keys(customComponent).includes(key)
                              ? customComponent[key](
                                  item[key as keyof typeof item]
                                )
                              : key.includes(".")
                              ? resolve(key, item)
                              : item[key as keyof typeof item]}
                          </TableCell>
                        </>
                      ))}

                      <TableCell>
                        <Button
                          sx={{ border: "none !important" }}
                          color="info"
                          variant="contained"
                          onClick={() => {
                            setModalData(item);
                            setIsDataModalOpen(true);
                          }}
                        >
                          <Visibility />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              : t("no-data")}
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
    </Paper>
  );
};

export default CRUDTable;
