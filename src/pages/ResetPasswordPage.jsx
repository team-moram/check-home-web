import TopAppBar from "../common/TopAppBar.jsx";
import Content from "../common/Content.jsx";
import TextInput from "../common/TextInput.jsx";
import TextBox from "../common/TextBox.jsx";
import {useEffect, useState} from "react";
import Button from "../common/Button.jsx";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [disabled, setDisabled] = useState(true)

    const [validatePasswordMessage, setValidatePasswordMessage] = useState("")
    const [validateConfirmPasswordMessage, setValidateConfirmPasswordMessage] = useState("")

    const navigate = useNavigate()

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
        return regex.test(password)
    }

    useEffect(() => {
        if (password === "" || isValidPassword(password)) {
            setValidatePasswordMessage("")
        }
        if (confirmPassword === "" || password === confirmPassword) {
            setValidateConfirmPasswordMessage("")
        }
        if (!isValidPassword(password) && password !== "") {
            setValidatePasswordMessage("영문, 숫자, 특수문자를 포함해 8자 이상으로 입력해주세요.")
        }
        if (confirmPassword !== "" && password !== "" && password !== confirmPassword) {
            setValidateConfirmPasswordMessage("입력한 비밀번호가 서로 일치하지 않습니다.")
        }
        if (isValidPassword(password) && password === confirmPassword) {
            setDisabled(false)
            return
        }
        setDisabled(true)
    }, [password, confirmPassword])

    return (
        <div>
            <TopAppBar name={"비밀번호 재설정"}/>
            <Content>
                <div className={"reset-password-container"}>
                    <div className={"reset-password-form-area"}>
                    <TextInput title={"새로운 비밀번호"} placeholder={"영문, 숫자, 특수문자 포함 8자리 이상"} type={"password"}
                               validateMessage={validatePasswordMessage}
                               value={password} onChangeValue={(e) => setPassword(e.target.value)}/>
                    <TextBox placeholder={"비밀번호 확인"} type={"password"}
                             validateMessage={validateConfirmPasswordMessage}
                             value={confirmPassword} onTextBoxChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <Button disable={disabled} btnText={"적용하기"} onClick={() => navigate("/reset-password/success")}/>
                </div>
            </Content>
        </div>
    )
}

export default ResetPasswordPage