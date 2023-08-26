import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import WhiteMousePage from "./WhiteMousePage";
import NotFound from "./NotFound";
import LoginPage from "./user/LoginPage";
import SignupPage from "./user/SignupPage";
// import FindPassWordPage from "./auth/FindPassWordPage";
// import MyPage from "./user/MyPage";
// import EditProfilePage from "./user/EditProfilePage";
// import UserProfilePage from "./user/UserProfilePage";
// import ProjectDetailPage from "./project/ProjectDetailPage";
// import ProjectListPage from "./project/ProjectListPage";
// import ProjectCreatePage from "./project/ProjectCreatePage";

import WhiteMouse from "./WhiteMousePage";
import BlackMouse from "./BlackMousePage";
// import ProblemList from "./ProblemList";/
// import HowToUse from "./HowToUse";/
// import LogOut from "./LogOut";/

export default function Routers() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      {/*<Route path='/find-password' element={<FindPassWordPage />} />*/}
      {/*<Route path='/profile' element={<UserProfilePage />} />*/}
      {/*<Route path='profile/edit' element={<EditProfilePage />} />*/}
      <Route path='/main' element={<WhiteMousePage />} />
      {/*<Route path='/project' element={<ProjectListPage />} />*/}
      {/*<Route path='/project/create' element={<ProjectCreatePage />} />*/}
      {/*<Route path='/project/:projectId' element={<ProjectDetailPage />} />*/}
      {/*<Route path='/loading' element={<LoadingPage />} />*/}


      <Route path='/whitemouse' element={<WhiteMouse />} />
      <Route path='/blackmouse' element={<BlackMouse />} />
      {/*<Route path='/problemlist' element={<ProblemList />} />*/}
      {/*<Route path='/howtouse' element={<HowToUse />} />*/}
      {/*<Route path='/logout' element={<LogOut />} />*/}

      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
};
