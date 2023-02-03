import React from "react";
import { NavLink } from "react-router-dom";

const FormTambahSimulasi = () => {
  return (
    <div className="min-full-no-navbar pt-20">
      <div class="container">
        <div class="xl:w-3/5 mx-auto">
          <div class="mb-20 rounded-xl shadow-xl content-around border border-primary">
            <div class="px-10 py-10 justify-center">
              <h1 class="text-39364F text-center">
                <span class="block font-bold mt-1 mb-2 text-primary lg:text-3xl">
                  FORM TAMBAH SIMULASI PERMAINAN
                </span>
                <hr className={"w-full h-[3px]  my-1 bg-primary"} />
              </h1>

              <div className="w-full mb-5 px-4 py-7">
                <label
                  html-for="nama-permainan"
                  className="font-medium text-39364F text-base"
                >
                  Nama Permainan
                </label>
                <input
                  placeholder="game name"
                  id=""
                  type="text"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="flex">
                <div className="w-1/3 mb-5 px-4">
                  <label
                    html-for="tanggal-acara"
                    className="font-medium text-39364F text-base"
                  >
                    Asal Daerah
                  </label>
                  <select className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold">
                    <option></option>
                  </select>
                </div>
                <div className="w-1/3 mb-5 px-4">
                  <label
                    html-for="provinsi-acara"
                    className="font-medium text-39364F text-base"
                  >
                    Jumlah pemain
                  </label>
                  <input
                    placeholder="1-3"
                    id="cp-event"
                    type="text"
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
              </div>
              <div className="w-full mb-5 px-4">
                <label
                  html-for="link-event"
                  className="font-medium text-39364F text-base"
                >
                  Link Video Permainan
                </label>
                <input
                  placeholder="https://.."
                  id="link-event"
                  type="url"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full mb-5 px-4">
                <label
                  html-for="cp-event"
                  className="font-medium text-39364F text-base"
                >
                  Deskripsi
                </label>
                <textarea
                  id="about-event"
                  className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full mb-5 px-4">
                <label
                  html-for="cp-event"
                  className="font-medium text-39364F text-base"
                >
                  Tata Cara
                </label>
                <textarea
                  id="about-event"
                  className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full mb-5 px-4">
                <label
                  html-for="nama-event"
                  className="font-medium text-39364F text-base"
                >
                  Attachments
                </label>
                <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-39364F
                    hover:file:text-primary
                    "
                  />
                </label>
              </div>
              <button className="bg-primary hover:opacity-80 hover:shadow-lg transition duration-500 w-full text-white font-bold py-2 px-4 rounded">
                TAMBAH SIMULASI
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12 flex items-center">
          <NavLink
            to={"/event"}
            className="border-2 border-slate-400 w-14 h-14 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
          >
            <span className="text-lg font-bold border-none">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  stroke="#000"
                  stroke-width="2.5"
                  d="M15 7.5L15 2.5M15 7.5C18.123 7.556 20.007 7.5 21.25 7.5C23.75 7.5 26.25 8.125 27.5 12.5C28.75 16.875 28.75 19.375 28.75 22.5C28.75 25.625 26.25 26.25 23.75 26.25C21.25 26.25 19.932 21.25 15 21.25C10.068 21.25 8.75 26.25 6.25 26.25C3.75 26.25 1.25 25.625 1.25 22.5C1.25 19.375 1.25 16.875 2.5 12.5C3.75 8.125 6.25 7.5 8.75 7.5C9.993 7.5 11.877 7.556 15 7.5L15 7.5L15 7.5ZM22.5 18.75C23.19 18.75 23.75 18.19 23.75 17.5C23.75 16.81 23.19 16.25 22.5 16.25C21.81 16.25 21.25 16.81 21.25 17.5C21.25 18.19 21.81 18.75 22.5 18.75ZM17.5 15C18.19 15 18.75 14.44 18.75 13.75C18.75 13.06 18.19 12.5 17.5 12.5C16.81 12.5 16.25 13.06 16.25 13.75C16.25 14.44 16.81 15 17.5 15ZM5 15L12.5 15M8.75 11.25L8.75 18.75"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            to={"/permainan"}
            className="font-normal tracking-wide underline decoration-primary text-primary lg:text-2xl"
          >
            Kembali ke permainan
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FormTambahSimulasi;
