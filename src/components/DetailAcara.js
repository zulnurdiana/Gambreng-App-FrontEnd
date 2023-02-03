import React from "react";
import { NavLink } from "react-router-dom";

const DetailAcara = () => {
  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
        <div className="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div className="px-6 py-14 lg:w-1/2 justify-center">
            <h1 className="text-primary">
              <span className="block font-bold mt-1  lg:text-6xl">
                Detail Acara
              </span>
            </h1>
            <p className=" text-slate-400 my-2 font-medium leading-relaxed lg:text-base">
              📌 UNIVERSITAS KOMPUTER INDONESIA
            </p>
            <p className=" text-dark font-medium leading-relaxed lg:text-base">
              📆 Senin, 10 Januari 2022, 12:00 (WIB)
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-3/5 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div className="lg:w-1/3 flex justify-start">
            <img
              src="https://source.unsplash.com/300x200?color"
              alt="game"
              className="w-full rounded-lg"
            />
          </div>
          <div className="px-6 py-2 lg:w-2/3 justify-center">
            <h1 className="text-dark">
              <span className="block font-bold mt-1  lg:text-4xl">
                Tentang Acara
              </span>
            </h1>

            <p className="max-w-md text-justify mt-6 text-slate-400 font-medium leading-relaxed lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              rem vel aliquid beatae harum quae alias nulla officia unde ea
              praesentium est, rerum esse illum!
            </p>
            <p className="max-w-md text-justify mt-6 text-dark font-medium leading-relaxed lg:text-xl">
              <span className="text-white">📞</span> 08123456789
            </p>
          </div>
        </div>
        <div className="mb-12 flex items-center">
          <NavLink
            to={"/event"}
            className="border-2 border-slate-400 w-14 h-14 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
          >
            <span className="border-none">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3.75C9.88505 3.75 6.9945 3.94409 5.18958 4.08392C4.596 4.12991 4.12991 4.596 4.08392 5.18958C3.94409 6.9945 3.75 9.88505 3.75 12C3.75 14.115 3.94409 17.0055 4.08392 18.8104C4.12991 19.404 4.596 19.8701 5.18958 19.9161C6.9945 20.0559 9.88505 20.25 12 20.25C14.115 20.25 17.0055 20.0559 18.8104 19.9161C19.404 19.8701 19.8701 19.404 19.9161 18.8104C20.0559 17.0055 20.25 14.115 20.25 12C20.25 9.88505 20.0559 6.9945 19.9161 5.18958C19.8701 4.596 19.404 4.12991 18.8104 4.08392C17.0055 3.94409 14.115 3.75 12 3.75ZM5.07372 2.5884C6.87948 2.44851 9.82133 2.25 12 2.25C14.1787 2.25 17.1205 2.44851 18.9263 2.5884C20.2569 2.69149 21.3085 3.74313 21.4116 5.07372C21.5515 6.87948 21.75 9.82133 21.75 12C21.75 14.1787 21.5515 17.1205 21.4116 18.9263C21.3085 20.2569 20.2569 21.3085 18.9263 21.4116C17.1205 21.5515 14.1787 21.75 12 21.75C9.82133 21.75 6.87948 21.5515 5.07372 21.4116C3.74312 21.3085 2.69149 20.2569 2.5884 18.9263C2.44851 17.1205 2.25 14.1787 2.25 12C2.25 9.82133 2.44851 6.87948 2.5884 5.07372C2.69149 3.74312 3.74313 2.69149 5.07372 2.5884ZM11.9939 7.43557C12.3056 7.70833 12.3372 8.18215 12.0644 8.49388L9.65283 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.65283L12.0644 15.5061C12.3372 15.8178 12.3056 16.2917 11.9939 16.5644C11.6822 16.8372 11.2083 16.8056 10.9356 16.4939L7.43557 12.4939C7.18814 12.2111 7.18814 11.7889 7.43557 11.5061L10.9356 7.50612C11.2083 7.19439 11.6822 7.16281 11.9939 7.43557Z"
                  fill="#ffff"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            to={"/event"}
            className="font-normal tracking-wide underline decoration-primary text-primary lg:text-2xl"
          >
            Kembali ke acara
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailAcara;
