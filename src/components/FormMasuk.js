import React from "react";
import fotologin from "../asset/img/sign_in.png";

const FormMasuk = () => {
  return (
    <div className="min-h-screen pt-32">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="px-4 lg:w-1/2 justify-center">
            <h1 class="text-dark text-center">
              <span class="block font-bold mt-1  lg:text-4xl">
                Selamat Datang !
              </span>
            </h1>
            <p class=" max-w-sm mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Ayo masuk dan bermain bersama kami untuk menemukan teman baru.
            </p>
            <center>
              <img src={fotologin} alt="foto login" className="mt-6 w-5/6" />
            </center>
          </div>
          <div class="lg:w-1/2">
            <form className="ml-12 px-4 border py-12 rounded-lg shadow-lg lg:w-5/6">
              <div class="w-full mb-6 px-4">
                <label for="nama" class="font-medium text-secondary text-base">
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  class="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div class="w-full mb-8 px-4">
                <label for="email" class="font-medium text-secondary text-base">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  class="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
                <p className="text-end text-sm italic text-primary">
                  Forget password?
                </p>
              </div>

              <div class="w-full px-4 mt-20">
                <button class="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base">
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
