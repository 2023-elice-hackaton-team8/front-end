import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

const useSignup = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // 비밀번호 일치 여부 확인 함수
  const passwordChecking = (password, passwordCheck) => {
    return password === passwordCheck;
  };

  // 체크박스 값 변경 이벤트 핸들러 함수
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // 회원가입 데이터 서버로 전송 함수
  const sendSignupDataServer = async (signupData) => {
    const signupURL = '/user/signup'
    console.log('회원가입 정보 서버 제출 함수 작동 확인')
    console.log('세션 스토리지 확인', sessionStorage)
    console.log(signupData)
    try {
      await axios.post(`${signupURL}`, signupData, {
        headers : {
          "Content-Type": "multipart/form-data",
        }
      })
        .then(res => {
          console.log('회원가입 성공', res)
          navigate('/login')
        })
        .catch(err => {
          if (err.response && err.response.status === 409) {
            Swal.fire('경로가 잘못되었습니다.')
          }
          else if (err.response && err.response.status === 400) {
            Swal.fire('에러에러')
          }
          Swal.fire('서버에서 회원가입 실패')
          console.log('서버에서 회원가입 실패', err)
        })
    } catch (error) {
      console.error("회원가입 에러 발생", error);
    }
  };

  return {
    isValidEmail,
    setIsValidEmail,
    validateEmail,
    isChecked,
    setIsChecked,
    handleCheckBoxChange,
    passwordChecking,
    sendSignupDataServer,
  };
};

export default useSignup;
