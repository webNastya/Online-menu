import classNames from "classnames"
import cls from "./Loader.module.scss"

interface LoaderProops {
    className?: string
}

export const Loader = ({className}: LoaderProops) => {
    return (
        <div className={classNames(cls.Loader)}></div>
    )
}
