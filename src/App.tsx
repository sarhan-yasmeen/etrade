import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Header from "./shared/components/navigation/header";
import { theme } from "./shared/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </ThemeProvider>
      {process.env.NODE_ENV === "development" ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
    </QueryClientProvider>
  );
}

export default App;

const AppContainer = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor:
            theme.palette.mode === "dark" ? theme.palette.info["main"] : "#fff",
        }}
      >
        <Header />
        {/* Body */}
      </Box>
    </Container>
  );
};
