import { NavLink } from "react-router-dom"

function Header(){
    return (
      <>
        <div className="flex justify-between bg-transparent border-b-2 shadow-md shadow-pink-700 py-3 px-6 ">
          <h1 className="font-bold text-xl text-pink-600">Tekup</h1>
          <div className="flex justify-between gap-24 font-bold">
            <NavLink to="/"className="hover:scale-105 hover:underline underline-offset-4 hover:text-pink-700">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <button className="mx-10 px-8 py-1 bg-gradient-to-r from-purple-900 to-pink-700 text-white rounded-lg hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </>
    );
}

export default Header