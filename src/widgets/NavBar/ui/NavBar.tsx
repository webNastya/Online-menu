import classNames from "classnames"
import cls from "./NavBar.module.scss"
import { AppLink } from "shared/ui/AppLink"
import { ThemeToggle } from "widgets/ThemeToggle"

interface NavBarProops {
    className?: string
}

export const NavBar = ({className}: NavBarProops) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <AppLink to={'/'} className={cls.firstLink}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
            <ThemeToggle/>
        </div>
    )
}
