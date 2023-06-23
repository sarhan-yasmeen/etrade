import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./sign-in.css";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import { useAuth } from "shared/AuthProvider";
import AuthForm from "shared/components/AuthForm";
const LogoUrl =
    "https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png";

// const schema = new yup.ObjectSchema({
//     user_name: yup.string().required(),
//     name: yup.string().required(),
//     email: yup.string().email().required(),
// });

function SignInPage() {
    const auth = useAuth();

    const { control, handleSubmit } = useForm();

    const inputsArr = [
        { name: "user_name", label: "User Name", control: control },
        { name: "email", label: "Email", control: control },
        { name: "password", label: "password ", control: control },
    ];

    return (
        <Box className="sign-in-body" sx={{ display: "flex", width: "100%" }}>
            {/* sidebar section */}
            <Box className="sidebar-section" bgcolor="primary">
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
            </Box>

            {/* sign-in form section */}
            <AuthForm
                handleSubmitFunc={handleSubmit((data: any) => {
                    auth.login(data);


                })}
                inputsArr={inputsArr}
                subTitle="Enter your detail below"
                title="I'm New Here"
            />
        </Box>
    );
}

export default SignInPage;
