import classNames from "classnames"
import cls from "./Button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"

export enum ThemeButton {
    CLEAR = "clear",
    DEFAULT = "default",
    DEFAULT_DISABLED = "default-disabled"
}

interface ButtonProops extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button:FC<ButtonProops> = (props) => {
    const {
        className, 
        children,
        theme,
        ...otherProops
    } = props

    return (
       <button className={classNames(cls.Button, cls[theme], className)}
        {...otherProops}
       >
            {children}
       </button>
    )
}
