import React from "react";
import { NavLink } from "react-router-dom";

const DetailAcara = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
        <div className="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div className="px-6 py-14 lg:w-1/2 justify-center">
            <h1 className="text-primary">
              <span className="block font-bold mt-1  lg:text-6xl">
                Detail Acara
              </span>
            </h1>
            <p className=" text-slate-400 my-2 font-medium leading-relaxed lg:text-base">
              📌 UNIVERSITAS KOMPUTER INDONESIA
            </p>
            <p className=" text-dark font-medium leading-relaxed lg:text-base">
              📆 Senin, 10 Januari 2022, 12:00 (WIB)
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-3/5 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div className="lg:w-1/3 flex justify-start">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-full rounded-lg"
            />
          </div>
          <div className="px-6 py-2 lg:w-2/3 justify-center">
            <h1 className="text-dark">
              <span className="block font-bold mt-1  lg:text-4xl">
                Tentang Acara
              </span>
            </h1>

            <p className="max-w-md text-justify mt-6 text-slate-400 font-medium leading-relaxed lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              rem vel aliquid beatae harum quae alias nulla officia unde ea
              praesentium est, rerum esse illum!
            </p>
            <p className="max-w-md text-justify mt-6 text-dark font-medium leading-relaxed lg:text-xl">
              <span className="text-white">📞</span> 08123456789
            </p>
          </div>
        </div>
        <div className="mb-12 flex items-center">
          <NavLink
            to={"/event"}
            className="border-2 border-slate-400 w-14 h-14 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
          >
            <span className="text-lg font-bold border-none">👨‍👩‍👧‍👦</span>
          </NavLink>
          <NavLink
            to={"/event"}
            className="font-normal tracking-wide underline decoration-primary text-primary lg:text-2xl"
          >
            Kembali ke acara
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailAcara;
