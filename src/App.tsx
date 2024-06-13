import {
  Container,
  CssBaseline,
  FormControlLabel,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import AppRoutes from "./app-routes";
import {
  darkTheme,
  lightTheme,
} from "./theme/theme";

export default function App() {
  const [
    currentTheme,
    setCurrentTheme,
  ] = useState(darkTheme);

  const handleThemeChange = (event: {
    target: { checked: any };
  }) => {
    setCurrentTheme(
      event.target.checked
        ? darkTheme
        : lightTheme
    );
  };
  return (
    <>
      <ThemeProvider
        theme={currentTheme}
      >
        <CssBaseline />
        <Container>
          <FormControlLabel
            control={
              <Switch
                checked={
                  currentTheme ===
                  darkTheme
                }
                onChange={
                  handleThemeChange
                }
                name="colorModeSwitch"
              />
            }
            label={
              currentTheme === darkTheme
                ? "Dark Mode"
                : "Light Mode"
            }
          />
          <AppRoutes />
        </Container>
      </ThemeProvider>
    </>
  );
}
