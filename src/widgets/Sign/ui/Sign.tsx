import classNames from "classnames"
import cls from "./Sign.module.scss"
import { ChangeEvent, useState } from "react"
import { Button, ThemeButton } from "shared/ui/Button"
import { Popup } from "shared/ui/Popup"
import { Input } from "shared/ui/Input"
import AuthService from "features/Authentication/api/api.auth"
import CheckLogined from "shared/utils/CheckLogined"

interface SignProops {
    className?: string
}

export const Sign = ({className}: SignProops) => {
    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()
    const logined = CheckLogined()

    const handlerAuth = () => {
        AuthService.login(login, password)
    }

    const handlerLogout = () => {
        AuthService.logout()
    }

    const togglePopupActive = () => {
        setIsPopupActive(isActive => !isActive)
    }
    return (
        <div className={classNames(cls.Sign, className)}>
            { logined
                ? <Button theme={ThemeButton.DEFAULT} className={cls.signBtn} onClick={handlerLogout}>Выйти</Button>
                // : <Button theme={ThemeButton.DEFAULT} className={cls.signBtn} onClick={togglePopupActive}>Войти</Button>
                : null
            }
            <Popup toggleActive={togglePopupActive} isPopupActive={isPopupActive}>
                <div>Login</div>
                <Input value={login} onChange={(e:ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}></Input>
                <div>Password</div>
                <Input type="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></Input>
                <Button theme={ThemeButton.DEFAULT} onClick={handlerAuth}>Войти</Button>
            </Popup>
        </div>
    )
}
