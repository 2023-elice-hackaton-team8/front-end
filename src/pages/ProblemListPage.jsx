import {Link, useNavigate} from "react-router-dom";
import "../styles/problemListPage.scss"
import React, {useEffect, useState} from "react";
import axios from "axios";
import DetailArticle from "../components/DetailArticle";

const ProblemListPage = () => {
    const baseURL = "https://15.165.26.250:8084";
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
        console.log(sessionStorage)

        const userIdx = sessionStorage.getItem("userIdx")
        const accessToken = sessionStorage.getItem("accessToken")

        axios.get(`${baseURL}${API}/previous`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                console.log('MainSubjectSelect sucess : ', response.data.result);
                setArticles(response.data.result);
            })
            .catch((error) => {
                console.error('mainsubject fail : ', error);
            });
    }, [])

    return (
        <>
            <div className="article_list">
                <div className="article_header">
                    <h2>내 글씨 정리노트</h2>
                </div>
                {
                    articles?
                    articles.map((article) => (
                        <DetailArticle
                            article={article}
                        />
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
