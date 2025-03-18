import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuBrainCircuit } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent text-gray-900 py-4 px-6 flex justify-between items-center ">
      <Link className="cursor-pointer" to="/">
        <div className="flex items-center">
          <LuBrainCircuit className="text-3xl" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GistIQ
          </h1>
        </div>
      </Link>

      <Button
        variant="outline"
        className="flex items-center gap-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
        onClick={() => window.open("https://github.com/isayanpal/gistIQ", "_blank")}
      >
        <FaGithub className="h-5 w-5" />
        Github
      </Button>
    </nav>
  );
}
