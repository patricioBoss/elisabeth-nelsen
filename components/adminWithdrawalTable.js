import { sentenceCase } from "change-case";
// @mui
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  MenuItem,
  Divider,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fDate } from "../utils/formatTime";
import { fCurrency } from "../utils/formatNumber";
import Scrollbar from "./Scrollbar";
import PropTypes from "prop-types";
import Label from "./Label";
import axios from "axios";
import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/24/outline";
import MenuPopover from "./MenuPopover";
import { CgMoreVertical } from "react-icons/cg";
import { useRouter } from "next/router";
// _mock_
// import { _appInvoices } from '../../.../_mock';
// components
AppNewInvoice.propTypes = {
  rows: PropTypes.object,
};
// ----------------------------------------------------------------------

export default function AppNewInvoice({ rows }) {
  const theme = useTheme();
  const [currentInvt, setCurrentInvt] = useState({});
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(
    rows.map((x) => ({
      ...x,
      loading: false,
    }))
  );
  const handleDelete = (investment) => {
    setCurrentInvt(investment);
    console.log("open");
    setOpen(true);
  };
  const handleApproval = (row) => {
    const { userId, _id } = row;
    setList((x) =>
      x.map((x) => {
        return {
          ...x,
          loading: x._id === _id,
        };
      })
    );
    axios
      .get(`/api/user/${userId._id}/withdraw/${_id}`)
      .then((res) => {
        setList((x) =>
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
        setList((x) =>
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
  return (
    <Scrollbar>
      <TableContainer sx={{ minWidth: 720 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Coin</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date Requested</TableCell>
              <TableCell>Status</TableCell>
              <TableCell> </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{fCurrency(row.amount)}</TableCell>
                <TableCell>{row.userId.email}</TableCell>
                <TableCell>{fDate(row.createdAt)}</TableCell>
                <TableCell>
                  <Label
                    variant={
                      theme.palette.mode === "light" ? "ghost" : "filled"
                    }
                    color={
                      (row.status === "pending" && "warning") ||
                      (row.status === "paid" && "success") ||
                      (row.status === "cancelled" && "error")
                    }
                  >
                    {sentenceCase(row.status)}
                  </Label>
                </TableCell>
                <TableCell>
                  <MoreMenuButton
                    handleActive={handleApproval}
                    row={row}
                    handleDeleteModal={handleDelete}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
}
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
  const [loadCancel, setLoadCancel] = useState(false);
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
  const handleCancel = () => {
    setLoadCancel(true);
    axios
      .put(`/api/withdrawal/${row._id}`)
      .then((res) => {
        toast.success(res.data.message);
        refresh();
      })
      .catch((err) => {
        if (err.response) {
          toast.error("error, pls try again");
        } else {
          toast.error(err.message);
        }
        // console.log(err.response?.data.message);
      })
      .finally(() => {
        setLoadCancel(false);
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
          <LoadingButton
            onClick={() => handleActive(row)}
            loading={row.loading}
            variant="contained"
            color="success"
          >
            <span>Approve withdrawal </span>
          </LoadingButton>
        </MenuItem>
        <Divider sx={{ borderStyle: "dashed" }} />
        {row.status === "cancelled" && (
          <MenuItem sx={{ color: "error.main" }} onClick={handleDeleteModal}>
            <TrashIcon className=" mr-2 w-[20px] h-[20px]" />
            Delete
          </MenuItem>
        )}
        <MenuItem sx={{ color: "warning.main" }}>
          <LoadingButton
            color="error"
            loading={loadCancel}
            onClick={handleCancel}
          >
            Cancel
          </LoadingButton>
        </MenuItem>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------
