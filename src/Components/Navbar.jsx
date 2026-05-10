import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-cyan-500/20 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-cyan-400 text-2xl font-bold tracking-wider">
          UAV INTEL
        </h1>

        <div className="flex gap-6 text-gray-300">

          <Link
            to="/academy"
            className="hover:text-cyan-400 transition"
          >
            Academy
          </Link>

          <Link
            to="/labs"
            className="hover:text-cyan-400 transition"
          >
            Labs
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
