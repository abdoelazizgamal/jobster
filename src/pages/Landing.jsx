import { Link } from "react-router-dom";
import Main from "../assets/images/landing.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            I'm baby chambray banjo godard humblebrag YOLO live-edge try-hard.
            Intelligentsia etsy health goth vice blue bottle fit farm-to-table
            retro microdosing. Meh bitters hexagon distillery.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login \ Register
          </Link>
        </div>
        <img src={Main} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
