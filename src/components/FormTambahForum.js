import React from "react";

const FormTambahForum = () => {
  return (
    <div className="min-full-no-navbar pt-16">
      <div class="container m-8">
        
        <div class="mb-20 rounded-xl shadow-xl content-around ml-40 mr-40">
          <div class="px-10 py-10 justify-center">
            <h1 class="text-39364F text-center">
              <span class="block font-bold mt-1  lg:text-2xl">
                TAMBAH FORUM PERMAINAN
              </span>
              <hr class="w-48 h-1 mx-auto my-4 bg-primary border-0 rounded dark:bg-primary"/>
            </h1>
            
            <div className="w-full mb-5 px-4">
                <label html-for="nama-forum" className="font-medium text-39364F text-base">
                  Judul Forum
                </label>
                <input
                placeholder="forum name"
                id=""
                type="text"
                className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
            </div>
            <button className="bg-primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
            >TAMBAH FORUM</button>
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
          <p className="font-bold text-primary lg:text-3xl">Daftar Permainan</p>
        </div>
      </div>
    </div>
  );
};

export default FormTambahForum;
