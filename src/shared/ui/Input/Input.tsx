import { FC } from "react"
import cls from "./Input.module.scss"

interface InputProops {
    type?: string
    value: string | number
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input:FC<InputProops> = (props) => {
    const {type = "text", value, placeholder, onChange} = props
    return (
        <input className={cls.input}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
