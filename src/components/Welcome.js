import React from "react";
import Congklak from "../asset/img/congklak.png";

const Welcome = () => {
  return (
    <div className="min-h-screen">
      <section id="home">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="w-full self-center px-4 lg:w-1/2">
              <h1 class="text-primary">
                <span class="block font-bold text-5xl mt-1 md:text-5xl lg:text-6xl">
                  GAMBRENG GAME
                </span>
              </h1>

              <p class="text-secondary mt-5 mb-10 font-medium leading-relaxed lg:text-xl">
                Mainkan permainan tradisional yang asik dan menyenangkan bersama
                teman-temanmu melalui aplikasi kami.
              </p>
            </div>
            <div class="w-full self-end px-4 lg:w-1/2">
              <div class="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src={Congklak}
                  alt="Congklak"
                  class="relative top-20 max-w-full mx-auto"
                />
                <span class="absolute -bottom-16 -z-10 left-1/2 -translate-x-1/2 md:scale-150 sm:-bottom-0 md:-bottom-0">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FE4918"
                      d="M63.4,-21.3C72.2,6.6,62.6,39.8,39.3,57.7C15.9,75.5,-21.2,77.9,-39.9,62.5C-58.7,47.1,-59.1,13.9,-49.3,-15.2C-39.6,-44.4,-19.8,-69.4,3.7,-70.6C27.3,-71.9,54.5,-49.2,63.4,-21.3Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
