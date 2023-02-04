import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import LoadingSpinner from "./LoadingSpinner";

const ListEvent = () => {
  const axios = useAxiosPrivate();

  const [pageCount, setPageCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);

  const getPage = async () => {
    setEvents([]);
    const { data: response } = await axios.get(
      `event?limit=4&page=${page + 1}`
    );
    setPageCount(response.data.totalEvent.totalPage);
    setEvents(response.data.event);
  };

  const handlePageClick = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getPage();
  }, [page]);

  return (
    <div className="min-full-no-navbar pt-16">
      <div className="container">
        {events.length === 0 ? (
          <>
            <div className="min-full-no-navbar relative pt-16">
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <LoadingSpinner twWidthHeight="w-12 h-12" />
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to={"/tambah-acara"}
              className="ml-8 flex items-center w-[15%] font-bold text-white rounded-lg mb-8 px-5 py-2 text-base z-50 bg-primary hover:opacity-80 hover:shadow-lg transition duration-500"
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
              Tambah Event
            </NavLink>
            <div className="flex flex-wrap px-4">
              {events.map((event) => (
                <Link
                  to={`/event/${event.id}`}
                  key={event.id}
                  className="xl:w-1/4 px-4"
                >
                  <div className="rounded-xl shadow-lg overflow-hidden bg-white mb-10">
                    <div className="relative">
                      <div>
                        <img
                          src={`https://gambreng.fajarbuana.my.id/image/${event.image}`}
                          // src={`https://source.unsplash.com/300x200?color`}
                          alt="event"
                          className="w-full h-48"
                        />
                        <Link
                        to={`${event.id}/edit`}>
                          <button
                            className="absolute -bottom-4 border-2 border-white right-0 w-20 h-10 mr-3 flex justify-center items-center rounded-full bg-primary hover:border-primary text-white">
                            <i className="fa fa-edit mr-2"></i>Edit
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="px-4 py-6">
                      <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                        {event.title}
                      </h3>
                      <p className="text-lg font-normal text-primary">
                        <span>🕓</span> {event.schedule.slice(0, 10)}
                      </p>
                      <p className="text-lg font-normal text-slate-400 mb-6">
                        <span>📌</span> {event.location}
                      </p>
                      <Link
                      to={`/hapus-acara/${event.id}`}>
                          <button className="justify-center bg-red-900 hover:opacity-80 hover:shadow-lg transition duration-500 mx-2 text-white font-bold py-1 px-4 rounded">
                            <i className="fa fa-trash pr-2"></i> Hapus
                          </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <ReactPaginate
          className="react-paginate my-8  justify-center"
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

export default ListEvent;
