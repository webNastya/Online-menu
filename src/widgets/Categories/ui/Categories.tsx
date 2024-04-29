import classNames from "classnames"
import cls from "./Categories.module.scss"
import Cupcake from "../assets/cupcake.svg"
import Pizza from "../assets/pizza.svg"
import Tea from "../assets/tea.svg"
import Pasta from "../assets/pasta.svg"

interface NavBarProops {
    className?: string
}

export const Categories = ({className}: NavBarProops) => {
    return (
        <div className={classNames(cls.Categories, className)}>
            <div className={cls.category}>
                <Pasta className={cls.img} />
                <div>Паста</div>
            </div>

            <div className={cls.category}>
                <Pizza className={cls.img} />
                <div>Пицца</div>
            </div>

            <div className={cls.category}>
                <Cupcake className={cls.img} />
                <div>Десерты</div>
            </div>

            <div className={cls.category}>
                <Tea className={cls.img} />
                <div>Чай</div>
            </div>
        </div>
    )
}
