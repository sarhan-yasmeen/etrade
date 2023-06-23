
import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import SignInPage from "Sign-in";
import { theme } from "./shared/theme";
// import Header from "shared/components/navigation/header";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
  ]); return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <AppContainer /> */}
          <RouterProvider router={router} />
          {process.env.NODE_ENV === "development" ? (
            <ReactQueryDevtools initialIsOpen={false} />
          ) : null}
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;

// const AppContainer = () => {
//   const theme = useTheme();
//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           bgcolor:
//             theme.palette.mode === "dark" ? theme.palette.info["main"] : "#fff",
//         }}
//       >

//         <Header />        {/* Body */}
//       </Box>
//     </Container>
//   );
// };
