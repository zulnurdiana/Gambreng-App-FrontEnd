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
            <span className="text-lg font-bold border-none">🔫</span>
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
