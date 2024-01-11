import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Sourcedrop = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     fetch("https://restcountries.com/v2/all?fields=name")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCountries(data);
  //       });
  //   }, []);
  return (
    <div className="w-full font-medium h-9">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between border text-xs border-gray-300 shadow cursor-pointer ${
          !selected && "text-gray-500"
        }`}
      >
        <span className="text-sm text-black">Sources</span>
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-gray-100 mt-2 overflow-y-auto shadow-lg ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>Widget or Iframe</p>
            </div>
        </li>
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>API</p>
            </div>
        </li>
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>Chatbase site</p>
            </div>
        </li>
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>WhatsApp</p>
            </div>
        </li>
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>Slack</p>
            </div>
        </li>
        <li className="p-2 text-sm">
            <div className="flex gap-4 justify-start items-center">
                <input className="w-8 h-4 cursor-pointer" type="checkbox"/>
                <p>Unspecified  </p>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default Sourcedrop;
