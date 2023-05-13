import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Enroll from "../pages/Enroll/Enroll";
import Group from "../pages/Group/Group";
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";
import Rank from "../pages/Rank/Rank";
import Report from "../pages/Report/Report";
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
        <Route path="/group" element={<Group />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
