import {Link, useNavigate} from "react-router-dom";
import "../../styles/MainStyle.scss"
import mainLogo from "../../assets/images/mainLogo.svg";
import sessionStorage from "redux-persist/es/storage/session";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_contents_textbox">
          <div className="header_contents_mainlogo">
            <Link to='/' className="link_txt" >
              <button className="nav_button">
                <img src={mainLogo} className="mainLogo"/>
              </button>
            </Link>
          </div>
          <div className="header_contents_txt">
            <Link to='/' className="link_txt" >
              <button className="nav_button">
                <p>Home</p>
              </button>
            </Link>
            <Link to='/whitemouse' className="link_txt" >
              <button className="nav_button">
                <p>백쥐</p>
              </button>
            </Link>
            <Link to='/blackmouse' className="link_txt" >
              <button className="nav_button">
                <p>깜쥐</p>
              </button>
            </Link>
            <Link to='/problemlist' className="link_txt" >
              <button className="nav_button">
                <p>문제집</p>
              </button>
            </Link>
            <Link to='/howtouse' className="link_txt" >
              <button className="nav_button">
                <p>How to Use</p>
              </button>
            </Link>
          </div>
          <div className="header_contents_logout">
            <Link to='/' className="link_txt" >
              <button onClick={() => (sessionStorage.clear())} className="nav_button">
                <p>Log Out</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;