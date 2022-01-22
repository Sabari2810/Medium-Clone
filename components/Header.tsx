import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 px-4 w-full sticky z-50 top-0 bg-white items-center flex my-auto">
      <div className="max-w-screen-lg flex mx-auto justify-between w-full items-center">
        <div className="flex items-center h-full space-x-5">
          <Link href="/">
            <img
              className="h-10 object-cover"
              src="https://links.papareact.com/yvf"
              alt=""
            />
          </Link>
          <div className="md:flex hidden items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="bg-green-700 rounded-2xl text-white px-4 py-1">
              Follow
            </h3>
          </div>
        </div>
        <div className="flex text-blue-500 items-center space-x-5">
          <button>Sign In</button>
          <button className="border text-blue-500 border-blue-500 px-4 py-1 rounded-2xl">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
