import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from 'react-router-dom';
import { router } from 'Router';
import { AuthProvider } from 'shared/AuthProvider';
import { theme } from "./shared/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <React.StrictMode>
      <AuthProvider >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
            {process.env.NODE_ENV === "development" ? (
              <ReactQueryDevtools initialIsOpen={false} />
            ) : null}
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
