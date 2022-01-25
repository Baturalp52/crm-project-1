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

import tasks from "../../mockData/tasks";
import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import TaskModal from "./TaskModal";
import { ITask } from "../../mockData/interfaces/Task";
import { getChipOfSituation } from "./helpers";

const TasksTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedTasksId, setSelectedTasksId] = useState<number[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [taskModalTask, setTaskModalTask] = useState<ITask | undefined>(
    undefined
  );

  return (
    <>
      <TaskModal
        task={taskModalTask}
        isOpen={isTaskModalOpen}
        setIsOpen={setIsTaskModalOpen}
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
                    checked={tasks.length === selectedTasksId.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTasksId(tasks.map((c) => c.id));
                      } else setSelectedTasksId([]);
                    }}
                  />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Situation</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        value={item.id}
                        checked={selectedTasksId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedTasksId = [...selectedTasksId];
                            _selectedTasksId.push(item.id);
                            setSelectedTasksId(_selectedTasksId);
                          } else {
                            const _selectedTasksId = [...selectedTasksId];
                            _selectedTasksId.splice(
                              _selectedTasksId.indexOf(item.id),
                              1
                            );
                            setSelectedTasksId(_selectedTasksId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{getChipOfSituation(item.situation)}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setTaskModalTask(item);
                          setIsTaskModalOpen(true);
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
          count={tasks.length}
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
                setTaskModalTask(undefined);
                setIsTaskModalOpen(true);
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
export default TasksTable;
