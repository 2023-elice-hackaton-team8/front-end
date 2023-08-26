import React, {useEffect, useState} from "react";
import "../styles/Mouse.scss"
import SelectLevel from "../components/selector/SelectLevel";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import whiteMouse from "../assets/images/whiteMouse.png";

const WhiteMousePage = () => {
    const baseURL = "http://15.165.26.250:8080";
    const API = "/exams";
    const navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);
    const [onProblemSelect, setOnProblemSelect] = useState(false);

    const grade = [
        {id : 1, value: "초급"},
        {id : 2, value: "중급"},
        {id : 3, value: "고급"},
    ]

    const [selectedLevel, setSelectedLevel] = useState(null);

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    const [subjects, setSubjects] = useState([
        "국어",
        "수학",
        "사회문화",
        "과학탐구",
        "직업탐구",
        "제2외국어/한문",
    ])
    const [selectedSubject, setSelectedSubject] = useState(null)
    const [mainSubject, setMainSubject] = useState(null)
    const [selectedMainSubject, setSelectedMainSubject] = useState(null)
    const [middleSubject, setMiddleSubject] = useState(null)
    const [selectedMiddleSubject, setSelectedMiddleSubject] = useState(null)
    const [problem, setProblem] = useState(null)
    const [request, setRequest] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        console.log(selectedSubject);
        getSubjectList(selectedSubject);
    }, [selectedSubject]);

    useEffect(() => {
        console.log(selectedMainSubject);
        getMiddleSubjectList(selectedMainSubject);
    }, [selectedMainSubject]);

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
                console.log(response);
                setMainSubject(response.data.result.titles);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
    };

    const getMiddleSubjectList = (e) => {
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
                console.log('MainSubjectSelect sucess : ', response.data.result.titles);
                setMiddleSubject(response.data.result.titles);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
    };

    const SubjectSelect = (item) => {
        const value = item.target.value;
        setSelectedSubject(value);
        setMiddleSubject([]);
        setSelectedMainSubject(null);
        setSelectedMiddleSubject(null);
    };

    const MainSubjectSelect = (item) => {
        const value = item.target.value;
        setSelectedMainSubject(value);
    };

    const MiddleSubjectSelect = (item) => {
        const value = item.target.value;
        setSelectedMiddleSubject(value);
    };

    const requestChange = (e) => {
        e.preventDefault()
        const value = e.target.value;

        setRequest(value);
    }

    const submitSelect = () => {
        const accessToken = sessionStorage.getItem("accessToken")

        console.log(selectedMiddleSubject, selectedLevel);

        if (selectedMiddleSubject === null) {
            return;
        } else if(selectedLevel === null) {
            return;
        }

        axios.get(`${baseURL}${API}?subjectMid=${selectedMiddleSubject}&type=${selectedLevel}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                console.log('MainSubjectSelect sucess : ', response.data.result);
                setProblem(response.data.result);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
        setOnProblemSelect(true);
    };

    const submitProblem = () => {
        const accessToken = sessionStorage.getItem("accessToken")

        console.log("problem.id, request", problem.examId, request)

        if (request === null) {
            return;
        }

        axios.post(`${baseURL}${API}/white-mouse?examId=${problem.examId}&answer=${request}`, null,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            .then((response) => {
                console.log('MainSubjectSelect sucess : ', response.data);
                setResult(response.data.result);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
        setOnProblemSelect(true);
    };

    return (
        <>
            <div className="Mouse">
                <div className="head_whiteMouse">
                    <h1>백쥐</h1>
                    <SelectLevel onSelectLevel={handleLevelSelect} />
                </div>
                <div className="line">
                    {onProblemSelect &&
                    <img src={whiteMouse} alt="whiteMouse" className="mouse_img"/>
                    }
                </div>
                {
                    onProblemSelect?
                        <>
                            <div className="problem">
                                <p>
                                    "{problem && problem.explanation}"
                                </p>
                            </div>
                            <div className="request">
                                <textarea value={request} onChange={requestChange}/>
                            </div>

                            <div className="submit">
                                <button className="submit_button" onClick={submitProblem}>
                                    제출하기
                                </button>
                            </div>
                        </>
                    :
                        <>
                            <div className="MouseList">
                                <div className="box">
                                    <div className="title">
                                        과목
                                    </div>
                                    <div className="selected">
                                        {
                                            selectedSubject ?
                                                selectedSubject
                                                : "과목을 선택하세요"
                                        }
                                    </div>
                                    <div className="selecting_list">
                                        {
                                            subjects &&
                                            subjects.map((subject) => (
                                                <button key={subject} value={subject} onClick={SubjectSelect}>
                                                    {subject}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        대단원
                                    </div>
                                    <div className="selected">
                                        {
                                            selectedMainSubject ?
                                                selectedMainSubject
                                                : "대단원을 선택하세요"
                                        }
                                    </div>
                                    <div className="selecting_list">
                                        {
                                            mainSubject &&
                                            mainSubject.map((subject) => (
                                                <button key={subject} value={subject} onClick={MainSubjectSelect}>
                                                    {subject}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="title">
                                        중단원
                                    </div>
                                    <div className="selected">
                                        {
                                            selectedMiddleSubject ?
                                                selectedMiddleSubject
                                                : "중단원을 선택하세요"
                                        }
                                    </div>
                                    <div className="selecting_list">
                                        {
                                            middleSubject &&
                                            middleSubject.map((subject) => (
                                                <button key={subject} value={subject} onClick={MiddleSubjectSelect}>
                                                    {subject}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="submit">
                                <button className="submit_button" onClick={submitSelect}>
                                    찾아보기
                                </button>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default WhiteMousePage;
