import React, { useState } from "react";
import { Link, resolvePath, useNavigate } from "react-router-dom/dist";
import axios from "axios";
import { useParams } from "react-router-dom";

function Navbar() {

  const { id } = useParams();

  const initialTab =
    window.location.pathname === "/dashboard/chatlogs"
      ? "dashboard"
      : window.location.pathname === "/sources"
      ? "sources"
      : window.location.pathname === "/chatbot"
      ? "chatbot"
      : window.location.pathname === "/settings/general"
      ? "settings"
      : "";

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const generateResolvedPath = (path) => resolvePath(`/chatbot/${id}${path}`);

  const navigate = useNavigate();

  const handleLogout = async () =>{
    // try {
    //   const response = await axios.delete(
    //     "https://jellyfish-app-5tivv.ondigitalocean.app/users/logout",
    //     {
    //       withCredentials: true,
    //     }
    //   );
    //   if(response.status === 200){
    //     navigate('/login')
    //   }
    // } catch (err) {
    //   console.log("error", err);
    // }
    localStorage.clear();
    navigate('/login')
  }

  return (
    <>
      <header className="w-full flex-col rounded-t-3xl border-b lg:flex mb-10">
        <section className="z-10 flex flex-row items-center justify-between p-6 lg:px-8">
          <span className="hidden text-lg font-normal md:block text-zinc-800 ">
            Chatbase
          </span>
          <div className="flex flex-row items-center justify-center gap-3">
            <span className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
              Help
            </span>
            <span className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
              Account
            </span>
            <button
            onClick={handleLogout}
            className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
              LogOut
            </button>
          </div>
        </section>
        <nav className="no-scrollbar flex flex-row items-center justify-start  gap-7 overflow-auto whitespace-nowrap p-1 font-medium lg:justify-center">
          <Link
          
            to={generateResolvedPath("")}
            className={selectedTab === "chatbot" ? "text-zinc-800 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium" : "text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"}
          >
            Chatbot
            {selectedTab === "chatbot" ? (
              <div className="bg-violet-500 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
            ) : (
              ""
            )}
          </Link>
          <Link
            className={selectedTab === "settings" ? "text-zinc-800 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium" : "text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"}
            to={generateResolvedPath("/settings/general")}
          >
            Settings
            {selectedTab === "settings" ? (
              <div className="bg-violet-500 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
            ) : (
              ""
            )}
          </Link>
          <Link
            className={selectedTab === "dashboard" ? "text-zinc-800 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium" : "text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"}
            to={generateResolvedPath("/dashboard/chatlogs")}  
          >
            Dashboard
            {selectedTab === "dashboard" ? (
              <div className="bg-violet-500 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
            ) : (
              ""
            )}
          </Link>
          <Link
            to={generateResolvedPath("/sources/files")}
            className={selectedTab === "sources" ? "text-zinc-800 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium" : "text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"}
          >
            Sources
            {selectedTab === "sources" ? (
              <div className="bg-violet-500 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
            ) : (
              ""
            )}
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;