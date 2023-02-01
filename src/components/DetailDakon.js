import React from "react";
import Kids from "../asset/img/Kids4.png";


const Dakon = () => {
    return (
      <div className="full-no-navbar bg-none">
        <div>
          <img
                    src={Kids}
                    alt="Congklak"
                    className="" 
                   
                  />
          </div>
        <div class="bg-clip-content p-1">
          <div class="flex flex-warp">
          <div class="w-[100%]">
            <div class="rounded-xl shadow-lg overflow-hidden bg-white">
              <div class="relative">
                <a
                  href="!#"
                  target="_blank"
                  class="absolute border-2 border-white right-0  w-11 h-11 ml-3 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white"
                >
                  <span>💬</span>
                </a>
              </div>

              <div class="px-16 py-3">
                <h3 class="text-2xl font-bold text-primary hover:text-dark text-2xl mb-1 truncate">
                  Dakon
                </h3>
                <p class="text-xl font-normal text-black">
                  <span>📍</span> Jawa Timur
                </p>
                <p class="text-xl font-normal text-black-400 mb-6">
                  <span>👤</span> 2 - 4
                </p>
              </div>
              <div className="px-16">
                <h4 className="text-2xl font-bold text-dark hover:text-dark text-2xl mb-5 truncate">
                    Video
                    </h4>
                    <iframe className="rounded-xl flex justify-center px-15 ml-25" width="1024" height="680" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="px-16">
                <h5 className="text-2xl font-bold text-dark hover:text-dark text-2xl mb-5 truncate"> Tata  Cara </h5>
                <div className="text-xl font-normal text-black-400 mb-6">
                <p className="py-5">🟠 Lorem ipsum dolor sit amet consectetur. Eget morbi auctor a lobortis arcu aliquam. Enim nibh sed urna dictum venenatis lorem. Volutpat et at maecenas.</p>
                <p className="py-5">🟠 Lorem ipsum dolor sit amet consectetur. Eget morbi auctor a lobortis arcu aliquam. Enim nibh sed urna dictum venenatis lorem. Volutpat et at maecenas.</p>
                <p className="py-5">🟠 Lorem ipsum dolor sit amet consectetur. Eget morbi auctor a lobortis arcu aliquam. Enim nibh sed urna dictum venenatis lorem. Volutpat et at maecenas.</p>
                <p className="py-5">🟠 Lorem ipsum dolor sit amet consectetur. Eget morbi auctor a lobortis arcu aliquam. Enim nibh sed urna dictum venenatis lorem. Volutpat et at maecenas.</p>
                <p className="py-5">🟠 Lorem ipsum dolor sit amet consectetur. Eget morbi auctor a lobortis arcu aliquam. Enim nibh sed urna dictum venenatis lorem. Volutpat et at maecenas.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dakon;
  