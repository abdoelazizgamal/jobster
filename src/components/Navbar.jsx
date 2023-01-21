import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Logo } from "./";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { toggleSidebar, useUserSlice } from "../features/user/userSlice";
import { clearStore } from "../features/user/thunks/clearStore";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useUserSlice();
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout && "show-dropdown"}`}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(clearStore("Logout Successful..."));
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
