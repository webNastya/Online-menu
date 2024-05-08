import classNames from "classnames"
import cls from "./Popup.module.scss"
import { FC } from "react"
import { Button, ThemeButton } from "../Button"

interface PopupProops {
    handlerOpenPopap: () => void
    isPopupActive: boolean
}

export const Popup:FC<PopupProops> = (props) => {
    const {handlerOpenPopap, isPopupActive, children} = props

    return (
        <div hidden={isPopupActive} className={cls.PopupWrap}
            onClick={handlerOpenPopap}>
            <div className={cls.popup}
                    onClick={(e)=>e.stopPropagation()}>
                <Button 
                    className={classNames(cls.closeBtn)}
                    theme={ThemeButton.DEFAULT} 
                    onClick={handlerOpenPopap}
                >X</Button>
            {children}
            </div>
        </div>
    )
}
