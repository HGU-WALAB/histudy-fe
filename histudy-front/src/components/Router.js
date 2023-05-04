import { BrowserRouter, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";
import Footer from "./Footer";
import Header from "./Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Router path="/" element={<Main />}></Router>
        <Router path="/post" element={<Post />}></Router>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
