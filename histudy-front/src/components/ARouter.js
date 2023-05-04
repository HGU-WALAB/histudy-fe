import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";
import Footer from "./Footer";
import Header from "./Header";

export default function ARouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
