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
    console.log(response);
    setData(response);
    setTanggal(response.schedule);
  };

  useEffect(() => {
    getPage();
  }, [data]);

  return (
    <div className="min-full-no-navbar pt-24">
      <div className="container">
        <div className="mb-20 rounded-xl overflow-hidden flex flex-col-reverse lg:grid grid-cols-2 lg:h-80" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
          <div className="px-6 py-4 lg:py-2 lg:ml-3 lg:flex flex-col justify-center h-full ">
            <h1 className="text-primary">
              <span className="block font-bold mt-1  lg:text-4xl">
                {data.title}
              </span>
            </h1>
            <p className=" text-slate-700 my-2 font-medium leading-relaxed lg:text-xl">
            <i class="fa-solid fa-location-dot"></i> {data.location}
            </p>
            <p className=" text-slate-700 font-medium leading-relaxed lg:text-xl">
            <i className="fa-regular fa-clock"></i> {tanggal.slice(0, 10)}
            </p>
          </div>
          <div className="flex h-80 lg:h-auto">
            <iframe src={data.link_map} className="w-full" style={{border : 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2 overflow-hidden rounded-xl lg:h-80" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
          <div className="flex justify-start">
            <img
              src={`https://gambreng.fajarbuana.my.id/image/${data.image}`}
              alt="game"
              className="w-full lg:rounded-l-lg h-full object-cover"
            />
          </div>
          <div className="px-6 py-2  justify-center">
            <h1 className="text-dark">
              <span className="block font-bold mt-1  lg:text-4xl">
                Tentang Acara
              </span>
            </h1>

            <p className="text-justify mt-6 text-slate-600 font-medium leading-relaxed lg:text-base">
              {data.about}
            </p>
            <p className="text-justify my-4 text-dark font-medium leading-relaxed lg:text-xl">
              <i class="fa-solid fa-phone"></i> {data.contact_person}
            </p>
          </div>
        </div>
        <Link
          to={"/event"}
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
