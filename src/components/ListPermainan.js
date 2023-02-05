import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import LoadingSpinner from "./LoadingSpinner";
import DetailForum from "./DetailForum";
import AuthContext from "../contexts/AuthProvider";

const MAX_DESCRIPTION_LENGTH = 100;

const ListPermainan = () => {
  const [showForum, setForum] = useState(false);
  const handleOnClose = () => setForum(false);
  const navigate = useNavigate();
  const {auth} = useContext(AuthContext); 

  const axios = useAxiosPrivate();

  const [pageCount, setPageCount] = useState(0);
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(0);

  const getPage = async () => {
    setGames([]);
    const { data: response } = await axios.get(`game?limit=5&page=${page + 1}`);
    setPageCount(response.data.totalGame.totalPage);
    setGames(response.data.game);
  };

  const handlePageClick = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getPage();
  }, [page]);

  const deleteGame = async (id) => {
    if(!window.confirm("Apakah anda yakin ingin menghapus permainan ini?"))
      return;
    await axios.delete(`game/${id}`);
    getPage();
  };

  return (
    <div className="min-full-no-navbar pt-16">
      <div className="container">
      <div className="relative">
        {showForum && <DetailForum onClose={handleOnClose} />}
          <div className="fixed bottom-11 right-11 w-10 h-10 z-[2]">
            <button
              onClick={() =>{ 
                if(!auth) navigate('/signin');
                setForum(true)
              }}
              className="absolute border-2 border-black w-16 h-16 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary hover:scale-95 transition duration-500 text-white"
            >
              <span className="text-2xl">💬</span>
            </button>
          </div>
        </div>
        {auth?.isAdmin &&
          <Link
            to={"/tambah-simulasi"}
            className="ml-8 flex items-center w-[17%] font-bold text-white rounded-lg mb-8 px-5 py-2 text-base z-50 bg-primary hover:opacity-80 hover:shadow-lg transition duration-500"
          >
            <span className="fill-current mr-3">
              <svg
                role="img"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13.496h-4.501v4.484h-3v-4.484H6v-2.99h4.5V6.021h3.001v4.485H18v2.99zM21 .041H3C1.348.043.008 1.379 0 3.031v17.94c.008 1.65 1.348 2.986 3 2.988h18c1.651-.002 2.991-1.338 3-2.988V3.031c-.009-1.652-1.348-2.987-3-2.99z" />
              </svg>
            </span>
            Tambah Simulasi
          </Link>
        }
        {games.length === 0 ? (
          <div className="min-full-no-navbar relative pt-16">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <LoadingSpinner twWidthHeight="w-12 h-12" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap px-4">
              <div className="grid md:grid-cols-2 gap-x-3 lg:grid-cols-none ">
                {games.map((game) => (
                  <div className="relative group">
                    <Link to={`${game.id}`} key={game.id}>
                      <div className="rounded-xl border border-gray-400 transition-shadow hover:shadow-lg overflow-hidden bg-white mb-10">
                        <div className="grid grid-rows-[15rem,1fr] lg:grid-rows-none lg:grid-cols-4">
                          <div className="relative ">
                            <img
                              src={`https://gambreng.fajarbuana.my.id/image/${game.image}`}
                              alt="game"
                              className="min-h-full min-w-full lg:w-full lg:h-60 group-hover:scale-110 transition object-cover"
                            />
                          </div>

                          <div className="px-6 lg:col-span-3 py-6 bg-white relative z-[1]">
                            <h3 className="font-bold text-dark text-3xl mb-2 truncate">
                              {game.title}
                            </h3>
                            <h4 className="font-normal text-primary text-2xl mb-2 truncate">
                              {game.origin_game}
                            </h4>
                            <p className="text-lg flex flex-wrap items-center gap-x-2 font-semibold text-dark mb-5">
                              <i className="fa-regular fa-user"></i>
                              <span>{game.max_player}</span>
                            </p>
                            <p className="text-lg font-normal text-slate-400 text-justify">
                              {game.description.slice(
                                0,
                                MAX_DESCRIPTION_LENGTH
                              ) +
                                (game.description.length >
                                MAX_DESCRIPTION_LENGTH
                                  ? "..."
                                  : "")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {auth?.isAdmin &&
                      <div className="absolute top-2 right-2 flex items-center gap-x-2 z-[1]">
                        <Link
                          to={`${game.id}/edit`}
                          className="border-2 rounded-lg bg-white border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center w-10 h-10"
                        >
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button
                          className="border-2 rounded-lg bg-white hover border-red-500 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center w-10 h-10"
                          onClick={() => deleteGame(game.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <ReactPaginate
          className="react-paginate mt-3 mb-5"
          breakLabel="..."
          onPageChange={(e) => {
            handlePageClick(e.selected);
          }}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          nextLabel={<i className="fas fa-chevron-right" />}
          previousLabel={<i className="fas fa-chevron-left" />}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ListPermainan;
