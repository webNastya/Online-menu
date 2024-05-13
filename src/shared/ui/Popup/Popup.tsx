import classNames from "classnames"
import cls from "./Popup.module.scss"
import { FC } from "react"
import { Button, ThemeButton } from "../Button"

interface PopupProops {
    toggleActive: () => void
    isPopupActive: boolean
    position?: "center" | "top"
}

export const Popup:FC<PopupProops> = (props) => {
    const {toggleActive, isPopupActive, position = "center", children} = props

    return (
        <>
            { isPopupActive &&
                <div hidden={!isPopupActive} className={cls.PopupWrap}
                    onClick={toggleActive}>
                    <div className={classNames(cls.popup, cls[position])}
                            onClick={(e)=>e.stopPropagation()}>
                        <Button 
                            className={classNames(cls.closeBtn)}
                            theme={ThemeButton.DEFAULT} 
                            onClick={toggleActive}
                        >X</Button>
                    {children}
                    </div>
                </div>
            }
        </>
    )
}
