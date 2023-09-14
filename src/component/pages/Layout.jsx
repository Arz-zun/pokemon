import React from "react";
import { pokeapi } from "../assets";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const params = useLocation();
  const { pathname } = params;
  return (
    <main>
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center flex-col mt-5">
          <img src={pokeapi} />
          <div className="flex gap-5">
            <Link
              className={`bg-blue-500 ${
                pathname == "/" ? "bg-yellow-200" : "bg-blue-500"
              } hover:bg-yellow-200 px-3 py-1 rounded-md text-white  `}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`bg-blue-500 ${
                pathname == "/myteam" ? "bg-yellow-200" : "bg-blue-500"
              } hover:bg-yellow-200 px-3 py-1 rounded-md text-white  `}
              to="/myteam"
            >
              My team
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
