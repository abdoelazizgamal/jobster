import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebar, useUserSlice } from "../features/user/userSlice";

import { NavLinks, Logo } from "./";

export const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useUserSlice();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen && "show-sidebar"} `}
        onClick={toggle}
      >
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
