import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../../../constants/images";

const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "154px",
        height: "58px",
        "@media (max-width: 991px)": {
          height: "50px"
        }
      }}>
      <Link
        href={"/"}
        style={{
          textDecoration: "none"
        }}>
        <Image src={logo} alt="" fill />
      </Link>
    </Box>
  );
};

export default Logo;
