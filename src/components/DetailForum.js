import React, { useContext, useEffect, useState } from "react";
import SimpleBar from 'simplebar-react';
import AuthContext from "../contexts/AuthProvider";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const DetailForum = ({ permainanId,onClose }) => {
  const axios = useAxiosPrivate(); 
  const {auth} = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const msgContainerRef = React.useRef(null);

  const getData = async ()=>{
    const {data : response} = await axios.get(permainanId ? `game-forum/${permainanId}` : 'global-message');
    console.log(response.data)
    setData(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    getData();
    const interval = setInterval(() => {
      getData();
    }, 3000);
    return () => clearInterval(interval);
  },[])

  const sendMessage = async (e)=>{
    e.preventDefault();
    let msg = {
      message : message,
    }
    if(permainanId)
      msg['gameForumId'] = data.id;
    
    const {data : response} = await axios.post(permainanId ? `game-message` : 'global-message', msg);
    setMessage('');
    getData();
  }

  const printMessages = (msg)=>(
    <div key={msg.id} className={`flex flex-col w-11/12 px-4 py-2 rounded-md ${msg.users?.email == auth?.email ? 'self-end bg-primary text-white' : 'bg-white text-gray-900'}`}>
      <div className="mt-0">
        {msg.users?.email == auth?.email || <p className="text-primary text-sm font-extrabold">{msg.users?.email.split('@')[0]}</p>}
        <p className="font-medium">
          {msg.message}
        </p>
      </div>
    </div>
  )

  return (
    <div className="rounded-xl fixed top-10 h-[calc(99vh-5rem)] right-10 shadow-lg px-5 py-5 border-2 w-[30vw] border-primary  bg-gray-300 bg-opacity-75 backdrop-blur-sm max-w-md z-10
      flex flex-col justify-between
    ">
      <div className="relative">
        <div className="absolute -top-2 right-0 w-10 h-10 grid place-content-center bg-primary cursor-pointer rounded-md">
          <i className="fa-solid fa-times text-2xl text-white"
            onClick={onClose}
          ></i>
        </div>
        <div className="absolute -top-2 left-0 w-10 h-10 grid place-content-center bg-blue-500 cursor-pointer rounded-md" onClick={getData}>
          <i className="fa-solid fa-rotate-right text-2xl text-white"></i>
        </div>
      </div>
      
      <div className="border-b border-primary">
        <h1 className="text-center">
          <span className="block font-bold mt-1 lg:text-4xl text-primary">
            Forum {data.title ? data.title : 'Global'}
          </span>
        </h1>
      </div>

      <div className="grow my-4 overflow-hidden" ref={msgContainerRef}>
        <SimpleBar style={{ maxHeight: msgContainerRef.current?.offsetHeight }}>
          <div className="flex flex-col gap-y-2">
            { data.game_messages ? data.game_messages.map(printMessages) : data.map(printMessages)}
          </div>
        </SimpleBar>
      </div>

      <div className="rounded-lg">
        <form className="bg-white rounded-lg p-2" onSubmit={sendMessage}>
          <input
            className="w-[73%] p-2 rounded-lg  bg-slate-100  focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary  text-dark"
            type="text"
            placeholder="Type your message here..."
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button className="ml-3 font-bold text-white rounded-lg px-5 py-2 text-base  bg-primary hover:opacity-80 hover:shadow-lg transition duration-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailForum;
