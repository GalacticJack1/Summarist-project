"use client";
import { useDispatch } from "react-redux";
import { openModal } from "../app/redux/modalSlice";

function NavBar() {
const dispatch = useDispatch();

    return (
            <nav className="h-[80px]">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full m-auto px-[24px]">
        <figure className="max-w-[200px]">
          <img className="w-full h-full" src="/assets/logo.png" alt="logo" />
        </figure>
        <ul className="flex gap-[24px]">
          <li><button className="nav__list nav__list--login cursor-pointer hover:text-[#2bd97c] transition-colors" onClick={() => dispatch(openModal())}>Login</button></li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>

)
}

export default NavBar