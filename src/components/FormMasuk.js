import React from "react";
import { Link } from "react-router-dom";
import fotologin from "../asset/img/sign_in.png";

const FormMasuk = () => {
  return (
    <div className="min-full-no-navbar pt-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="px-4 lg:w-1/2 justify-center">
            <h1 className="text-dark text-center">
              <span className="block font-bold mt-1  lg:text-4xl">
                Selamat Datang !
              </span>
            </h1>
            <p className=" max-w-sm mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Ayo masuk dan bermain bersama kami untuk menemukan teman baru.
            </p>
            <center>
              <img src={fotologin} alt="foto login" className="mt-6 w-5/6" />
            </center>
          </div>
          <div className="lg:w-1/2">
            <form className="ml-12 px-4 border py-12 rounded-lg shadow-lg lg:w-5/6">
              <div className="w-full mb-6 px-4">
                <label
                  for="nama"
                  className="font-medium text-secondary text-base"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full mb-8 px-4">
                <label
                  for="email"
                  className="font-medium text-secondary text-base"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
                <Link to="/forgot-password">
                  <p className="text-end text-sm italic text-primary">
                    Forget password?
                  </p>
                </Link>
              </div>

              <div className="w-full px-4 mt-20">
                <button className="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base">
                  SIGN IN
                </button>
              </div>
              <p className="text-center text-sm text-secondary font-semibold mt-6">
                Don’t have an account yet?
                <span className="font-bold text-primary"> Create one</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMasuk;
