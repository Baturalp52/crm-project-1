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

import hrmembers from "../../mockData/hrmembers";
import { Add, BorderColor, DeleteForeverRounded } from "@mui/icons-material";
import HRMemberModal from "./HRMemberModal";
import { IHRMember } from "../../mockData/interfaces/HRMember";
import { useTranslation } from "react-i18next";

const HRMembersTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowPerPage, setRowPerPage] = useState<number>(10);
  const [selectedHRMembersId, setSelectedHRMembersId] = useState<number[]>([]);
  const [isHRMemberModalOpen, setIsHRMemberModalOpen] =
    useState<boolean>(false);
  const [hrMemberModalrHRMember, setHRMemberModalHRMember] = useState<
    IHRMember | undefined
  >(undefined);

  const { t } = useTranslation("pages", { keyPrefix: "hrMembers.table" });

  return (
    <>
      <HRMemberModal
        hrmember={hrMemberModalrHRMember}
        isOpen={isHRMemberModalOpen}
        setIsOpen={setIsHRMemberModalOpen}
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
                    checked={hrmembers.length === selectedHRMembersId.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedHRMembersId(hrmembers.map((c) => c.id));
                      } else setSelectedHRMembersId([]);
                    }}
                  />
                </TableCell>
                <TableCell>{t("id")}</TableCell>
                <TableCell>{t("name")}</TableCell>
                <TableCell>{t("surname")}</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {hrmembers
                .slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        value={item.id}
                        checked={selectedHRMembersId.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const _selectedHRMembersId = [
                              ...selectedHRMembersId,
                            ];
                            _selectedHRMembersId.push(item.id);
                            setSelectedHRMembersId(_selectedHRMembersId);
                          } else {
                            const _selectedHRMembersId = [
                              ...selectedHRMembersId,
                            ];
                            _selectedHRMembersId.splice(
                              _selectedHRMembersId.indexOf(item.id),
                              1
                            );
                            setSelectedHRMembersId(_selectedHRMembersId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.surname}</TableCell>
                    <TableCell>
                      <Button
                        sx={{ border: "none !important" }}
                        color="warning"
                        variant="contained"
                        onClick={() => {
                          setHRMemberModalHRMember(item);
                          setIsHRMemberModalOpen(true);
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
          count={hrmembers.length}
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
                setHRMemberModalHRMember(undefined);
                setIsHRMemberModalOpen(true);
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
export default HRMembersTable;
