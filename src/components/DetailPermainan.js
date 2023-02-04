import React, { useEffect, useState } from "react";
import Kids from "../asset/img/Kids4.png";
import DetailForum from "./DetailForum";
import { Link, useParams } from "react-router-dom";
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
    setProcedure(...procedure.map(step=>JSON.parse(step)));
  }

  useEffect(()=>{
    getPage();
  }, [])

  return (
    <div className="full-no-navbar bg-none">
      {showForum && <DetailForum onClose={handleOnClose} permainanId={id} />}
      <div>
        <img src={Kids} alt="Congklak" className="rounded-b-3xl w-full max-h-[60vh] object-cover" />
      </div>
      <div className="w-full py-8 px-12 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-warp">
          <div className="w-[100%]">
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
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_224"
                        data-name="Path 224"
                        d="M12.59 0.787A9.543 9.543 0 0 0 3.052 10.326 14.749 14.749 0 0 0 6.29 19.116a25.124 25.124 0 0 0 5.878 5.548 0.787 0.787 0 0 0 0.844 0 25.124 25.124 0 0 0 5.878 -5.548 14.749 14.749 0 0 0 3.239 -8.79A9.543 9.543 0 0 0 12.59 0.787Zm0 1.574A7.969 7.969 0 0 1 20.555 10.326a13.18 13.18 0 0 1 -2.922 7.845A23.83 23.83 0 0 1 12.59 23.048a23.83 23.83 0 0 1 -5.042 -4.879 13.18 13.18 0 0 1 -2.922 -7.845A7.969 7.969 0 0 1 12.59 2.361Z"
                        transform="translate(-3.878 -1)"
                        fillRule="evenodd"
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
                        fillRule="evenodd"
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-12">
                <h5 className="text-4xl font-bold text-dark mb-5">Tata Cara</h5>
                {
                  procedure.map(({description,step}, index)=><div className="text-xl font-normal" key={step}>
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
        
        <Link
            to={"/permainan"}
            className="mt-16 mb-6 flex items-center group w-max"
          >
          <div className="border-2 w-14 h-14 mr-3 flex justify-center items-center transition-colors rounded-full bg-white border-primary group-hover:bg-primary">
            <i className="fa-solid fa-chevron-left text-primary group-hover:text-white text-xl transition-colors"></i>
          </div>
          <span className="font-normal tracking-wide group-hover:underline decoration-primary text-primary lg:text-2xl">
            Kembali ke permainan
          </span>
        </Link>
        </div>
    </div>
  );
};

export default DetailPermainan;
