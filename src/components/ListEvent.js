import React from "react";
import { NavLink } from "react-router-dom";

const ListEvent = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
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
                <h3 className="font-bold text-dark hover:text-primary text-2xl mb-5 truncate">
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
                <h3 className="font-bold text-dark hover:text-primary text-2xl mb-5 truncate">
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
                <h3 className="font-bold text-dark hover:text-primary text-2xl mb-5 truncate">
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
                <h3 className="font-bold text-dark hover:text-primary text-2xl mb-5 truncate">
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
