import React from "react";
import fotodaftar from "../asset/img/sign_up.png";

const FormLupaPassword = () => {
  return (
    <div className="full-no-navbar py-28">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="px-4 lg:w-1/2 justify-center">
            <h1 class="text-dark text-center">
              <span class="block font-bold mt-1  lg:text-4xl">
                Lupa Password ?
              </span>
            </h1>
            <p class=" max-w-md mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Masukkan email dan ubah password anda
            </p>
            <center>
              <img src={fotodaftar} alt="foto login" className="mt-6 w-5/6" />
            </center>
          </div>
          <div class="lg:w-1/2 self-center">
            <form className="ml-12 px-4 border py-8 rounded-lg shadow-lg lg:w-5/6">

              <div class="w-full mb-5 px-4">
                <label for="email" class="font-medium text-secondary text-base">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  class="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>

              <div class="w-full px-4 mt-8">
                <button class="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base">
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
