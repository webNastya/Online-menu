import classNames from "classnames"
import { Link, LinkProps } from "react-router-dom"
import cls from "./AppLink.module.scss"
import { FC } from "react"

interface AppLinkProops extends LinkProps {
    className?: string
}

export const AppLink:FC<AppLinkProops> = (props) => {
    const {to, className, children} = props

    return (
        <Link to={to} className={classNames(cls.AppLink, className)}>
            {children}
        </Link>
    )
}
