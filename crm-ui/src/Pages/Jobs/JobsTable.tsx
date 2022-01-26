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

import jobs from "../../mockData/jobs";
import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import JobModal from "./JobModal";
import { IJob } from "../../mockData/interfaces/Job";
import { useTranslation } from "react-i18next";

const JobsTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedJobsId, setSelectedJobsId] = useState<number[]>([]);
  const [isJobModalOpen, setIsJobModalOpen] = useState<boolean>(false);
  const [jobModalJob, setJobModalJob] = useState<IJob | undefined>(undefined);
  const { t } = useTranslation("pages", { keyPrefix: "jobs.table" });

  return (
    <>
      <JobModal
        job={jobModalJob}
        isOpen={isJobModalOpen}
        setIsOpen={setIsJobModalOpen}
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
                    checked={jobs.length === selectedJobsId.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedJobsId(jobs.map((c) => c.id));
                      } else setSelectedJobsId([]);
                    }}
                  />
                </TableCell>
                <TableCell>{t("id")}</TableCell>
                <TableCell>{t("name")}</TableCell>
                <TableCell>{t("experience")}</TableCell>
                <TableCell>{t("salary-expectation")}</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        value={item.id}
                        checked={selectedJobsId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedJobsId = [...selectedJobsId];
                            _selectedJobsId.push(item.id);
                            setSelectedJobsId(_selectedJobsId);
                          } else {
                            const _selectedJobsId = [...selectedJobsId];
                            _selectedJobsId.splice(
                              _selectedJobsId.indexOf(item.id),
                              1
                            );
                            setSelectedJobsId(_selectedJobsId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.experience}</TableCell>
                    <TableCell>{item.salaryExpectation}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setJobModalJob(item);
                          setIsJobModalOpen(true);
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
          count={jobs.length}
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
                setJobModalJob(undefined);
                setIsJobModalOpen(true);
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
    </>
  );
};
export default JobsTable;
