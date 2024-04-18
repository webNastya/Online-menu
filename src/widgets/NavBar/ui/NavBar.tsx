import classNames from "classnames"
import { Link } from "react-router-dom"
import cls from "../styles/NavBar.module.scss"

interface NavBarProops {
    className?: string
}

export const NavBar = ({className}: NavBarProops) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    )
}
