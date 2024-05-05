import { sentenceCase } from "change-case";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer,
} from "@mui/material";
// utils
import { fDateTime } from "../utils/formatTime";
import Scrollbar from "./Scrollbar";
import PropTypes from "prop-types";
import { fCurrency } from "../utils/formatNumber";
// _mock_
// import { _appInvoices } from '../../.../_mock';
// components
ReferralList.propTypes = {
  row: PropTypes.array,
};
// ----------------------------------------------------------------------

export default function ReferralList({ row }) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Referral List" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Commission</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row) => (
                <TableRow key={row.userId._id}>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {row.userId.email}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {fDateTime(row.createdAt)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {fCurrency(row.amount)}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------
