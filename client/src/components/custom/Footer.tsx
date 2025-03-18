import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900 px-6 flex flex-col md:flex-row justify-between items-center shadow-t">
      <p className="text-sm">&copy; {new Date().getFullYear()} GistIQ. All rights reserved.</p>
      <p className="text-sm flex items-center gap-1">
        Made with <FaHeart className="text-red-500" /> by <span className="font-semibold">isayanpal</span>
      </p>
    </footer>
  );
}
