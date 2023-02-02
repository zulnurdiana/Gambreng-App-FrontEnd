import React from "react";
import fotodaftar from "../asset/img/sign_up.png";

const FormLupaPassword = () => {
  return (
    <div className="full-no-navbar py-28">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="px-4 lg:w-1/2 justify-center">
            <h1 className="text-dark text-center">
              <span className="block font-bold mt-1  lg:text-4xl">
                Lupa Password ?
              </span>
            </h1>
            <p className=" max-w-md mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Masukkan email dan ubah password anda
            </p>
            <center>
              <img src={fotodaftar} alt="foto login" className="mt-6 w-5/6" />
            </center>
          </div>
          <div className="lg:w-1/2 self-center">
            <form className="ml-12 px-4 border py-8 rounded-lg shadow-lg lg:w-5/6">

              <div className="w-full mb-5 px-4">
                <label for="email" className="font-medium text-secondary text-base">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>

              <div className="w-full px-4 mt-8">
                <button className="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base">
                  FORGOT PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLupaPassword;
