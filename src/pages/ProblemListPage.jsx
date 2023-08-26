import {Link, useNavigate} from "react-router-dom";
import "../styles/problemListPage.scss"
import React, {useEffect, useState} from "react";
import arrow from "../assets/images/arrow-down.svg";

const ProblemListPage = () => {
    const baseURL = "http://15.165.26.250:8080";
    const API = "/exams";

    const [articles, setArticles] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loginCheck = !!sessionStorage.getItem("accessToken")
        console.log(loginCheck)
        if (!loginCheck) {
            navigate('/login')
        }
    })

    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken")

        // axios.get(`${baseURL}${API}?userId=${}`,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`
        //         }
        //     })
        //     .then((response) => {
        //         console.log('MainSubjectSelect sucess : ', response.data.result);
        //         setProblem(response.data.result);
        //     })
        //     .catch((error) => {
        //         console.error('mainsubject fail : ', error);
        //     });
        // setOnProblemSelect(true);
    })

    return (
        <>
            <div className="article_list">
                {
                    articles?
                    articles.map((article) => (
                        <div className="article">
                            <div className="article_button">
                                <div className="article_title">
                                    문제 제목
                                </div>
                                <div className="article_tags">
                                    문제 태그
                                </div>
                                <div className="article_toggle">
                                    <img src={arrow}/>
                                </div>
                            </div>
                        </div>
                    ))
                    :<div className="article_none">
                        아직 문제를 풀지 않았어요!
                    </div>
                }
            </div>
        </>
    )
}

export default ProblemListPage;
