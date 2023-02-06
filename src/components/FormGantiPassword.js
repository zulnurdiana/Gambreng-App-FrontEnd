import React, {useContext, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import fotodaftar from "../asset/img/sign_up.png";
import { AlertContext } from "../contexts/AlertProvider";
import axios from "../utils/axios";
import axiosErrorToString from "../utils/axiosErrorToString";

const FormGantiPassword = () => {
  const {token, userId} = useParams()
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {setAlert} = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/password/verify", {
        token,
        userId,
        password,
        confirmPassword
      })
      .then((res) => {
        setAlert('success', 'Berhasil mengganti password');
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
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
                Ganti password anda
              </span>
            </h1>
            <p className=" max-w-sm mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Masukkan pasword baru
            </p>
            <img src={fotodaftar} alt="foto login" className="mt-6 w-5/6" />
          </div>
          <div class="flex items-center justify-center">
            <form
              className="px-4 border py-12 rounded-lg shadow-lg lg:w-5/6"
              onSubmit={handleSubmit}
            >
              <div className="w-full mb-5 px-4">
                <label html-for="password" className="font-medium text-secondary text-base">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full mb-5 px-4">
                <label html-for="confirmPassword" className="font-medium text-secondary text-base">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="w-full px-4 mt-20">
                <button 
                  className="py-2 px-4 w-full rounded-full bg-primary font-bold text-white hover:opacity-80 hover:shadow-lg transition duration-500 lg:text-base"
                  onClick={handleSubmit}
                >
                  Ganti Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGantiPassword;
