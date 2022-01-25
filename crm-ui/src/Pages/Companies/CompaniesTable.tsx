import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
  ButtonGroup,
  Button,
  Stack,
} from "@mui/material";

import companies from "../../mockData/companies";
import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import RightBar from "./RightBar";
import { ICompany } from "../../mockData/interfaces/Company";

const CompanysTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedCompanysId, setSelectedCompanysId] = useState<number[]>([]);
  const [isRightBarOpen, setIsRightBarOpen] = useState<boolean>(false);
  const [rightBarCompany, setRightBarCompany] = useState<ICompany | undefined>(
    undefined
  );

  return (
    <>
      <RightBar
        company={rightBarCompany}
        isOpen={isRightBarOpen}
        setIsOpen={setIsRightBarOpen}
      />
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
                    checked={companies.length === selectedCompanysId.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCompanysId(companies.map((c) => c.id));
                      } else setSelectedCompanysId([]);
                    }}
                  />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {companies
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        value={item.id}
                        checked={selectedCompanysId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedCompanysId = [...selectedCompanysId];
                            _selectedCompanysId.push(item.id);
                            setSelectedCompanysId(_selectedCompanysId);
                          } else {
                            const _selectedCompanysId = [...selectedCompanysId];
                            _selectedCompanysId.splice(
                              _selectedCompanysId.indexOf(item.id),
                              1
                            );
                            setSelectedCompanysId(_selectedCompanysId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setRightBarCompany(item);
                          setIsRightBarOpen(true);
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
          count={companies.length}
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
                setRightBarCompany(undefined);
                setIsRightBarOpen(true);
              }}
            >
              Add New
            </Button>
            <Button
              sx={{ border: "none !important" }}
              startIcon={<DeleteForeverRounded />}
              color="error"
            >
              Delete
            </Button>
          </ButtonGroup>
        </Stack>
      </Paper>
    </>
  );
};
export default CompanysTable;