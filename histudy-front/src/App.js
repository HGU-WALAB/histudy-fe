import { RecoilRoot, useRecoilValue } from "recoil";
import { darkModeState } from "./store/atom";
import ARouter from "./components/ARouter";
import ThemeProvider from "./theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

function App() {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <ARouter />
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
