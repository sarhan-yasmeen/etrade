import {
  createBrowserRouter,
} from "react-router-dom";
import SignInPage from "Sign-in";
import SignUpPage from "Sign-up";

export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,


  },
]);
