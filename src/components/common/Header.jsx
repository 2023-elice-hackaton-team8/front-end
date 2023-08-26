import {Link, useNavigate} from "react-router-dom";
import "../../styles/MainStyle.scss"
import mainLogo from "../../assets/images/mainLogo.svg";

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
            <Link to='/logout' className="link_txt" >
              <button className="nav_button">
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

//
// import {Link, useNavigate} from "react-router-dom";
// import {useEffect, useRef, useState} from "react";
// import styled from "styled-components";
// import logo_white from "../../../assets/images/resource/Logo&text_white.svg";
// import "../../../styles/NavBar.scss";
// import nav_line from "../../../assets/images/resource/nav_bar_line.svg"
// import btn_deco from "../../../assets/images/resource/nav_button_deco.svg"
// import profile_img from "../../../assets/images/stamp/stamp_best.svg"
// import navbar_activate from "../../../assets/images/resource/nav_bar_activate_inactivate_btn.svg"
// import {useDispatch, useSelector} from "react-redux";
// import {fetchUserInfoThunk, logoutUserThunk} from "../../../store/userSlice";
//
//
// const SidebarNav = styled.nav`
//   width: 26%;
//   min-width: 400px;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ $isSidebarVisible }) => ($isSidebarVisible ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;
//
// export default function Navbar() {
//   const dispatch = useDispatch()
//   const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken"))
//   const [sidebar, setSidebar] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const sidebarRef = useRef()
//   const LogoutUser = () => {
//     dispatch(logoutUserThunk());
//   }
//   const showSidebar = () => setSidebar(!sidebar)
//   const navigate = useNavigate()
//
//   const handlePageHome = () => {
//     navigate('/')
//   }
//   const user = useSelector((state) => state.userState.user)
//
//   useEffect(() => {
//     const loginCheck = !!accessToken
//     setIsLoggedIn(loginCheck)
//     if (isLoggedIn) {
//       const idx = sessionStorage.getItem("userIdx")
//       dispatch(fetchUserInfoThunk(idx))
//     }
//   }, [isLoggedIn])
//
//   const user_nickname = user?.nickname || 'james'
//   const user_email = user?.email || 'jimmy@raynersraiders.com'
//   const user_point = user?.point || 0
//   const user_img = user?.imgUrl || profile_img
//
//   return (
//       <>
//         {isLoggedIn && (
//             <div>
//               <button onClick={showSidebar} className="nav_bar_active_btn"><img src={navbar_activate} className="navbar_pictogram"/></button>
//             </div>
//         )}
//         <SidebarNav $isSidebarVisible={sidebar} ref={sidebarRef}>
//           <nav className="nav_bar">
//
//             <div className="nav_bar2" onClick={showSidebar}>
//               <div onClick={handlePageHome} >
//                 <img src={logo_white} alt="LOGO" className="logo"/>
//               </div>
//               <img src={nav_line} alt="이미지 존재하지 않음" className="line"/>
//
//               <div className="profile_box">
//                 <div className="profile_img_setting">
//                   <img src={user_img ? user_img:profile_img } className="profile_img"/>
//                 </div>
//
//                 <p className="profile_id">{user_nickname}</p>
//
//                 <p className="profile_email">{user_email}</p>
//
//                 <div className="point_box">
//                   <p className="point_box_txt"> my points</p>
//                   <p className="point_box_txt2">{user_point}</p>
//                 </div>
//
//                 <button onClick={LogoutUser} className="logout_btn_nav">Logout</button>
//               </div>
//
//               <div className="nav_btn_group">
//                 <div>
//                   <Link to='/mypage' className="link_txt" >
//                     <button className="nav_button">
//                       <img src={btn_deco} alt="이미지 존재하지 않음" className="button_deco"/>
//                       <p>MY PAGE</p>
//                     </button>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to='/project' className="link_txt">
//                     <button className="nav_button" >
//                       <img src={btn_deco} alt="이미지 존재하지 않음" className="button_deco"/>
//                       <p>MY MEMORY</p>
//                     </button>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to='/project/locker' className="link_txt">
//                     <button className="nav_button" >
//                       <img src={btn_deco} alt="이미지 존재하지 않음" className="button_deco"/>
//                       <p>CAPSULE BOX</p>
//                     </button>
//                   </Link>
//                 </div>
//                 <div>
//                   {/*리뷰페이지로 router추가해야함*/}
//                   <Link to='/review' className="link_txt">
//                     <button className="nav_button" >
//                       <img src={btn_deco} alt="이미지 존재하지 않음" className="button_deco"/>
//                       <p>REVIEW</p>
//                     </button>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link to='/notice' className="link_txt">
//                     <button className="nav_button" >
//                       <img src={btn_deco} alt="이미지 존재하지 않음" className="button_deco"/>
//                       <p>NOTICE</p>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <button onClick={showSidebar} className="nav_bar_active_btn2"><img src={navbar_activate} alt="이미지 존재하지 않음" className="navbar_pictogram"/></button>
//           </nav>
//         </SidebarNav>
//       </>
//   )
// }