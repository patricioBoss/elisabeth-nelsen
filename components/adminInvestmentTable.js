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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton, MenuItem, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import plans from "../helpers/plans";
import { toast } from "react-toastify";
import axios from "axios";
import Scrollbar from "./Scrollbar";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CgMoreVertical } from "react-icons/cg";
import MenuPopover from "./MenuPopover";
import DeleteInvestmentModal from "./DeleteInvestmentModal";
import { useRouter } from "next/router";

export default function InvestmentTable({ rows }) {
  const [open, setOpen] = useState(false);
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
    "Transaction ID",
    "Capital",
    "email",
    "Earning",
    "daily count",
    "status",
    "",
    "",
  ];
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
      .post(`/api/user/${userId._id}/invest/${_id}/approve`)
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

  const handleDelete = (investment) => {
    setCurrentInvt(investment);
    setOpen(true);
  };
  // const headCells = [
  //   'ID',
  //   'Date',
  //   'Coin',
  //   'Transaction ID',
  //   'Capital',
  //   'email',
  //   'Earning',
  //   'daily count',
  //   'status',
  //   '',
  //   '',
  // ];

  return (
    <>
      {" "}
      <DeleteInvestmentModal
        open={open}
        setOpen={setOpen}
        investment={currentInvt}
      />
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
                    <TableCell align="left">{row.stock}</TableCell>
                    <TableCell align="left">{row.transactionId}</TableCell>
                    <TableCell align="left">{row.capital}</TableCell>
                    <TableCell align="left">{row.userId.email}</TableCell>

                    <TableCell align="left">
                      {plans[row.planId]
                        ? fCurrency(
                            (plans[row.planId].interest / 100) * row.capital
                          )
                        : "No plan yet"}
                    </TableCell>
                    <TableCell align="left">{row.daysCount}</TableCell>
                    <TableCell align="left">
                      <Label
                        variant={
                          theme.palette.mode === "light" ? "ghost" : "filled"
                        }
                        color={
                          (row.status === "pending" && "warning") ||
                          (row.status === "paused" && "default") ||
                          (row.status === "ended" && "error") ||
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

InvestmentTable.propTypes = {
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

AddActive.propTypes = {
  investment: PropTypes.array.isRequired,
  reload: PropTypes.func.isRequired,
};
function AddActive({ investment, reload }) {
  const { _id, userId } = investment;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    setLoading(true);
    axios
      .post(`/api/user/${userId._id}/invest/${_id}/daily`, { daily: value })
      .then((res) => {
        setLoading(false);
        reload();
        toast.success(res.data.message);
      })
      .catch((err) => {
        // console.log(err.response?.data.message);
        setLoading(false);
        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Daily</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={4} variant="subtitle2">
            Note: This is for only active investments
          </Typography>
          <TextField onChange={handleChange} value={value} type={"number"} />
          <LoadingButton
            onClick={handleAdd}
            loading={loading}
            variant="contained"
          >
            <span>Add to daily Rio</span>
          </LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}

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
  const handlePauseInvestment = (row, status) => {
    setIsLoading(true);
    axios
      .put(`/api/invest/${row._id}/`, { status })
      .then((res) => {
        refresh();
        setIsLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        // console.log(err.response?.data.message);
        setIsLoading(false);
        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
      });
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
          {row.status === "pending" ? (
            <LoadingButton
              onClick={() => handleActive(row)}
              loading={row.loading}
              variant="contained"
              color="success"
            >
              <span>Approve investment</span>
            </LoadingButton>
          ) : row.status === "active" ? (
            <LoadingButton
              onClick={() => handlePauseInvestment(row, "paused")}
              loading={isloading}
            >
              <span>Pause Investment</span>
            </LoadingButton>
          ) : row.status === "paused" ? (
            <LoadingButton
              onClick={() => handlePauseInvestment(row, "active")}
              loading={isloading}
            >
              <span>Resume Investment</span>
            </LoadingButton>
          ) : (
            <></>
          )}
        </MenuItem>
        <MenuItem>
          <AddActive investment={row} reload={refresh} />
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
