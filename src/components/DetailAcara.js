import React from "react";

const DetailAcara = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div class="container">
        <div class="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div class="px-6 py-14 lg:w-1/2 justify-center">
            <h1 class="text-primary">
              <span class="block font-bold mt-1  lg:text-6xl">
                Detail Acara
              </span>
            </h1>
            <p class=" text-slate-400 my-2 font-medium leading-relaxed lg:text-base">
              📌 UNIVERSITAS KOMPUTER INDONESIA
            </p>
            <p class=" text-dark font-medium leading-relaxed lg:text-base">
              📆 Senin, 10 Januari 2022, 12:00 (WIB)
            </p>
          </div>
          <div class="lg:w-1/2 flex justify-end">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-3/5 rounded-lg"
            />
          </div>
        </div>
        <div class="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div class="lg:w-1/3 flex justify-start">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-full rounded-lg"
            />
          </div>
          <div class="px-6 py-2 lg:w-2/3 justify-center">
            <h1 class="text-dark">
              <span class="block font-bold mt-1  lg:text-4xl">
                Tentang Acara
              </span>
            </h1>

            <p class="max-w-md text-justify mt-6 text-slate-400 font-medium leading-relaxed lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              rem vel aliquid beatae harum quae alias nulla officia unde ea
              praesentium est, rerum esse illum!
            </p>
            <p class="max-w-md text-justify mt-6 text-dark font-medium leading-relaxed lg:text-xl">
              📞 08123456789
            </p>
          </div>
        </div>
        <div class="mb-12 flex items-center">
          <a
            href="/event"
            target="_blank"
            className="inline"
            class="border-2 border-black w-14 h-14 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
          >
            <span className="text-2xl">🔍</span>
          </a>
          <p className="font-bold text-primary lg:text-3xl">Daftar Acara</p>
        </div>
      </div>
    </div>
  );
};

export default DetailAcara;
