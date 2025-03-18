import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}