import "./topbar.scss";
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">        
          <HomeIcon style={{fontSize:"40px"}}/>
          </a>
          <div className="itemContainer">
            <a
              href="https://github.com/mmeli19"
              target={"_blank"}
              className="icon"
            >
              <GitHubIcon />
            </a>

            {/* LinkedIN */}

            <a
              href="https://www.linkedin.com/in/esther-chukwunwike/"
              target={"_blank"}
              className="icon"
            >
              <LinkedInIcon />
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/esther.blaze/"
              target={"_blank"}
              className="icon"
            >
              <InstagramIcon />
            </a>

            {/* Twitter */}

            <a
              href="https://twitter.com/esther__blaze"
              target={"_blank"}
              className="icon"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
