import { Container, Pagination } from "@mui/material";
// layouts
import Layout from "../../adminLayout/admin/adminLayout";
// hooks
import { useTheme } from "@mui/material/styles";
import serializeFields from "../../helpers/serialize";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
// sections
import PropTypes from "prop-types";
import Investment from "../../models/investment.model";
import AdminInvestmentListtable from "../../components/adminInvestmentTable";
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
  const page = query.page ?? 1;
  const pageSize = 20;
  const invtList = serializeFields(
    await Investment.find({ status: { $ne: "ended" } })
      .skip(pageSize * (parseInt(page) - 1))
      .limit(pageSize)
      .populate({ path: "userId", select: "email _id" })
      .lean(true)
  );
  const investmentCount = await Investment.find({}).count();
  console.log("this is all investments", { investmentCount, page });
  return {
    props: {
      invtList,
      paginationCount: Math.ceil(investmentCount / pageSize),
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
    <Page title="adminUser">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <AdminInvestmentListtable rows={invtList} key={100 * Math.random()} />
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
