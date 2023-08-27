import {  useState } from "react";
import { useDispatch } from 'react-redux';
import {loginUserThunk} from "../store/userSlice";

const useLoginEmail = () => {
  const dispatch = useDispatch();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const loginUser = async (loginData) => {
    try {
      await dispatch(loginUserThunk(loginData));
    } catch (err) {
    }
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]/;
    return emailPattern.test(email);
  };

  return { isValidEmail, setIsValidEmail, loginUser, validateEmail };
};

export default useLoginEmail;
