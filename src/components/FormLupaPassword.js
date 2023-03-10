import React, {useContext, useState} from "react";
import fotodaftar from "../asset/img/sign_up.png";
import { AlertContext } from "../contexts/AlertProvider";
import axios from "../utils/axios";
import axiosErrorToString from "../utils/axiosErrorToString";

const FormLupaPassword = () => {
  const [email, setEmail] = useState("");

  const {setAlert} = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/password/send", {
        email,
      })
      .then((res) => {
        setAlert('success', 'Berhasil mengirim email, silahkan cek email anda untuk ubah password, periksa juga di spam');
      })
      .catch((err)=>setAlert('error' ,axiosErrorToString(err)));
  };
  
  return (
    <div className="flex min-full-no-navbar">
      <div className="container grow">
        <div className="grid gap-y-10 my-7 md:my-0 md:grid-cols-2 place-content-center h-full">
          <div className="justify-center flex flex-col items-center">
            <h1 className="text-dark text-center">
              <span className="block font-bold mt-1  lg:text-4xl">
                Lupa Password ?
              </span>
            </h1>
            <p className=" max-w-sm mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Masukkan email dan ubah password anda
            </p>
            <img src={fotodaftar} alt="foto login" className="mt-6 w-5/6" />
          </div>
          <div class="flex items-center justify-center">
            <form
              className="px-4 border py-12 rounded-lg shadow-lg lg:w-5/6"
              onSubmit={handleSubmit}
            >
              <div className="w-full mb-5 px-4">
                <label html-for="email" className="font-medium text-secondary text-base">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="w-full px-4 mt-20">
                <button 
                  className="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base"
                  onClick={handleSubmit}
                >
                  Forgot Password
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
