import React from "react";
import { NavLink } from "react-router-dom";

const ListEvent = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
        <NavLink
          to={"/tambah-acara"}
          className="ml-8 flex items-center w-[15%] font-bold text-white rounded-lg mb-8 px-5 py-2 text-base z-50 bg-primary hover:opacity-80 hover:shadow-lg transition duration-500"
        >
          <span className="fill-current mr-3">
            <svg
              role="img"
              width="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13.496h-4.501v4.484h-3v-4.484H6v-2.99h4.5V6.021h3.001v4.485H18v2.99zM21 .041H3C1.348.043.008 1.379 0 3.031v17.94c.008 1.65 1.348 2.986 3 2.988h18c1.651-.002 2.991-1.338 3-2.988V3.031c-.009-1.652-1.348-2.987-3-2.99z" />
            </svg>
          </span>{" "}
          Tambah Event
        </NavLink>
        <div className="flex flex-wrap px-4">
          <div className="xl:w-1/4 px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="relative">
                <NavLink to={"/detailevent"}>
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full"
                  />
                  <a
                    href="!#"
                    target="_blank"
                    className="absolute -bottom-4 border-2 border-white right-0  w-10 h-10 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
                  >
                    <span>🤍</span>
                  </a>
                </NavLink>
              </div>

              <div className="px-4 py-6">
                <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                  Lorem Ipsum
                </h3>
                <p className="text-lg font-normal text-primary">
                  <span>🕓</span> Today at 10:00 PM
                </p>
                <p className="text-lg font-normal text-slate-400 mb-6">
                  <span>📌</span> Bandung, West Java
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="relative">
                <NavLink to={"/detailevent"}>
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full"
                  />
                  <a
                    href="!#"
                    target="_blank"
                    className="absolute  -bottom-4 border-2 border-white right-0  w-10 h-10 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
                  >
                    <span>🤍</span>
                  </a>
                </NavLink>
              </div>

              <div className="px-4 py-6">
                <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                  Lorem Ipsum
                </h3>
                <p className="text-lg font-normal text-primary">
                  <span>🕓</span> Today at 10:00 PM
                </p>
                <p className="text-lg font-normal text-slate-400 mb-6">
                  <span>📌</span> Bandung, West Java
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="relative">
                <NavLink to={"/detailevent"}>
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full"
                  />
                  <a
                    href="!#"
                    target="_blank"
                    className="absolute -bottom-4 border-2 border-white right-0  w-10 h-10 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
                  >
                    <span>🤍</span>
                  </a>
                </NavLink>
              </div>

              <div className="px-4 py-6">
                <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                  Lorem Ipsum
                </h3>
                <p className="text-lg font-normal text-primary">
                  <span>🕓</span> Today at 10:00 PM
                </p>
                <p className="text-lg font-normal text-slate-400 mb-6">
                  <span>📌</span> Bandung, West Java
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="relative">
                <NavLink to={"/detailevent"}>
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full"
                  />
                  <a
                    href="!#"
                    target="_blank"
                    className="absolute -bottom-4 border-2 border-white right-0  w-10 h-10 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
                  >
                    <span>🤍</span>
                  </a>
                </NavLink>
              </div>

              <div className="px-4 py-6">
                <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                  Lorem Ipsum
                </h3>
                <p className="text-lg font-normal text-primary">
                  <span>🕓</span> Today at 10:00 PM
                </p>
                <p className="text-lg font-normal text-slate-400 mb-6">
                  <span>📌</span> Bandung, West Java
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEvent;
