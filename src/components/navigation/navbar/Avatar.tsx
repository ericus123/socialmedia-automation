import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import { useHamburger } from "../../../app/hooks/useHamburger";
import { colors } from "../../../constants/colors";
import { dogAvatar } from "../../../constants/images";
import { useSignin } from "../../../hooks/useAuth";

const Avatar = ({ sx, imageSx }: { sx?: SxProps; imageSx?: SxProps }) => {
  const { member } = useSignin();

  const { controlDashboardDrawer } = useHamburger();

  const handleClick = () => {
    controlDashboardDrawer(true);
  };

  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        position: "relative",
        background: colors.purple5,
        cursor: "pointer",
        ...sx
      }}
      component="div"
      onClick={handleClick}>
      <Box
        sx={{
          position: "relative",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          overflow: "hidden",
          ...imageSx
        }}>
        {member?.avatar != undefined ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${member?.avatar}`}
            alt=""
            fill
          />
        ) : (
          <Image
            src={dogAvatar}
            alt=""
            fill
            style={{
              padding: "15%"
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Avatar;
