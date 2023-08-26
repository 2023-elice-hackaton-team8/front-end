import React, {useEffect, useState} from "react";
import SelectLevel from "../components/selector/SelectLevel";

const BlackMousePage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const grade = [
        {id : 1, value: "초급"},
        {id : 2, value: "중급"},
        {id : 3, value: "고급"},
    ]

    const [selectedLevel, setSelectedLevel] = useState('');

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    const [subject, setSubject] = useState([
        "국어",
        "수학",
        "사회탐구",
        "과학탐구",
        "직업탐구",
        "제2외국어/한문",
    ])
    const [mainSubject, setMainSubject] = useState(null)
    const [middleSubject, setMiddleSubject] = useState(null)

    const [subjectList, setSubjectList] = useState(
        {
            subjects: [
                {
                    name: "국어",
                    subtopics: [],
                },
                {
                    name: "수학",
                    subtopics: [],
                },
                {
                    name: "사회탐구",
                    subtopics: [
                        {
                            name: "사회 문화 현상의 탐구",
                            subtopics: [
                                "사회 문화 현상의 이해",
                                "사회 문화 현상의 연구 방법",
                                "자료 수집 방법",
                                "사회 문화 현상의 탐구 태도와 연구 윤리"
                            ],
                        },
                        {
                            name: "개인과 사회 구조",
                            subtopics: [
                                "사회적 존재로서의 인간",
                                "사회 집단과 사회 조직",
                                "사회 구조와 일탈 행동"
                            ],
                        },
                        {
                            name: "문화와 일상생활",
                            subtopics: [
                                "문화의 이해",
                                "현대 사회의 문화 양상",
                                "문화 변동의 양상과 대응"
                            ],
                        },
                        {
                            name: "사회 계층과 불평등",
                            subtopics: [
                                "사회 불평등 현상의 이해",
                                "사회 이동과 사회 계층 구조",
                                "다양한 사회 불평등 현상",
                                "사회 복지와 보기 제도"
                            ],
                        },
                        {
                            name: "현대 사회 변동",
                            subtopics: [
                                "사회 변동과 사회 운동",
                                "현대 사회의 변화와 전 지구적 수준의 문제"
                            ],
                        },
                    ],
                },
                {
                    name: "과학탐구",
                    subtopics: [],
                },
                {
                    name: "직업탐구",
                    subtopics: [],
                },
                {
                    name: "제2외국어/한문",
                    subtopics: [],
                },
            ],
        });

    useEffect(() => {
        console.log(subjectList)

        subjectList.subjects.forEach((newsubject, index) => {

        });

    }, []);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };
    return (
        <>
            <div>
                blackMouse
            </div>

            <div className="blackMouse">
                <div className="head_Mouse">
                    <div>select</div>
                    <SelectLevel onSelectLevel={handleLevelSelect} />
                </div>
                <div className="Mouse">
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlackMousePage;
