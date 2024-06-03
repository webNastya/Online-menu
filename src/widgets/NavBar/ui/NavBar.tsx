import cls from "./NavBar.module.scss"
import { AppLink } from "shared/ui/AppLink"
import { ThemeToggle } from "features/ThemeToggle"
import { Sign } from "features/Sign"


export const NavBar = () => {
    return (
        <div className={cls.NavBar}>
            <AppLink to={'/'} className={cls.firstLink}>Меню</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
            <Sign/>
            <ThemeToggle/>
        </div>
    )
}
