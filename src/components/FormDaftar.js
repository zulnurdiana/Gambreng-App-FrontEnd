import React from "react";
import fotodaftar from "../asset/img/sign_up.png";
import axios from "../utils/axios";
import { AlertContext } from "../contexts/AlertProvider";
import { Link } from "react-router-dom";

const FormDaftar = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { setAlert } = React.useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", {
        email,
        password,
        confirmPassword
      })
      .then((res) => {
        setAlert('success', 'Berhasil mendaftar, silahkan cek email anda untuk verifikasi');
      })
      .catch((err) => {
        console.log(err)
        setAlert('error', err.message + ' ');
      });
  };
  
  return (
    <div className="flex min-full-no-navbar">
      <div className="container grow">
        <div className="grid gap-y-10 my-7 md:my-0 md:grid-cols-2 place-content-center h-full">
          <div className="justify-center flex flex-col items-center">
            <h1 className="text-dark text-center">
              <span className="block font-bold mt-1  lg:text-4xl">
                Ayo Daftar !
              </span>
            </h1>
            <p className=" max-w-sm mx-auto text-secondary text-center mt-3 font-medium leading-relaxed lg:text-sm">
              Gabung dan bermain permainan tradisional & menemukan teman baru bersama kami.
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
                <label html-for="confpassword" className="font-medium text-secondary text-base">
                  Confirm Password
                </label>
                <input
                  id="confpassword"
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
                  SIGN UP
                </button>
              </div>
              <p className="text-center text-sm text-secondary font-semibold mt-6">
                Already have an account?
                <Link to={"/signin"} className="font-bold text-primary"> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

};

export default FormDaftar;
