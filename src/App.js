import Nav from "./components/Nav";
import Banner from "./components/Banner";
import "./App.css";

import LoginPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
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
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path=":movieId" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
