import React from "react";
import { NavLink } from "react-router-dom";

const ListPermainan = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
        <div className="relative">
          <div className="fixed bottom-11 right-8 w-10 h-10">
            <a
              href="!#"
              target="_blank"
              className="absolute border-2 border-black w-16 h-16 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
            >
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>
        <NavLink
          to={"/tambah-simulasi"}
          className="ml-8 flex items-center w-[17%] font-bold text-white rounded-lg mb-8 px-5 py-2 text-base z-50 bg-primary"
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
          Tambah Simulasi
        </NavLink>
        <div className="flex flex-wrap px-4">
          <div className="xl:w-full px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="flex flex-wrap">
                <div className="relative xl:w-1/4">
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full h-60"
                  />
                </div>

                <div className="px-6 py-6 xl:w-1/2">
                  <h3 className="font-bold text-dark hover:text-primary text-3xl mb-3 truncate">
                    Nama Permainan Tradisional
                  </h3>
                  <h4 className="font-normal text-primary text-xl mb-2 truncate">
                    Jawa Barat
                  </h4>
                  <p className="text-lg font-normal text-dark mb-3">
                    <span>👩🏽‍🤝‍🧑🏿</span> 2-4
                  </p>
                  <p className="text-lg font-normal text-slate-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae tenetur provident, dolores tempora esse
                    cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-full px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="flex flex-wrap">
                <div className="relative xl:w-1/4">
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full h-60"
                  />
                </div>

                <div className="px-6 py-6 xl:w-1/2">
                  <h3 className="font-bold text-dark hover:text-primary text-3xl mb-3 truncate">
                    Nama Permainan Tradisional
                  </h3>
                  <h4 className="font-normal text-primary text-xl mb-2 truncate">
                    Jawa Barat
                  </h4>
                  <p className="text-lg font-normal text-dark mb-3">
                    <span>👩🏽‍🤝‍🧑🏿</span> 2-4
                  </p>
                  <p className="text-lg font-normal text-slate-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae tenetur provident, dolores tempora esse
                    cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-full px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="flex flex-wrap">
                <div className="relative xl:w-1/4">
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full h-60"
                  />
                </div>

                <div className="px-6 py-6 xl:w-1/2">
                  <h3 className="font-bold text-dark hover:text-primary text-3xl mb-3 truncate">
                    Nama Permainan Tradisional
                  </h3>
                  <h4 className="font-normal text-primary text-xl mb-2 truncate">
                    Jawa Barat
                  </h4>
                  <p className="text-lg font-normal text-dark mb-3">
                    <span>👩🏽‍🤝‍🧑🏿</span> 2-4
                  </p>
                  <p className="text-lg font-normal text-slate-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae tenetur provident, dolores tempora esse
                    cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-full px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="flex flex-wrap">
                <div className="relative xl:w-1/4">
                  <img
                    src="https://source.unsplash.com/300x200?color"
                    alt="game"
                    className="w-full h-60"
                  />
                </div>

                <div className="px-6 py-6 xl:w-1/2">
                  <h3 className="font-bold text-dark hover:text-primary text-3xl mb-3 truncate">
                    Nama Permainan Tradisional
                  </h3>
                  <h4 className="font-normal text-primary text-xl mb-2 truncate">
                    Jawa Barat
                  </h4>
                  <p className="text-lg font-normal text-dark mb-3">
                    <span>👩🏽‍🤝‍🧑🏿</span> 2-4
                  </p>
                  <p className="text-lg font-normal text-slate-400 text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Recusandae tenetur provident, dolores tempora esse
                    cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPermainan;
