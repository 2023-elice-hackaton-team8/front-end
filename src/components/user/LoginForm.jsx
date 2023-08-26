import {Link, useNavigate} from "react-router-dom";
import useLoginEmail from "../../hooks/useLoginEmail";
import Swal from "sweetalert2";

const LoginForm = ({ form, setForm }) => {

    const navigate = useNavigate();
    const { isValidEmail, setIsValidEmail, loginUser, validateEmail } = useLoginEmail();

    const handleSignupPage = () => {
        navigate('/');
    };

    const showAlert = (title, text, icon) => {
        Swal.fire({
            title,
            text,
            icon,
        });
    };

    const sendLoginDataServer = async (e) => {
        e.preventDefault();
        const userId = form.id;
        const password = form.password;

        if (userId.length === 0 || !isValidEmail) {
            showAlert("Error", "아이디 형식이 잘못 되었습니다.", "error");
            return;
        }

        if (password.length < 4) {
            showAlert("Error", "비밀번호 길이는 4자 이상입니다.", "error");
            return;
        }

        const loginData = {
            userId: userId,
            password: password,
        };
        await loginUser(loginData);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });

        if (id === 'id') {
            setIsValidEmail(validateEmail(value));
        }
    };

    return (
        <div className="login_forms_body">
            <div>
                <div className="forms_set_layout">
                    <form className="forms_set_form">
                        <div>
                            <input
                                id="id"
                                type="email"
                                placeholder="e-mail"
                                value={form.id}
                                onChange={handleChange}
                                required
                            />

                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                            <div>
                                <Link to="/find-password" className="find_pw">
                                    비밀번호 찾기
                                </Link>
                            </div>
                        </div>
                        <div className="buttonStyle">
                            <button onClick={sendLoginDataServer} className="acceptButton">
                                로그인
                            </button>
                        </div>
                        <div className="buttonStyle">
                            <button onClick={handleSignupPage} className="rejectButton">회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
