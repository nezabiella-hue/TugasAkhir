import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar-TEMP.jsx";
export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
