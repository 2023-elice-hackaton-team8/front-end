import "../../styles/MainStyle.scss"
import mainLogo from "../../assets/images/mainLogo.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_contents_box">
          <img src={mainLogo} className="footer_contents_Logo"/>
          <div className="footer_contents_textbox">
            <div className="footer_contents_txt">
              <p>백쥐깜쥐</p>
              <p>서비스 소개</p>
              <p>이용약관</p>
              <p>개인정보처리방침</p>
              <p>운영정책</p>
              <p>고객센터</p>

            </div>
            <div className="footer_contents_copyright">
              <p>ⓒ2023. 백쥐깜쥐 All rights reserved.</p>
            </div>
          </div>
        </div>
        {/*<h3>Footer 영역</h3>*/}
        {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
        {/*  <button onClick={handleBack}>뒤로</button>*/}
        {/*  <button onClick={handleFront}>앞으로</button>*/}
        {/*</div>*/}

      </div>
    </>
  )
}

export default Footer;
