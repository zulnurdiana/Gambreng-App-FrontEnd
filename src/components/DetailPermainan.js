import React, { useEffect, useState } from "react";
import Kids from "../asset/img/Kids4.png";
import DetailForum from "./DetailForum";
import { NavLink, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const DetailPermainan = () => {
  const [showForum, setForum] = useState(false);
  const handleOnClose = () => setForum(false);

  const axios = useAxiosPrivate();
  const { id } = useParams();

  const [procedure, setProcedure] = useState([]);
  const [data, setData] = useState({});

  const getPage = async ()=>{
    const {data} = await axios.get(`game/${id}`);
    const {procedure, ...response} = data.data;
    setData(response);
    console.log(response);
    setProcedure(...procedure.map(step=>JSON.parse(step)));
  }

  useEffect(()=>{
    getPage();
  }, [])

  return (
    <div className="full-no-navbar bg-none">
      <DetailForum onClose={handleOnClose} visible={showForum} />
      <div>
        <img src={Kids} alt="Congklak" className="rounded-b-3xl w-full max-h-[60vh] object-cover" />
      </div>
      <div class="w-full py-8 px-12 rounded-xl shadow-lg overflow-hidden">
        <div class="flex flex-warp">
          <div class="w-[100%]">
            <div>
              <div className="relative">
                <div className="fixed bottom-11 right-11 w-10 h-10">
                  <button
                    onClick={() => setForum(true)}
                    className="absolute border-2 border-black w-16 h-16 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary hover:scale-95 transition duration-500 text-white"
                  >
                    <span className="text-2xl">💬</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-primary text-4xl mb-2 truncate">
                  {data.title}
                </h3>
                <h4 className="text-xl flex flex-wrap font-semibold text-dark">
                  <span className="mr-3">
                    <svg
                      width="24px"
                      height="24px"
                      fill="#FE4918"
                      viewBox="-2.463 0 24 24"
                      id="_05_-_Location"
                      data-name="05 - Location"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Path_223"
                        data-name="Path 223"
                        d="M12.59 5.823a3.875 3.875 0 1 0 3.875 3.875A3.878 3.878 0 0 0 12.59 5.823Zm0 1.574a2.302 2.302 0 1 1 -2.302 2.302A2.303 2.303 0 0 1 12.59 7.397Z"
                        transform="translate(-3.878 -1)"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_224"
                        data-name="Path 224"
                        d="M12.59 0.787A9.543 9.543 0 0 0 3.052 10.326 14.749 14.749 0 0 0 6.29 19.116a25.124 25.124 0 0 0 5.878 5.548 0.787 0.787 0 0 0 0.844 0 25.124 25.124 0 0 0 5.878 -5.548 14.749 14.749 0 0 0 3.239 -8.79A9.543 9.543 0 0 0 12.59 0.787Zm0 1.574A7.969 7.969 0 0 1 20.555 10.326a13.18 13.18 0 0 1 -2.922 7.845A23.83 23.83 0 0 1 12.59 23.048a23.83 23.83 0 0 1 -5.042 -4.879 13.18 13.18 0 0 1 -2.922 -7.845A7.969 7.969 0 0 1 12.59 2.361Z"
                        transform="translate(-3.878 -1)"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </span>
                  {data.origin_game}
                </h4>
                <p className="text-xl flex flex-wrap font-semibold text-dark mb-5">
                  <span className="mr-3">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="#FE4918"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
                      />
                      <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z" />
                    </svg>
                  </span>
                  {data.max_player}
                </p>
              </div>
              <div className="mt-12">
                <h4 className="text-4xl font-bold text-dark  mb-5 truncate">
                  Video
                </h4>
                <iframe
                  className="rounded-xl mx-auto px-15 ml-25 w-full"
                  width="1024"
                  height="680"
                  src={data.link_video}
                  title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="mt-12">
                <h5 className="text-4xl font-bold text-dark mb-5">Tata Cara</h5>
                {
                  procedure.map(({description}, index)=><div className="text-xl font-normal">
                    <div className="py-2 flex flex-wrap gap-x-4">
                      <div className="relative w-4">
                        <div className="w-4 h-4 bg-primary rounded-full absolute top-2"></div>
                        {
                          index !== procedure.length-1 && <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-[calc(100%+1rem)] border-l-2 border-primary"></div>
                        }
                      </div>
                      <p className="max-w-screen-lg text-justify tracking-wide">
                        {description}
                      </p>
                    </div>
                  </div>)
                }
              </div>

              <div className="mt-12">
                <h5 className="text-4xl font-bold text-dark mb-5">Deskripsi</h5>
                <p className="text-xl text-gray-700">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-6 flex items-center">
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
            to={"/permainan"}
            className="font-normal tracking-wide underline decoration-primary text-primary lg:text-2xl"
          >
            Kembali ke permainan
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailPermainan;
