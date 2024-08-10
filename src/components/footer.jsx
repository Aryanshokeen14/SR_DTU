import React from "react";

const footer = () => {
  return (
    <>
      <div className="bg-gray-950 w-full h-[1025px] text-white px-10">
        <div className="firstSection">
          <p className="text-8xl font-extralight py-16">Newsletter</p>
          <div>
            <select
              id="salutaion"
              name="salutaion"
              className="bg-black text-gray-300 w-28 "
            >
              <option value="Mr.">Mr.</option>
              <option value=">Ms.">Ms.</option>
            </select>
            <input
              type="text"
              placeholder="First name"
              className="bg-black text-gray-300 w-52 pl-4 ml-7 border border-x-black border-b-slate-700 border-t-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-black text-gray-300 w-52 pl-4 ml-7 border border-x-black border-b-slate-700 border-t-black"
            />
          </div>{" "}
          <br />
          <div className="flex justify-normal gap-5">
            <input
              type="text"
              placeholder="Email id"
              className="bg-black text-gray-300 w-52 pl-4  border border-x-black border-b-slate-700 border-t-black"
            />
            <button className="border rounded-full px-8 py-2 text-gray-400 border-gray-400">
              Submit
            </button>
          </div>
          <br />
          <br />
          <div className="flex items-center py-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="px-2 text-gray-400">
              Receive the latest news
            </label>
          </div>
          <p className="text-gray-400 text-xs">
            You agree to receive the SR-DTU newsletter and additional
            information about new products and events.
          </p>
          <p className="text-gray-400 text-xs">
            Via the unsubscribe link at the bottom of newsletter mailings you
            can withdraw your consent.
          </p>
          <br />
          <br />
          <br />
          <hr className="border-gray-400" />
        </div>

        <div className="second-section w-full flex gap-3 py-16">
          <div className="w-1/2 h-[200px] text-6xl ">
            <p>SR-DTU</p>
            <p className="text-gray-400">we serve humanity.</p>
          </div>
          <div className="w-1/2 h-[200px] flex gap-8">
            <div className="products text-gray-400 ">
              <p className="font-bold text-white">Products</p>
              <br />
              <p className="hover:underline">Pickup Robots</p>
              <p className="hover:underline">Maze Solver</p>
              <p className="hover:underline">LFR</p>
              <p className="hover:underline">Drones</p>
            </div>
            <div className="deepDive text-gray-400 ">
              <p className="font-bold text-white">Deep dive</p>
              <br />
              <p className="hover:underline">Applications</p>
              <p className="hover:underline">Industries</p>
              <p className="hover:underline">Technologies</p>
            </div>
            <div className="getStarted text-gray-400 ">
              <p className="font-bold text-white">Get Started</p>
              <br />
              <p className="hover:underline">Newsletter</p>
              <p className="hover:underline">Contact</p>
              <p className="hover:underline">Blog</p>
            </div>
            <div className="getStarted text-gray-400 ">
              <p className="font-bold text-white">About Us</p>
              <br />
              <p className="hover:underline">Society</p>
              <p className="hover:underline">Careers</p>
              <p className="hover:underline">Media Hub</p>
              <p className="hover:underline">News</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-400" />

        <div className="third-section w-full py-9 ">
          <p className="text-gray-400 text-xs py-6">
            Copyright © 2024 SR-DTU | Imprint | Privacy{"*"}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-xs">
              Bawana Rd, Delhi Technological University, Shahbad Daulatpur
              Village, Rohini, New Delhi,
            </p>
            <div className="links flex mr-11">
              <a href="https://www.linkedin.com/company/srdtu/mycompany/">
                <lord-icon
                  src="https://cdn.lordicon.com/mdyiqybm.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style="width:50px;"
                ></lord-icon>
              </a>
              <a href="">
                <lord-icon
                  src="https://cdn.lordicon.com/iqagrlso.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style="width:50px;"
                ></lord-icon>
              </a>
              <a href="">
                <lord-icon
                  src="https://cdn.lordicon.com/gewhxiwb.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style="width:50px;"
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
