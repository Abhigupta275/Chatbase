import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "../components/Modal";

function ChatbotCreate() {
  const [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jellyfish-app-5tivv.ondigitalocean.app/chatbots",
          {
            withCredentials: true
          }
        );
        // console.log("new res...", response.data);
        setData(response.data); 
        // console.log('data0',data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="z-10 flex flex-row items-center justify-between p-6 lg:px-8">
        <span className="hidden text-lg font-normal md:block text-zinc-800 ">
          Chatbase
        </span>
        <div className="flex flex-row items-center justify-center gap-3">
          <span className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
            Help
          </span>
          <span className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
            Account
          </span>
        </div>
      </section>
      <hr />
      <div className="mx-auto max-w-3xl px-3 pb-12">
        <div className="  flex  w-full items-center justify-between ">
          <div>
            <h1 className=" my-8 text-3xl font-bold  text-black  md:text-3xl">
              Chatbots
            </h1>
          </div>
          <div className="flex justify-center">
            {/* <Link to="/sources/files"> */}
            <button
              onClick={handleModalToggle}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 md:text-md text-sm"
            >
              New Chatbot
            </button>
            {/* </Link> */}
            <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
          </div>
        </div>
        <div className="flex flex-wrap">
          {data &&
            data.map((items) => (
              <div
                key={items._id}
                className="m-auto my-8 w-full md:w-1/2 lg:w-1/4"
              >
                <div className="flex items-center justify-center">
                  <Link to={`/chatbot/${items._id}`}>
                    <div className=" relative flex w-40   flex-col justify-between  overflow-hidden rounded border">
                      <img
                        alt="ChatGPT.pdf thumbnail"
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        data-nimg="1"
                        className=" h-40  w-40 border-none object-cover "
                        srcSet="https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=256&amp;quality=50 1x, https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=640&amp;quality=50 2x"
                        src="https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=640&amp;quality=50"
                        style={{ color: "transparent" }}
                      />
                      <div className=" flex h-14 items-center justify-center px-1">
                        <h3 className="m-auto overflow-hidden text-center text-xs font-semibold md:text-sm">
                          {items.chatbot_name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ChatbotCreate;
