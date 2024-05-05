import { capitalCase } from "change-case";
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
import numeral from "numeral";
import Image from "next/image";
// _mock_
// import { _appInvoices } from '../../.../_mock';
// components
LeadersTable.propTypes = {
  row: PropTypes.array,
  coinMap: PropTypes.object,
  order: PropTypes.string,
};
// ----------------------------------------------------------------------

export default function LeadersTable({ row, coinMap, order }) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title={`${capitalCase(order)} List`} sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trans Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Coin</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <div className=" text-black font-bold md:text-base">
                      <p className="line-clamp-1">{row._id.slice(15, 24)}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {`${row.lastName} ${row.firstName}`}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {fDateShort(row.approvedAt)}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className=" text-black  md:text-base flex items-center gap-2">
                      <Image
                        src={coinMap[row.coin].image}
                        width={48}
                        height={48}
                        alt="coin"
                      />
                      {coinMap[row.coin].name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className=" text-black  md:text-base">
                      {numeral(
                        row.amount / coinMap[row.coin].current_price
                      ).format("0,0.000")}{" "}
                      {capitalCase(row.coin)}
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
