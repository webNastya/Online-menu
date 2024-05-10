import classNames from "classnames"
import cls from "./Popup.module.scss"
import { FC } from "react"
import { Button, ThemeButton } from "../Button"

interface PopupProops {
    handlerOpenPopap: () => void
    isPopupActive: boolean
    position?: "center" | "top"
}

export const Popup:FC<PopupProops> = (props) => {
    const {handlerOpenPopap, isPopupActive, position = "center", children} = props

    return (
        <>
            { isPopupActive &&
                <div hidden={!isPopupActive} className={cls.PopupWrap}
                    onClick={handlerOpenPopap}>
                    <div className={classNames(cls.popup, cls[position])}
                            onClick={(e)=>e.stopPropagation()}>
                        <Button 
                            className={classNames(cls.closeBtn)}
                            theme={ThemeButton.DEFAULT} 
                            onClick={handlerOpenPopap}
                        >X</Button>
                    {children}
                    </div>
                </div>
            }
        </>
    )
}
