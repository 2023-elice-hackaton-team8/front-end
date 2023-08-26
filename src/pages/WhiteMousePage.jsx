import React, {useEffect, useState} from "react";
import "../styles/Mouse.scss"
import SelectLevel from "../components/selector/SelectLevel";
import axios from "axios";

const WhiteMousePage = () => {
    const baseURL = "http://15.165.26.250:8080";
    const API = "/exams";
    const [selectedItem, setSelectedItem] = useState(null);

    const grade = [
        {id : 1, value: "초급"},
        {id : 2, value: "중급"},
        {id : 3, value: "고급"},
    ]

    const [selectedLevel, setSelectedLevel] = useState({id : 1, value: "초급"});

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    const [subjects, setSubjects] = useState([
        "국어",
        "수학",
        "사회탐구",
        "과학탐구",
        "직업탐구",
        "제2외국어/한문",
    ])
    const [selectedSubject, setSelectedSubject] = useState(null)


    const [mainSubject, setMainSubject] = useState(null)
    const [selectedMainSubject, setSelectedMainSubject] = useState(null)
    const [middleSubject, setMiddleSubject] = useState(null)
    const [selectedMiddleSubject, setSelectedMiddleSubject] = useState(null)

    useEffect(() => {
        console.log(selectedSubject);
        getSubjectList(selectedSubject);
    }, [selectedSubject]);

    const getSubjectList = (e) => {
        console.log("e", e);
        if (!e) {
            return;
        }
        const accessToken = sessionStorage.getItem("accessToken")
        console.log(sessionStorage, accessToken, e);

        ///friend/getDetailedFriendList/{userId}
        axios.get(`${baseURL}${API}/sub-title?title=${e}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                setMainSubject(response.data);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
    };

    const MainSubjectSelect = (item) => {
        const value = item.target.value;
        console.log(value);
        setSelectedSubject(value);
    };

    return (
        <>
            <div className="Mouse">
                <div className="head_whiteMouse">
                    <h2>백쥐</h2>
                    <SelectLevel onSelectLevel={handleLevelSelect} />
                </div>
                <div className="MouseList">
                    <div>
                        <div>
                            과목
                        </div>
                        <div>

                        </div>
                        <div>
                            {
                                subjects &&
                                subjects.map((subject) => (
                                <button key={subject} value={subject} onClick={MainSubjectSelect}>
                                    {subject}
                                </button>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            과목
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div>
                            과목
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhiteMousePage;
