import React, { useState, useEffect } from "react";
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

  const deleteEvent = async (id) => {
    await axios.delete(`event/${id}`);
    getPage();
  };

  useEffect(() => {
    getPage();
  }, [page]);

  return (
    <div className="min-full-no-navbar pt-16">
      <div className="container">
        <Link
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
        </Link>
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
            <div className="grid xl:grid-cols-4 gap-x-5">
              {events.map((event) => (
                <div className="relative w-full">
                  <Link
                    to={`/event/${event.id}`}
                    key={event.id}
                    className="rounded-xl border border-slate-300 overflow-hidden bg-white block group hover:shadow-lg transition-all"
                  >
                    <div className="relative">
                      <div>
                        <img
                          src={`https://gambreng.fajarbuana.my.id/image/${event.image}`}
                          className="object-cover w-full h-48 transform transition-transform group-hover:scale-110"
                          alt="event"
                        />
                      </div>
                    </div>

                    <div className="px-4 py-6 relative bg-white">
                      <h3 className="font-bold text-dark text-2xl mb-5 truncate">
                        {event.title}
                      </h3>
                      <p className="text-lg font-normal flex items-center gap-x-2 text-primary">
                        <i className="fa-regular fa-clock"></i>
                        <span>
                          {event.schedule.slice(0, 10)}
                        </span> 
                      </p>
                      <p className="text-lg font-normal text-slate-400 mb-6 flex items-center gap-x-2">
                        <span className="w-4 justify-center flex">
                          <i class="fa-solid fa-location-dot"></i> 
                        </span>
                        <span>{event.location}</span>
                      </p>
                    </div>
                  </Link>
                  <div className="absolute bottom-2 right-2 flex items-center gap-x-2">
                    <Link
                      to={`${event.id}/edit`}
                      className="border-2 rounded-lg bg-white border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center w-10 h-10"
                    >
                      <i className="fa fa-edit"></i>
                    </Link>
                    <button
                      className="border-2 rounded-lg bg-white hover border-red-500 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center w-10 h-10"
                      onClick={() => deleteEvent(event.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
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
