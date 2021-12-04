import React from "react";
import GitHubLogo from "../../assets/icons/png/GitHub_Logo_White.png";

function ResponsiveSideBar() {
  const CurrentYear = new Date().getFullYear();
  const pages = ["red", "blue", "yellow", "purple"];
  return (
    <div id="container-navigation" className="drawer drawer-mobile h-screen ">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <div className="navbar lg:justify-end justify-between h-16 bg-gray-50 drop-shadow-lg shadow-sm ">
          <div id="mobile-drawer" className="flex-none lg:hidden">
            <label
              for="drawer-menu"
              className="btn btn-md btn-square drawer-button  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none">
            <a
              className="btn btn-sm mr-4 rounded-md shadow-sm bg-gray-900"
              href="https://github.com/MVDHaeze"
            >
              <img
                src={GitHubLogo}
                width="48"
                height="48"
                alt="Redirection to Github Profile"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Side Menu */}
      <div className="drawer-side">
        <label for="drawer-menu" className="drawer-overlay z-10"></label>
        <ul className="menu overflow-y-auto w-80 bg-gray-800 text-gray-50 ">
          <button className="bg-gray-900 w-full h-16 mb-2 shadow-lg font-semibold text-lg uppercase text-gray-50">
            Climbing
          </button>
          <li>
            {pages.map((page) => (
              <button
                key={page}
                className="justify-start p-3 ml-2 mt-3 mr-2 w-auto h-12 text-left text-sm font-semibold text-gray-200 bg-transparent rounded-lg hover:text-white focus:text-white hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:shadow-outline capitalize"
                href={`#${page}`}
              >
                {page}
              </button>
            ))}
          </li>
          <p className="text-center text-gray-400 text-sm w-full p-1 mb-2 align-bottom justify-end bottom-0 absolute">
            {" "}
            Copyright <span>&copy;</span> {CurrentYear} Maxime Vanden Haezevelde{" "}
          </p>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveSideBar;
