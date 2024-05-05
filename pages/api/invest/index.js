import nc from "next-connect";
import {
  getInvestments,
  invest,
  approveInvestment,
  deleteInvt,
  attachInvestment,
  getAllInvestments,
} from "../../../controllers/investment.controller";

const handler = nc({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("internal server error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("route is not found");
  },
  attachParams: true,
}).use();

const investRoute = nc()
  .use(attachInvestment)
  .get("/", getAllInvestments)
  .post("/new", invest)
  .post("/approve/:investmentId", approveInvestment)
  .delete("/:investmentId", deleteInvt);

export default handler.use("/", investRoute);
