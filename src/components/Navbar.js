import Logo from "../asset/img/logo.png";

import { useMediaQuery } from "react-responsive";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Navbar = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [navbarOpen, setNavbarOpen] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setNavbarOpen(false);
  }, [isMobile]);

  const logout = () => {
    axiosPrivate
      .post("/auth/signout", {}, { withCredentials: true })
      .then((res) => {
        setAuth(null);
        navigate("/");
      });
  };

  return (
    <>
      <nav
        className={
          "top-0 fixed z-10 w-full px-2 py-3 navbar-expand-lg transform transition shadow-lg bg-white" +
          (!isMobile ? " py-7" : " py-4")
        }
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              to="/"
              className=" flex items-center text-sm font-bold leading-relaxed mr-4 whitespace-nowrap uppercase"
              end
            >
              <div className="flex gap-x-3 items-center">
                <img className="w-8" src={Logo} alt="" />
                <span>Gambreng App</span>
              </div>
            </NavLink>
            <button
              className="lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-black"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none justify-end" +
              (navbarOpen ? " block" : " hidden") +
              (isMobile && " mt-5")
            }
            id="example-navbar-warning"
          >
            <ul className="block lg:flex text-dark">
              <li className="group">
                <NavLink to={"/permainan"}>
                  <span className="text-base lg:font-semibold flex group-hover:text-primary lg:mx-6">
                    Mulai Bermain
                  </span>
                </NavLink>
              </li>
              <li className="group">
                <NavLink to={"/event"}>
                  <span className="text-base lg:font-semibold flex group-hover:text-primary lg:mx-6">
                    Event
                  </span>
                </NavLink>
              </li>
              {auth ? (
                <li className="group">
                  <span
                    className="cursor-pointer text-base lg:font-semibold flex group-hover:text-primary lg:mx-6"
                    onClick={logout}
                  >
                    Keluar
                  </span>
                </li>
              ) : (
                <>
                  <li className="group">
                    <NavLink to={"/signin"}>
                      <span className="text-base lg:font-semibold flex group-hover:text-primary lg:mx-6">
                        Masuk
                      </span>
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink to={"/signup"}>
                      <span className="text-base lg:font-semibold flex group-hover:text-primary lg:mx-6">
                        Daftar
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[3.5rem] xl:h-[5.5rem]"></div>
    </>
  );
};

export default Navbar;
