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
import User from "../../../models/user.model";
// ----------------------------------------------------------------------
async function handler({ req }) {
  const user = serializeFields(req.user);
  const affiliateUsers = serializeFields(
    await User.find({ referer: user._id }).sort({ createdAt: -1 }).lean()
  );
  console.log("affiate user list is", affiliateUsers);
  return {
    props: {
      user,
      affiliateUsers,
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
  affiliateUsers: PropTypes.array,
};
export const getServerSideProps = pageAuth(handler);
Referral.getLayout = function getLayout(page) {
  return <Layout user={page.props?.user}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Referral({ user, affiliateUsers }) {
  const { themeStretch } = useSettings();

  return (
    <Page title="All Referral">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h4">Explore, Refer And Earn.</Typography>
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
        <AffiliateUserTable row={affiliateUsers} />
      </Container>
    </Page>
  );
}
