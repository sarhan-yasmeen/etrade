import { Box } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthenticationLayout from "shared/AuthLayout";
import { useAuth } from "shared/AuthProvider";
import AuthForm from "shared/components/AuthForm";

const schema = new yup.ObjectSchema({
  password: yup.string().required(),
  email: yup.string().email().required(),
});

function SignInPage() {
  const auth = useAuth()!;

  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const inputsArr = [
    { name: "email", label: "Email", control: control },
    { name: "password", label: "password ", control: control },
  ];

  return (
    <Box className="sign-in-body" sx={{ display: "flex", width: "100%" }}>
      {/* sidebar section */}
      <AuthenticationLayout className="sign-in-sidebar" />
      {/* sign-in form section */}
      <AuthForm
        handleSubmitFunc={handleSubmit((data: any) => {

          try {

            auth.login(data);
          }
          catch (err: any) {
            //
          }
        })} subText="Not a member?"
        ButtonText="Sign in"
        label="Sign Up Now"
        inputsArr={inputsArr}
        subTitle="Enter your detail below"
        title="Sign in to eTrade."
      />

    </Box>
  );
}

export default SignInPage;
