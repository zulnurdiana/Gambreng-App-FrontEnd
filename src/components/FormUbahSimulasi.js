import React from "react";

const FormUbahSimulasi = () => {
  return (
    <div className="min-full-no-navbar pt-22">
      <div class="container">
        
        <div class="mb-10 rounded-xl shadow-xl content-around ml-40 mr-40">
          <div class="px-10 py-10 justify-center">
            <h1 class="text-39364F text-center">
              <span class="block font-bold mt-1  lg:text-2xl">
                FORM UBAH SIMULASI PERMAINAN
              </span>
              <hr class="w-48 h-1 mx-auto my-4 bg-primary border-0 rounded dark:bg-primary"/>
            </h1>
            
            <div className="w-full mb-5 px-4">
                <label html-for="nama-permainan" className="font-medium text-39364F text-base">
                  Nama Permainan
                </label>
                <input
                placeholder="game name"
                id=""
                type="text"
                className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
            </div>
            <div className="flex">
                <div className="w-1/2 mb-5 px-4">
                    <label html-for="asal-permainan" className="font-medium text-39364F text-base">
                    Asal Daerah 
                    </label>
                    <select className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold">
                        <option></option>
                    </select>
                </div>
                <div className="w-1/2 mb-5 px-4">
                    <label html-for="jumlah-pemain" className="font-medium text-39364F text-base">
                    Jumlah pemain 
                    </label>
                    <input
                    placeholder="1-3"
                    id="cp-event"
                    type="text"
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
                </div>
            </div>
            <div className="w-full mb-5 px-4">
                <label html-for="link-permainan" className="font-medium text-39364F text-base">
                  Link Video Permainan
                </label>
                <input
                placeholder="https://.."
                id="link-permainan"
                type="url"
                className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
            </div>
            <div className="w-full mb-5 px-4">
                <label html-for="desc-permainan" className="font-medium text-39364F text-base">
                  Deskripsi
                </label>
                <textarea
                id="desc-permainan"
                className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
            </div>
            <div className="w-full mb-5 px-4">
                <label html-for="cara-permainan" className="font-medium text-39364F text-base">
                  Tata Cara
                </label>
                <textarea
                id="cara-permainan"
                className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"/>
            </div>
            <div className="w-full mb-5 px-4">
                <label html-for="attachments" className="font-medium text-39364F text-base">
                  Attachments
                </label>
                <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input type="file" class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-39364F
                    hover:file:text-primary
                    "/>
                </label>
            </div>
            <button 
            className="bg-primary hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
            >UBAH SIMULASI</button>
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

export default FormUbahSimulasi;
