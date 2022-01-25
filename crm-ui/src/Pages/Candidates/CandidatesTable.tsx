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

import candidates from "../../mockData/candidates";
import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import ActionModal from "./ActionModal";
import { ICandidate } from "../../mockData/interfaces/Candidate";

const CandidatesTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedCandidatesId, setSelectedCandidatesId] = useState<number[]>(
    []
  );
  const [isActionModalOpen, setIsActionModalOpen] = useState<boolean>(false);
  const [actionModalCandidate, setActionModalCandidate] = useState<
    ICandidate | undefined
  >(undefined);

  return (
    <>
      <ActionModal
        candidate={actionModalCandidate}
        isOpen={isActionModalOpen}
        setIsOpen={setIsActionModalOpen}
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
                    checked={candidates.length === selectedCandidatesId.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCandidatesId(candidates.map((c) => c.id));
                      } else setSelectedCandidatesId([]);
                    }}
                  />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>City</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        value={item.id}
                        checked={selectedCandidatesId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedCandidatesId = [
                              ...selectedCandidatesId,
                            ];
                            _selectedCandidatesId.push(item.id);
                            setSelectedCandidatesId(_selectedCandidatesId);
                          } else {
                            const _selectedCandidatesId = [
                              ...selectedCandidatesId,
                            ];
                            _selectedCandidatesId.splice(
                              _selectedCandidatesId.indexOf(item.id),
                              1
                            );
                            setSelectedCandidatesId(_selectedCandidatesId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.surname}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setActionModalCandidate(item);
                          setIsActionModalOpen(true);
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
          count={candidates.length}
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
                setActionModalCandidate(undefined);
                setIsActionModalOpen(true);
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
export default CandidatesTable;
