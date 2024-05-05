import { Container, Typography, Grid } from "@mui/material";
// layouts
import Layout from "../../../layouts";
// hooks
import useSettings from "../../../hooks/useSettings";
// components
import Page from "../../../components/Page";
import serializeFields from "../../../helpers/serialize";
import PropTypes from "prop-types";
import pageAuth from "../../../middleware/pageAuthAccess";
import Image from "next/image";
import CopyClipboard from "../../../components/CopyToClipboard";
import isClient from "../../../helpers/isClient";
import AffiliateUserTable from "../../../components/AffiliateUserTable";
import Transaction from "../../../models/transaction.model";
import ReferralList from "../../../components/ReferralList";
// ----------------------------------------------------------------------
async function handler({ req }) {
  const user = serializeFields(req.user);
  const referralCommissions = serializeFields(
    await Transaction.find({ userId: user._id, type: "referral" })
      .populate({
        path: "userId",
        select: "email _id",
      })
      .sort({ createdAt: -1 })
      .lean()
  );
  console.log("referralCommissions list is", referralCommissions);
  return {
    props: {
      user,
      referralCommissions,
      fallback: {
        [`/api/user/${user._id}`]: user,
      },
    },
  };
  // return {
  //   props: { user },
  // };
}
Referral.propTypes = {
  user: PropTypes.object,
  referralCommissions: PropTypes.array,
};
export const getServerSideProps = pageAuth(handler);
Referral.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Referral({ user, referralCommissions }) {
  const { themeStretch } = useSettings();

  return (
    <Page title="All Referral">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4">Referral Earnings</Typography>
        <div className=" w-full relative mb-10">
          <Image src={"/img/referral-banner.png"} width={1524} height={329} />
        </div>
        <div className=" max-w-lg">
          <h4 className=" text-[24px] font-medium">Copy Referral Link</h4>
          <CopyClipboard
            value={`${isClient() ? window.location.hostname : ""}?ref=${
              user._id
            }`}
            size="small"
            disabled
          />
        </div>
        <ReferralList row={referralCommissions} />
      </Container>
    </Page>
  );
}
