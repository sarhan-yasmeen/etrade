import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
interface Props {
  label: string;
  subText: string;
}
function AuthHeader({ label, subText }: Props) {
  return (
    <Box
      width={"100%"}
      height="20vh"
      display="flex"
      bgcolor={"white"}
      alignItems={"center"}
      justifyContent={"end"}
      paddingRight={"80px"}
    >
      <Typography marginRight={3} variant="body2">
        {subText}
      </Typography>
      <Button
        sx={{
          padding: "17px",
          width: "150px",
          borderRadius: '7%',
          color: "white",
          height: "60px",
          transition: "transform 0.5s ease",
          ":hover": {
            paddingX: "20px",
            transform: "scale(1.05)",
            animationTimingFunction: "ease-in-out",
          },
        }}
        variant="contained"
        color="primary"
      >
        {label}
      </Button>
    </Box>
  );
}

export default AuthHeader;
