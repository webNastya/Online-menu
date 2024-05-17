import cls from "./LoginForm.module.scss"
import { Input } from "shared/ui/Input"
import { ChangeEvent, useState } from "react"
import { Button, ThemeButton } from "shared/ui/Button"
import AuthService from "features/Authentication/api/api.auth"

export const LoginForm = () => {
    const [login, setLogin] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handlerAuth = () => {
        AuthService.login(login, password)
    }
    
    return (
        <div className={cls.LoginForm}>
            <div>Login</div>
            <Input value={login} 
                onChange={(e:ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}>
            </Input>

            <div>Password</div>
            <Input type="password" 
                value={password} 
                onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}>
            </Input>

            <Button className={cls.loginBtn} 
                theme={ThemeButton.DEFAULT} 
                onClick={handlerAuth}
            >Войти</Button>
        </div>
    )
}
