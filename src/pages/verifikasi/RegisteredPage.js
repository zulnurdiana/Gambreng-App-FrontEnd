import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessVerificationImage from "../../asset/img/sign_in.png";
function RegisteredPage() {
  const navigate = useNavigate();

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container flex h-full justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex lg:justify-center text-center p-2">
            <img
              src={SuccessVerificationImage}
              alt="mockup"
              className="mt-6 w-5/6"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 p-5">
              Selamat, akun kamu sudah terverifikasi!
            </h1>
            <button
              onClick={() => navigate(`/`, { replace: true })}
              className="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base"
            >
              Kembali ke Halaman Utama
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisteredPage;
