import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Enroll from "../pages/Enroll/Enroll";
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";
import Rank from "../pages/Rank/Rank";
import Footer from "./Footer";
import Header from "./Header";

export default function ARouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/rank" element={<Rank />}></Route>
        <Route path="/enroll" element={<Enroll />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
