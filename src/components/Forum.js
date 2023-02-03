import React from "react";

const Forum = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="rounded-xl fixed top-[20%] right-24 shadow-lg px-5 py-5 border-2 border-primary  bg-white bg-opacity-30 backdrop-blur-sm max-w-md">
      <div class="relative">
        <button
          onClick={onClose}
          class="w-10 h-10  flex absolute hover:scale-95 -top-5 -right-5"
        >
          <span class="m-auto text-lg">❌</span>
        </button>
      </div>
      <h1 class="text-center mb-3 ">
        <span class="block font-bold mt-1 mb-2 lg:text-4xl text-primary">
          Forum Global
        </span>
        <hr className="w-full h-[2px]  my-1 bg-primary" />
      </h1>

      <div class="flex flex-col max-w-md bg-gray-200 rounded-r-full p-4 border border-black">
        <div class="mt-0">
          <p class="text-primary text-sm font-extrabold">Renaldy</p>
          <p class="text-gray-900 font-medium">
            Ayo mabar cuy, game yang seru apa yah?
          </p>
        </div>
      </div>

      <div class="flex flex-col-reverse max-w-md bg-slate-300 rounded-r-full p-4 border border-black">
        <div class="flex-shrink-0 ml-auto"></div>
        <div class="mt-1">
          <p class="text-primary text-sm font-extrabold">Taufiq</p>
          <p class="text-gray-900 font-medium">
            Game tradisional mah bosenin cuy, login ML aja
          </p>
        </div>
      </div>

      <div class="flex flex-col max-w-md bg-gray-200 rounded-r-full p-4 border border-black">
        <div class="mt-0">
          <p class="text-primary text-sm font-extrabold">Fajar</p>
          <p class="text-gray-900 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div class="mt-8 rounded-lg">
        <form class="bg-white rounded-lg p-2">
          <input
            class="w-[73%] p-2 rounded-lg  bg-slate-100  focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary  text-dark"
            type="text"
            placeholder="Type your message here..."
          />
          <button class="ml-3 font-bold text-white rounded-lg px-5 py-2 text-base  bg-primary hover:opacity-80 hover:shadow-lg transition duration-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forum;
