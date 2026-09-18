import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div className="site-frame">
      <NavBar />
      <Outlet />
      <footer className="site-footer">
        <div>
          <span className="brand-mark">MJ <i className="brand-pulse" /></span>
          <p>Software for thoughtful teams.</p>
        </div>
        <p>Designed and engineered by Mrityunjay Shrivastava.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
