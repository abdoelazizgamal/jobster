import { NavLinks } from "./";
import { Logo } from "../components/";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useUserSlice } from "../features/user/userSlice";

const BigSidebar = () => {
  const { isSidebarOpen } = useUserSlice();
  return (
    <Wrapper>
      <div className={` sidebar-container ${isSidebarOpen && " show-sidebar"}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
