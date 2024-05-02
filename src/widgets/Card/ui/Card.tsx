import classNames from "classnames"
import cls from "./Card.module.scss"
import { Button } from "shared/ui/Button"
import btn from "shared/ui/Button/Button.module.scss"
import { CardType } from "../type/CardType"

interface CardProops {
    className?: string
    data: CardType
}

const Image = ["https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-01.omayt7lwfv4z..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-11.0qhkzm9fgmlu..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-13.7qdslzquzz8g..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-06.f63ulgnl4bab..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-09.rxblnqzczzda..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-12.qxx5hnruwhug..png"
]


export const Card = ({className, data}: CardProops) => {
    const {id, image, title, weight, description, price} = data
    return (
        <div className={classNames(cls.Card, className)}>
            <img src={data.image} alt=""  className={cls.img}/>
            
            <div className={cls.cardContainer}>
                <div className={cls.twoBlocks}>
                    <b>{data.title}</b>
                    <div>{data.weight}г</div>
                </div>
                <div>{data.description}</div>
                <div className={cls.twoBlocks}>
                    <div className={cls.price}>{data.price} ₽</div>
                    <Button className={classNames(cls.Button, btn.clear)}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}
