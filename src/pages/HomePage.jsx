import {Link, useNavigate} from "react-router-dom";
import "../styles/HomePage.scss"
import React, {useEffect, useState} from "react";
import whiteMouse from "../assets/images/whiteMouse.png";
import blackMouse from "../assets/images/blackMouse.png";

const HomePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");
        console.log(accessToken);
        const loginCheck = (!!accessToken);

        console.log(loginCheck)
        if (!loginCheck) {
            navigate('/login')
        }
    })

    return (
        <>
            <div className="home_body">
                <div className="home_buttons">
                    <Link to='/whitemouse' className="home_link" >
                        <button className="home_button">
                            <div className="home_button_right">
                                <h2>백쥐</h2>
                                <p>학습자가 내용을 타이핑해서 채점</p>
                            </div>
                            <div className="mouse_img_white">
                                <img src={whiteMouse} alt="whiteMouse" className="mouse_img"/>
                            </div>
                        </button>
                    </Link>
                    <Link to='/blackmouse' className="home_link">
                        <button className="home_button">
                            <div className="home_button_left">
                                <h2>깜쥐</h2>
                                <p>사진을 찍어 올려 학습한 내용을 채점</p>
                            </div>
                            <div className="mouse_img_black">
                                <img src={blackMouse} alt="blackMouse" className="mouse_img"/>
                            </div>
                        </button>
                    </Link>
                </div>
                <Link to='/problemlist' className="note_link" >
                    <button className="note_button">
                        내글씨 정리노트
                    </button>
                </Link>
            </div>
        </>
    )
}

export default HomePage;
