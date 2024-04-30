import classNames from "classnames"
import cls from "./Card.module.scss"
import { Button } from "shared/ui/Button"
import btn from "shared/ui/Button/Button.module.scss"

interface CardProops {
    className?: string
}

const Image = ["https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-01.omayt7lwfv4z..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-11.0qhkzm9fgmlu..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-13.7qdslzquzz8g..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-06.f63ulgnl4bab..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-09.rxblnqzczzda..png",
                "https://opis-cdn.tinkoffjournal.ru/mercury/pasta-types-12.qxx5hnruwhug..png"
]


export const Card = ({className}: CardProops) => {
    return (
        <div className={cls.Card}>
            <img src={Image[3]} alt=""  className={cls.img}/>
            
            <div className={cls.cardContainer}>
                <div className={cls.twoBlocks}>
                    <b>Паста с креветками</b>
                    <div>300г</div>
                </div>
                <div>Паста, специи, соус, королевские креветки</div>
                <div className={cls.twoBlocks}>
                    <div className={cls.price}>540 ₽</div>
                    <Button className={classNames(cls.Button, btn.clear)}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}
