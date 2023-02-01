import Logo from "../asset/img/logo.png";

import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(()=>{
    setNavbarOpen(false);
  }, [isMobile])


  return (
    <div className="h-[5.5rem]">
      <header class="absolute flex top-0 right-0 left-0 bg-transparent z-10 items-center shadow-md">
        <div class="container">
          <div class="flex justify-between items-center relative">
            <div class="px-2">
              <a
                href="/"
                class="text-primary text-xl font-bold py-6 inline-block"
              >
                <img src={Logo} alt="logo" className="inline mx-6" />
                Gambreng App
              </a>
            </div>
            <div class="flex items-center px-4">
              <nav
                id="nav-menu"
                class="py-5 absolute top-full right-2 shadow-lg max-w-[200px] w-full rounded-lg px-7  bg-white lg:block lg:static lg:max-w-full lg:bg-transparent lg:shadow-none lg:rounded-none"
              >
                <ul class="block lg:flex">
                  <NavLink to={"/permainan"}>
                    <span class="text-base lg:font-semibold mb-3 flex text-primary  lg:mx-6">
                      Mulai Bermain
                    </span>
                  </NavLink>
                  <li class="group">
                    <NavLink to={"/signin"}>
                      <span className="text-base lg:font-semibold mb-3 flex text-dark group-hover:text-primary lg:mx-6">
                        Masuk
                      </span>
                    </NavLink>
                  </li>
                  <li class="group">
                    <NavLink to={"/signup"}>
                      <span className="text-base lg:font-semibold mb-3 flex text-dark group-hover:text-primary lg:mx-6">
                        Daftar
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[4rem] xl:h-[5.5rem]"></div>
    </>
  );
}


export default Navbar;
