import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const DetailAcara = () => {
  const axios = useAxiosPrivate();
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [tanggal, setTanggal] = useState("");

  const getPage = async () => {
    const { data } = await axios.get(`event/${id}`);
    const { ...response } = data.data;
    setData(response);
    setTanggal(response.schedule);
  };

  useEffect(() => {
    getPage();
  }, [data]);

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
            <p className=" text-slate-400 my-2 font-medium leading-relaxed lg:text-xl">
              📌 {data.location}
            </p>
            <p className=" text-dark font-medium leading-relaxed lg:text-xl">
              <span>📆</span> {tanggal.slice(0, 10)}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              src={`https://gambreng.fajarbuana.my.id/image/${data.image}`}
              alt="game"
              className="w-3/5 rounded-lg h-56"
            />
          </div>
        </div>
        <div className="mb-20 flex flex-wrap rounded-xl shadow-md">
          <div className="lg:w-1/3 flex justify-start">
            <img
              src={`https://gambreng.fajarbuana.my.id/image/${data.image}`}
              alt="game"
              className="w-full rounded-lg h-56"
            />
          </div>
          <div className="px-6 py-2 lg:w-2/3 justify-center">
            <h1 className="text-dark">
              <span className="block font-bold mt-1  lg:text-4xl">
                Tentang Acara
              </span>
            </h1>

            <p className="max-w-md text-justify mt-6 text-slate-400 font-medium leading-relaxed lg:text-base">
              {data.about}
            </p>
            <p className="max-w-md text-justify my-4 text-dark font-medium leading-relaxed lg:text-xl">
              <span className="text-white">📞</span> {data.contact_person}
            </p>
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
            Kembali ke acara
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DetailAcara;
