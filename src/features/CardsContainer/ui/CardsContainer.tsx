import classNames from "classnames"
import cls from "./CardsContainer.module.scss"
import { Card } from "widgets/Card/ui/Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import { CardType } from "widgets/Card/type/CardType"

interface CardsContainerProops {
    className?: string
}

export const CardsContainer = ({className}: CardsContainerProops) => {
    const [cards, setCards] = useState<CardType[]>()

    useEffect(()=>{
        axios
        .get("https://finalspaceapi.com/api/v0/character/?limit=2")
        .then(res => {
            setCards(res.data)
        });
    }, [])

    return (
        <div className={cls.CardsContainer}>
            {cards.map((cardData) => (
                <Card key={cardData.id} 
                    data={cardData}
                />
            ))}
        </div>
    )
}
