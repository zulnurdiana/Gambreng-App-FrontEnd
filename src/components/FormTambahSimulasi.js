import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const FormTambahSimulasi = () => {
  const axios = useAxiosPrivate();
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    max_player: "",
    link_video: "",
    origin_game: "",
  });
  const [procedure, setProcedure] = useState([]); 

  const addProcedure = () => {
    setProcedure([...procedure, {step: Date.now(), description:""}]);
  }

  const handleProcedureChange = (e, index) => {
    const newProcedure = [...procedure];
    newProcedure[index].description = e.target.value;
    setProcedure(newProcedure);
  }

  const removeProcedure = (index) => {
    const newProcedure = [...procedure];
    newProcedure.splice(index, 1);
    setProcedure(newProcedure);
  }

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
    formData.append("description", data.description);
    formData.append("link_video", data.link_video);
    formData.append("max_player", data.max_player);
    formData.append("origin_game", data.origin_game);
    formData.append("procedure[]", "[" + procedure.map((step,index)=>{step.step=index;return JSON.stringify(step)})+ "]");
    if(data.image)
      formData.append("image", data.image);
      
    if(id)
      await axios.put(`game/${id}`, formData, {headers: {"Content-Type": "multipart/form-data",}});
    else 
      await axios.post("game", formData, {headers: {"Content-Type": "multipart/form-data",}});

    navigate("/permainan");
  }

  useEffect(() => {
    if (!id)
      return 
    const fetchData = async () => {
      const { data: response } = await axios.get(`game/${id}`);
      const {procedure ,...data} = response.data;
      setProcedure(...procedure.map(step=>JSON.parse(step)));
      setData(data);
    };
    fetchData();
  }, []);

  
  return (
    <div className="min-full-no-navbar pt-10">
      <div className="container">
        <div className="xl:w-3/5 mx-auto">
          <div className="mb-5 rounded-xl shadow-xl content-around border border-primary">
            <div className="px-10 py-10">
              <form action="" className="grid gap-y-5" onSubmit={handleSubmit}>
                <h1 className="text-39364F text-center">
                  <span className="block font-bold mt-1 mb-2 text-primary lg:text-3xl">
                    FORM SIMULASI PERMAINAN
                  </span>
                  <hr className={"w-full h-[3px]  my-1 bg-primary"} />
                </h1>
                <div className="w-full px-4">
                  <label
                    htmlFor="nama-permainan"
                    className="font-medium text-39364F text-base"
                  >
                    Nama Permainan
                  </label>
                  <input
                    name="title"
                    onChange={handleOnChange}
                    value={data.title}
                    placeholder="Congklak"
                    id="nama-permainan"
                    type="text"
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <label
                      htmlFor="origin_game"
                      className="font-medium text-39364F text-base"
                    >
                      Asal Daerah
                    </label>
                    <input
                      placeholder="Jawa Timur"
                      id="origin_game"
                      name="origin_game"
                      onChange={handleOnChange}
                      value={data.origin_game}
                      type="text"
                      className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                    />
                  </div>
                  <div className="px-4">
                    <label
                      className="font-medium text-39364F text-base"
                      htmlFor="max_player"
                    >
                      Jumlah pemain
                    </label>
                    <input
                      placeholder="2-4"
                      id="max_player"
                      name="max_player"
                      onChange={handleOnChange}
                      value={data.max_player}
                      type="text"
                      className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <label
                    htmlFor="link_video"
                    className="font-medium text-39364F text-base"
                  >
                    Link Video Permainan
                  </label>
                  <input
                    placeholder="https://.."
                    id="link_video"
                    type="url"
                    name="link_video"
                    onChange={handleOnChange}
                    value={data.link_video}
                    className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
                <div className="w-full px-4">
                  <label
                    htmlFor="description"
                    className="font-medium text-39364F text-base"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleOnChange}
                    value={data.description}
                    className="p-2 h-20 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                  />
                </div>
                <div className="w-full px-4">
                  <label
                    className="font-medium text-39364F text-base"
                  >
                    Tata Cara
                  </label>
                  <div className="flex flex-col gap-y-3">
                    {
                      procedure.map((step, index) => {
                        return (
                          <div className="group relative" key={step.step}>
                            <input
                              placeholder={`Langkah ke-${index+1}`}
                              className="p-2 bg-slate-100 w-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary rounded-lg text-dark font-bold"
                              value={step.description}
                              onChange={(e) => handleProcedureChange(e, index)}
                            />
                            <div className="absolute top-1/2 transform -translate-y-1/2 right-2 text-lg text-red-500" onClick={() => removeProcedure(index)}>
                              <i className="fa-solid fa-circle-minus"></i>
                            </div>
                          </div>
                        )
                      })
                    }
                    <div onClick={addProcedure} className="flex items-center gap-x-2 text-lg border border-gray-700 rounded-lg px-2 hover:text-white hover:border-primary hover:bg-primary cursor-pointer">
                      <i className="fa-solid fa-circle-plus"></i>
                      <span>Tambah langkah</span>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4">
                  <label
                    html-for="nama-event"
                    className="font-medium text-39364F text-base"
                  >
                    Gambar
                  </label>
                  <label className="block">
                    <span className="sr-only">Choose game thumbnail</span>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(event)=>{setData({...data, image: event.target.files[0]})}}
                      className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-39364F
                      hover:file:text-primary
                      "
                    />
                  </label>
                </div>
                <button className="bg-primary hover:opacity-80 hover:shadow-lg transition duration-500 w-full text-white font-bold py-2 px-4 rounded">
                SIMPAN
                </button>
              </form>
            </div>
          </div>
        </div>

        <Link
            to={"/permainan"}
            className="mt-16 mb-6 flex items-center group"
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

export default FormTambahSimulasi;
