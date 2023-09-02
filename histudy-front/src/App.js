import { RecoilRoot, useRecoilValue } from "recoil";
import { darkModeState } from "./store/atom";
import ARouter from "./components/ARouter";
import ThemeProvider from "./theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 만으로도 refetch를 발생시키는 조건 해제
    },
  },
});

function App() {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <QueryClientProvider client={queryClient}>
          <ARouter />
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
