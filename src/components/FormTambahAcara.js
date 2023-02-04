import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const FormTambahAcara = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    schedule: "",
    image: null,
    location: "",
    about: "",
    contact_person: "",
    link_map: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("schedule", data.schedule);
    formData.append("image", data.image);
    formData.append("location", data.location);
    formData.append("about", data.about);
    formData.append("contact_person", data.contact_person);
    formData.append("link_map", data.link_map);
    const { data: response } = await axios.post(
      "event",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    navigate("/event");
  };

  return (
    <div className="min-full-no-navbar pt-20">
      <div class="container">
        <div class="xl:w-3/5 mx-auto">
          <div class="mb-20 rounded-xl shadow-xl content-around border border-primary">
            <form class="px-10 py-10 flex flex-col gap-y-5" onSubmit={handleSubmit}>
              <h1 class="text-39364F text-center">
                <span class="block font-bold mt-1 mb-2  lg:text-4xl text-primary">
                  FORM TAMBAH EVENT
                </span>
                <hr className={"w-full h-[3px]  my-1 bg-primary"} />
              </h1>

              <div className="w-full px-4">
                <label
                  htmlFor="title"
                  className="font-medium text-39364F text-base"
                >
                  Nama event
                </label>
                <input
                  placeholder="Hut-RI ke-75"
                  id="title"
                  name="title"
                  onChange={handleOnChange}
                  type="text"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="grid grid-cols-3">
                <div className=" px-4">
                  <label
                    htmlFor="schedule"
                    className="font-medium text-39364F text-base"
                  >
                    Tanggal
                  </label>
                  <input
                    id="schedule"
                    name="schedule"
                    onChange={handleOnChange}
                    type="date"
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
                <div className="px-4 col-span-2">
                  <label
                    htmlFor="location"
                    className="font-medium text-39364F text-base"
                  >
                    Lokasi
                  </label>
                  <input
                    placeholder="Ubud, Bali"
                    id="location"
                    name="location"
                    onChange={handleOnChange}
                    type="text"
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
              </div>
              <div className="w-full  px-4">
                <label
                  htmlFor="link_map"
                  className="font-medium text-39364F text-base"
                >
                  Link Peta
                </label>
                <input
                  placeholder="https://.."
                  id="link_map"
                  name="link_map"
                  onChange={handleOnChange}
                  type="url"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full  px-4">
                <label
                  htmlFor="about"
                  className="font-medium text-39364F text-base"
                >
                  Tentang Acara
                </label>
                <textarea
                  id="about"
                  name="about"
                  onChange={handleOnChange}
                  className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full  px-4">
                <label
                  htmlFor="contact_person"
                  className="font-medium text-39364F text-base"
                >
                  Contact person
                </label>
                <input
                  placeholder="0812.."
                  id="contact_person"
                  name="contact_person"
                  onChange={handleOnChange}
                  type="number"
                  className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                />
              </div>
              <div className="w-full  px-4">
                <label
                  htmlFor="image"
                  className="font-medium text-39364F text-base"
                >
                  Gambar
                </label>
                <label class="block">
                  <span class="sr-only">Pilih gambar</span>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={(event)=>setData({...data, image: event.target.files[0]})}
                    class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-39364F
                    hover:file:text-primary
                    "
                  />
                </label>
              </div>
              <button className="bg-primary hover:opacity-80 hover:shadow-lg transition duration-500  w-full text-white font-bold py-2 px-4 rounded">
                TAMBAH ACARA
              </button>
            </form>
          </div>
        </div>
        <Link
            to={"/event"}
            className="mt-16 mb-6 flex items-center group"
          >
          <div className="border-2 w-14 h-14 mr-3 flex justify-center items-center transition-colors rounded-full bg-white border-primary group-hover:bg-primary">
            <i className="fa-solid fa-chevron-left text-primary group-hover:text-white text-xl transition-colors"></i>
          </div>
          <span className="font-normal tracking-wide group-hover:underline decoration-primary text-primary lg:text-2xl">
            Kembali ke event
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FormTambahAcara;
