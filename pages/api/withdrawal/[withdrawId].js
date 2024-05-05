import nc from "next-connect";
import database from "../../../middleware/database";
import {
  cancelWithdrawal,
  deleteWithdrawal,
  getWithdrawalById,
} from "../../../controllers/withdrawal.controller";

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
  .use(getWithdrawalById)
  .put(cancelWithdrawal)
  .delete(deleteWithdrawal);

export default handler;
