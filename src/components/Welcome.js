import React from "react";
import Congklak from "../asset/img/congklak.png";

const Welcome = () => {
  return (
    <div className="full-no-navbar bg-primary">
      <section id="home" className="h-full">
        <div class="container h-full">
          <div class="lg:grid h-full grid-cols-2 flex flex-col-reverse justify-around items-center">
            <div class="w-full px-4 text-white flex flex-col text-center lg:text-start lg:gap-y-10">
              <h1 class=" block font-bold text-5xl mt-1 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  GAMBRENG GAME
              </h1>
              <p class="mt-5 mb-10 font-medium leading-relaxed lg:text-xl xl:text-2xl">
                Mainkan permainan tradisional yang asik dan menyenangkan bersama
                teman-temanmu melalui aplikasi kami.
              </p>
            </div>
            <div class=" w-2/3 lg:w-full pt-[66.666%] lg:pt-[100%] relative">
              <div className="absolute top-0 w-full h-full">
                <div class="relative w-full h-full">
                  <img
                    src={Congklak}
                    alt="Congklak"
                    className="absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] z-[1] "
                  />
                  <span class="absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 h-3/4 rounded-full">
                  </span>
                  <span className="absolute top-[2%] left-[55%] text-white text-8xl lg:text-9xl font-bold opacity-20">JOIN</span>
                  <span className="absolute bottom-[5%] right-1/2 text-white text-8xl lg:text-9xl font-bold opacity-20">JOIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
