import { Box, Typography, Button } from "@mui/material";
import { AuthFormProps } from "shared/types/AuthFormProps";
import AuthHeader from "../AuthHeader";
import InputController from "../InputController";

function AuthForm({
    title,
    subTitle,
    inputsArr,
    handleSubmitFunc,
}: AuthFormProps) {
    return (
        <Box width={"66.6666%"} display={"flex"} flexDirection={"column"}>
            <AuthHeader label="Sign in" subText={"Already a member?"} />
            <form className="sign-in-form" onSubmit={handleSubmitFunc}>
                <Box>
                    <Box gap={3} display={"flex"} flexDirection={"column"} mb={"100px"}>
                        <Typography fontSize={27} fontWeight={500}>
                            {title}
                        </Typography>
                        <Typography fontSize={14} color={"gray"}>
                            {subTitle}
                        </Typography>
                    </Box>
                    <Box
                        gap={3}
                        justifyContent={"space-evenly"}
                        display={"flex"}
                        flexDirection={"column"}
                        height={"50%"}
                    >
                        {inputsArr.map((input) => (
                            <InputController
                                key={input.name}
                                name={input.name}
                                label={input.label}
                                control={input.control}
                            />
                        ))}

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            sx={{ width: "50%", padding: "12px" }}
                        >
                            {"create account"}
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default AuthForm;
