import { Container, Pagination } from "@mui/material";
// layouts
import Layout from "../../adminLayout/admin/adminLayout";
// hooks
import serializeFields from "../../helpers/serialize";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
// sections
import PropTypes from "prop-types";
import Withdrawal from "../../models/withdrawal.model";
import AdminWithdrawalTable from "../../components/adminWithdrawalTable";
import dbConnect from "../../utils/dbConnect";
import adminPageAuth from "../../middleware/adminPageAuth";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
const handler = async (ctx) => {
  // await dbConnect();
  const { query } = ctx;
  const page = query.page || 1;
  const pageSize = 20;
  const withdrawalList = serializeFields(
    await Withdrawal.find({})
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .populate({ path: "userId", select: "email _id" })
      .lean(true)
  );
  const withDrawalCount = await Withdrawal.count();
  console.log("this is all withdrawals", withdrawalList);
  return {
    props: {
      withdrawalList,
      paginationCount: Math.ceil(withDrawalCount / pageSize),
    },
  };
};
export const getServerSideProps = adminPageAuth(handler);
Home.propTypes = {
  withdrawalList: PropTypes.array,
  paginationCount: PropTypes.number,
};

export default function Home({ withdrawalList, paginationCount }) {
  console.log(withdrawalList);
  const router = useRouter();
  //   const theme = useTheme();
  const { themeStretch } = useSettings();

  const pageHandler = (e, page) => {
    const currentPath = router.pathname;
    router.push({
      pathname: currentPath,
      query: {
        ...router.query,
        page,
      },
    });
  };
  return (
    <Page title="adminUser">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <AdminWithdrawalTable rows={withdrawalList} key={100 * Math.random()} />
        <div className="pt-6">
          <Pagination
            defaultPage={Number(router.query?.page) || 1}
            onChange={pageHandler}
            count={paginationCount}
            variant="outlined"
            size="large"
            shape="rounded"
          />
        </div>
      </Container>
    </Page>
  );
}
