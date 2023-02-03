import React, { useState } from "react";
import Forum from "./Forum";
import { NavLink } from "react-router-dom";

const ListPermainan = () => {
  const [showForum, setForum] = useState(false);
  const handleOnClose = () => setForum(false);

  return (
    <div className="min-full-no-navbar pt-16">
      <div className="container">
        <div className="relative">
          <div className="fixed bottom-11 right-11 w-10 h-10">
            <button
              onClick={() => setForum(true)}
              className="absolute border-2 border-black w-16 h-16 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary hover:scale-95 transition duration-500 text-white"
            >
              <span className="text-2xl">💬</span>
            </button>
          </div>
        </div>
        <NavLink
          to={"/tambah-simulasi"}
          className="ml-8 flex items-center w-[17%] font-bold text-white rounded-lg mb-8 px-5 py-2 text-base z-50 bg-primary hover:opacity-80 hover:shadow-lg transition duration-500"
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
          </span>
          Tambah Simulasi
        </NavLink>
        <div className="flex flex-wrap px-4">
          <div className="xl:w-full px-4">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
              <div className="flex flex-wrap">
                <div className="relative xl:w-1/4">
                  <NavLink to={"/detailsimulasi"}>
                    <img
                      src="https://source.unsplash.com/300x200?color"
                      alt="game"
                      className="w-full h-60"
                    />
                  </NavLink>
                </div>

                <div className="px-6 py-6 xl:w-1/2">
                  <h3 className="font-bold text-dark text-3xl mb-2 truncate">
                    Nama Permainan Tradisional
                  </h3>
                  <h4 className="font-normal text-primary text-2xl mb-2 truncate">
                    Jawa Barat
                  </h4>
                  <p className="text-lg flex flex-wrap font-semibold text-dark mb-5">
                    <span className="mr-3">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
                        />
                        <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z" />
                      </svg>
                    </span>
                    2-4
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
        <Forum onClose={handleOnClose} visible={showForum} />
      </div>
    </div>
  );
};

export default ListPermainan;
