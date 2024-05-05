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
import { fDateShort } from "../utils/formatTime";
import Scrollbar from "./Scrollbar";
import PropTypes from "prop-types";
// _mock_
// import { _appInvoices } from '../../.../_mock';
// components
AffiliateUserTable.propTypes = {
  row: PropTypes.array,
};
// ----------------------------------------------------------------------

export default function AffiliateUserTable({ row }) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Referral List" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>date Joined</TableCell>
                <TableCell>Verification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {`${row.lastName} ${row.firstName}`}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {fDateShort(row.createdAt)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {row.isVerified ? "Verified" : "UnVerified"}
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
