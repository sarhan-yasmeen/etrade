import React from 'react';
import { Box, Typography } from '@mui/material';
import './AuthLayout.css'
interface AuthenticationLayoutProps {
  className: string
}
const LogoUrl =
  "https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png";

const AuthenticationLayout: React.FC<AuthenticationLayoutProps> = ({ className }) => {
  return (
    <Box className={className}>
      <Box width={"100%"} paddingLeft={10} position={"absolute"} top={"50px"}>
        <img src={LogoUrl} alt="logo" width={"150px"} />
        <Typography
          width={"20%"}
          fontSize={29}
          paddingTop={10}
          fontWeight={600}
        >
          We Offer The Best Products
        </Typography>
      </Box>

    </Box >
  );
};

export default AuthenticationLayout;
