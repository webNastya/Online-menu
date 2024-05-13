import classNames from "classnames"
import cls from "./NavBar.module.scss"
import { AppLink } from "shared/ui/AppLink"
import { ThemeToggle } from "widgets/ThemeToggle"
import { Sign } from "widgets/Sign"

interface NavBarProops {
    className?: string
}

export const NavBar = ({className}: NavBarProops) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <AppLink to={'/'} className={cls.firstLink}>Меню</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
            <Sign/>
            <ThemeToggle/>
        </div>
    )
}
