import { Container, Pagination } from "@mui/material";
// layouts
import Layout from "../../adminLayout/admin/adminLayout";
import serializeFields from "../../helpers/serialize";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
// sections
import PropTypes from "prop-types";
import AdminDepositListtable from "../../components/adminFeeTable.jsx";
import adminPageAuth from "../../middleware/adminPageAuth";
import { useRouter } from "next/router";
import Deposit from "../../models/deposit.model";

// ----------------------------------------------------------------------

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------
const handler = async (ctx) => {
  // await dbConnect();
  const { query } = ctx;
  const page = query.page ?? 1;
  const pageSize = 20;
  const invtList = serializeFields(
    await Deposit.find({ status: { $ne: "ended" } })
      .skip(pageSize * (parseInt(page) - 1))
      .limit(pageSize)
      .populate({ path: "userId", select: "email _id" })
      .lean(true)
  );
  const depositCount = await Deposit.find({}).count();
  console.log("this is all investments", { depositCount, page });
  return {
    props: {
      invtList,
      paginationCount: Math.ceil(depositCount / pageSize),
    },
  };
};

export const getServerSideProps = adminPageAuth(handler);
Home.propTypes = {
  invtList: PropTypes.array,
};

export default function Home({ invtList, paginationCount }) {
  const router = useRouter();
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
    <Page title="adminFee">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <AdminDepositListtable rows={invtList} key={100 * Math.random()} />
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
