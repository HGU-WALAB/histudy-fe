import { RecoilRoot, useRecoilValue } from "recoil";
import { darkModeState } from "./store/atom";
import ARouter from "./components/ARouter";
import ThemeProvider from "./theme";

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
      <ARouter />
    </ThemeProvider>
  );
}

export default App;
