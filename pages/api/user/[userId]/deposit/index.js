import nc from "next-connect";
import {
  attachProfileById,
  checkUserVerification,
} from "../../../../../controllers/user.controller";
import database from "../../../../../middleware/database";
import { deposit } from "../../../../../controllers/deposit.controller";

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("internal server error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("route is not found");
  },
  attachParams: true,
})
  .use(database)
  .use(attachProfileById)
  .post(deposit);

// const investRoute = nc().get(getInvestments)post('/approve/:investmentId', approveInvestment);

export default handler;
