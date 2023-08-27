import arrow from "../assets/images/arrow-down.svg";
import {useState} from "react";

const DetailArticle = ({ article }) => {
    const [openDetailDiv, setOpenDetailDiv] = useState(false)

    const openDetail = () => {
        if (openDetailDiv) {
            setOpenDetailDiv(false);
        } else {
            setOpenDetailDiv(true);
        }
    };

    return (
        <div className="article">
            <div className="article_button" onClick={openDetail}>
                <div className="article_title">
                    {article.examExplanation}
                </div>
                <div className="article_tags">
                    <div className="article_tag">
                        {article.subject}
                    </div>
                    <div className="article_tag">
                        {article.examType}
                    </div>
                </div>
                <div className="article_toggle">
                    <img src={arrow}/>
                </div>
            </div>
            {
                openDetailDiv &&
                <div className="article_detail">
                    <p className="article_detail_text">
                        {article.feedback}
                    </p>
                </div>
            }
        </div>
    );
};

export default DetailArticle;
