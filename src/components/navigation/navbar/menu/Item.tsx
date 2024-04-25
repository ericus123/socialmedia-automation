import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { colors } from "../../../../constants/colors";
// import { pawActive } from "../../../../constants/images";
import { MenuLink } from "../../../../constants/menuLinks";
import { useHamburger } from "../../../../hooks/useHamburger";

const MenuItem = ({ item }: { item: MenuLink }) => {
  const { handleClose } = useHamburger();

  const path = usePathname();
  const isActive = item.goto === path;

  return (
    <Box>
      <Link
        href={item.goto}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={handleClose}>
        <Typography
          component={"p"}
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "regular",
            color: isActive ? colors.purple5 : colors.purple9,
            transition: ".2s ease-in-out",
            "&:hover": {
              transition: ".2s ease-in-out",
              color: colors.purple5
            }
          }}>
          {item.name}
        </Typography>
        {/* {isActive ? (
          <Image src={pawActive} alt="" width={10} height={10} />
        ) : null} */}
      </Link>
    </Box>
  );
};

export default MenuItem;
