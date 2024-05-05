import { withSessionSsr } from "./sessionSSR";
import User from "../models/user.model";
import dbConnect from "../utils/dbConnect";

function adminPageAuth(handler) {
  return withSessionSsr(async (context) => {
    if (context.req?.session?.user) {
      await dbConnect();
      const userId = context.req.session.user._id;
      const user = await User.findById(userId)
        .select(["-password", "-createdAt", "-updatedAt"])
        .lean();
      if (user.role !== "Admin") {
        return {
          redirect: {
            permanent: false,
            destination: "/admin/login",
          },
          props: {},
        };
      } else {
        context.req.user = user;
        return handler(context);
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/admin/login",
        },
        props: {},
      };
    }
  });
}
export default adminPageAuth;
