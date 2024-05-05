import PropTypes from "prop-types";
import dashboardImg from "../../../public/img/dashboard-image.png";
import dashboardImg2 from "../../../public/img/dashboard-image-2.png";
// @mui
import { styled } from "@mui/material/styles";
import { Typography, Button, Card, CardContent, Box } from "@mui/material";
import { SeoIllustration } from "../../../assets";
import { useRouter } from "next/router";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    // justifyContent: "space-between",
  },
}));
const MyImage = styled(Image)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    // justifyContent: "space-between",
  },
}));
const MyImage2 = styled(Image)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    width: "90%",
    // justifyContent: "space-between",
  },
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string,
};

export default function AppWelcome({ displayName }) {
  const router = useRouter();
  return (
    <RootStyle>
      <CardContent
        className=" flex-1"
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: "grey.800",
        }}
      >
        <Typography gutterBottom variant="h4">
          Welcome ,
          <br /> {!displayName ? "..." : displayName}!
        </Typography>

        <Typography
          variant="body2"
          sx={{ pb: { xs: 3, xl: 3 }, maxWidth: 480, mx: "auto" }}
        >
          {`Grow your funds with a diverse array of the best portfolios. We guarantee risk-free trading.`}
        </Typography>

        <Button
          variant="contained"
          onClick={() => router.push("/dashboard/portfolio")}
        >
          View Stocks
        </Button>
      </CardContent>
      <Box
        sx={{
          width: { xs: "100%", md: "270px" },
          height: { xs: "190px", md: "100%" },
        }}
        className=" relative flex md:h-full "
      >
        <MyImage
          src={dashboardImg}
          className=" absolute left-0 bottom-0"
          alt="dashboard-illustration"
        />
        <MyImage2
          src={dashboardImg2}
          className=" absolute bottom-0 left-1/2 -translate-x-1/2"
          alt="dashboard-illustration"
        />
      </Box>

      {/* <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' },
        }}
      /> */}
    </RootStyle>
  );
}
