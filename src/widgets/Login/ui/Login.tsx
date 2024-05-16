import classNames from "classnames"
import cls from "./Login.module.scss"
import { ChangeEvent, useState } from "react"
import { Button, ThemeButton } from "shared/ui/Button"
import { Input } from "shared/ui/Input"
import AuthService from "features/Authentication/api/api.auth"

interface LoginProops {
    className?: string
}

export const Login = ({className}: LoginProops) => {
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handlerAuth = () => {
        AuthService.login(login, password)
    }

    const togglePopupActive = () => {
        setIsPopupActive(isActive => !isActive)
    }
    return (
        <div className={classNames(cls.Login, className)}>
            {/* <Button theme={ThemeButton.DEFAULT} className={cls.signBtn} onClick={togglePopupActive}>Войти</Button> */}
            {/* <Popup toggleActive={togglePopupActive} isPopupActive={isPopupActive}> */}
                <div>Login</div>
                <Input value={login} onChange={(e:ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}></Input>
                <div>Password</div>
                <Input type="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></Input>
                <Button theme={ThemeButton.DEFAULT} onClick={handlerAuth}>Войти</Button>
            {/* </Popup> */}
        </div>
    )
}
