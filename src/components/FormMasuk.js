import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import fotologin from "../asset/img/sign_in.png";
import axios from "../utils/axios";
import AuthContext from "../contexts/AuthProvider";
import { AlertContext } from "../contexts/AlertProvider";
import jwtDecode from "jwt-decode";

const FormMasuk = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { setAuth, setAccessToken } = useContext(AuthContext);
  const { setAlert } = React.useContext(AlertContext);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: response } = await axios.post(
        "/auth/signin",
        JSON.stringify({ email, password }),
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const decodedRes = jwtDecode(response.data.accessToken);
      const accessToken = response.data.accessToken;
      const resEmail = decodedRes.email;
      const isAdmin = decodedRes.role === "admin";

      setAlert("success", "Berhasil Masuk");
      setAccessToken(accessToken);
      setAuth({ accessToken, email: resEmail, isAdmin });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setAlert("error", "No Server Response");
      } else if (err.response?.status === 400) {
        setAlert("error", "Missing Username or Password");
      } else if (err.response?.status === 401) {
        setAlert("error", "Invalid Username / Password");
      } else {
        setAlert("error", "Something Went Wrong");
      }
    }
  };

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
          <div class="lg:w-1/2">
            <form
              className="ml-12 px-4 border py-12 rounded-lg shadow-lg lg:w-5/6"
              onSubmit={handleSubmit}
            >
              <div class="w-full mb-6 px-4">
                <label
                  html-for="nama"
                  class="font-medium text-secondary text-base"
                >
                  Email
                </label>
                <input
                  id="nama"
                  type="email"
                  class="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="w-full mb-8 px-4">
                <label
                  html-for="password"
                  class="font-medium text-secondary text-base"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
