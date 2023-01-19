import Nav from "./components/Nav";
import Banner from "./components/Banner";
import "./App.css";
import styled from "styled-components";
import Category from "./components/Category";
import Row from "./components/Row";
import requests from "./api/request";
import LoginPage from "./pages/DetailPage";
import { Route, Routes, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
