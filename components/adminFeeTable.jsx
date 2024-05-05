import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Label from "./Label";
import { fDate } from "../utils/formatTime";
import { fCurrency } from "../utils/formatNumber";
import { useTheme } from "@mui/system";
import { sentenceCase } from "change-case";
import { Divider, IconButton, MenuItem } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import axios from "axios";
import Scrollbar from "./Scrollbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CgMoreVertical } from "react-icons/cg";
import MenuPopover from "./MenuPopover";
import { useRouter } from "next/router";
import DeleteFeeModal from "./DeleteFeeModal";

export default function AdminFeeTable({ rows }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [currentInvt, setCurrentInvt] = useState({});

  const [invtList, setInvList] = useState(
    rows.map((x) => ({
      ...x,
      loading: false,
    }))
  );
  const headCells = [
    "ID",
    "Date",
    "Coin",
    "Procedure",
    "Transaction ID",
    "Amount",
    "Username",
    "email",
    "status",
    "",
    "",
  ];

  const refresh = () => {
    const currentPath = router.pathname;
    router.push({
      pathname: currentPath,
      query: {
        ...router.query,
      },
    });
  };
  const theme = useTheme();

  const handleActive = (row) => {
    const { _id, userId } = row;
    setInvList((x) =>
      x.map((x) => {
        return {
          ...x,
          loading: x._id === _id,
        };
      })
    );
    axios
      .post(`/api/user/${userId._id}/deposit/${_id}/`)
      .then((res) => {
        setInvList((x) =>
          x.map((x) => {
            return {
              ...x,
              loading: false,
            };
          })
        );
        toast.success(res.data.message);
        refresh();
      })
      .catch((err) => {
        // console.log(err.response?.data.message);
        setInvList((x) =>
          x.map((x) => {
            return {
              ...x,
              loading: false,
            };
          })
        );
        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
  };

  const handleDelete = (deposit) => {
    setCurrentInvt(deposit);
    setOpen(true);
  };

  return (
    <>
      {" "}
      <DeleteFeeModal open={open} setOpen={setOpen} deposit={currentInvt} />
      <Scrollbar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headCells.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!!invtList.length &&
                invtList.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row._id.slice(0, 6)}</TableCell>
                    <TableCell align="left">{fDate(row.createdAt)}</TableCell>
                    <TableCell align="left">{row.coin}</TableCell>
                    <TableCell align="left">{row.reason}</TableCell>
                    <TableCell align="left">{row.transactionId}</TableCell>
                    <TableCell align="left">{fCurrency(row.amount)}</TableCell>
                    <TableCell align="left">{row.userId.userName}</TableCell>
                    <TableCell align="left">{row.userId.email}</TableCell>
                    <TableCell align="left">
                      <Label
                        variant={
                          theme.palette.mode === "light" ? "ghost" : "filled"
                        }
                        color={
                          (row.status === "pending" && "warning") ||
                          // (row.status === "paused" && "default") ||
                          "success"
                        }
                      >
                        {sentenceCase(row.status)}
                      </Label>
                    </TableCell>
                    <TableCell align="center">
                      <MoreMenuButton
                        row={row}
                        handleActive={handleActive}
                        handleDeleteModal={() => handleDelete(row)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </>
  );
}

AdminFeeTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MoreMenuButton({ row, handleActive, handleDeleteModal }) {
  const [open, setOpen] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();
  const refresh = () => {
    const currentPath = router.pathname;
    router.push({
      pathname: currentPath,
      query: {
        ...router.query,
      },
    });
  };
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <CgMoreVertical width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <MenuItem>
          <LoadingButton
            onClick={() => handleActive(row)}
            loading={row.loading}
            variant="contained"
            color="success"
          >
            <span>Approve Fee</span>
          </LoadingButton>
        </MenuItem>
        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem sx={{ color: "error.main" }} onClick={handleDeleteModal}>
          <TrashIcon className=" mr-2 w-[20px] h-[20px]" />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
