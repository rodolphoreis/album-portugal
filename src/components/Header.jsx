import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";

const defaultTheme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Portugal
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
};

export default Header;
