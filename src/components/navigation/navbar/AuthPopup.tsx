import { Box } from "@mui/material";
import Avatar from "./Avatar";

export enum RoleName {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  DEFAULT = "DEFAULT"
}

export type TokenData = {
  sub: string;
  email: string;
  isVerified: boolean;
  role?: RoleName;
  firstName: string;
  lastName: string;
  avatar?: string;
};

const AuthPopup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem"
      }}>
      <Avatar />
    </Box>
  );
};

export default AuthPopup;
