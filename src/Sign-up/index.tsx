import { Box } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthenticationLayout from "shared/AuthLayout";
import { useAuth } from "shared/AuthProvider";
import AuthForm from "shared/components/AuthForm";

const schema = new yup.ObjectSchema({
    password: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
});

function SignUpPage() {
    const auth = useAuth()!;

    const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const inputsArr = [
        { name: "name", label: "User Name", control: control },
        { name: "email", label: "Email", control: control },
        { name: "password", label: "password ", control: control },
    ];

    return (
        <Box className="sign-up-body" sx={{ display: "flex", width: "100%" }}>
            {/* sidebar section */}
            <AuthenticationLayout className='sign-up-sidebar' />

            {/* sign-up form section */}
            <AuthForm
                handleSubmitFunc={handleSubmit(async (data: any) => {
                    await auth.register(data);
                })}
                ButtonText="Create Account"
                inputsArr={inputsArr}
                label="Sign in"
                subTitle="Enter your detail below"
                title="I'm New Here"
                subText=" Already a member?"

            />
        </Box>
    );
}

export default SignUpPage;
