import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./AddProduct.module.scss"
import { ChangeEvent, useRef, useState } from "react"
import axios, { toFormData } from "axios"
import classNames from "classnames"
import { Popup } from "shared/ui/Popup"

interface FormProps {
    textButtonForm: string
    handlerOpenPopap: () => void
    isPopupActive: boolean
}

export const AddProduct = ({textButtonForm, handlerOpenPopap, isPopupActive}: FormProps) => {
    const [title, setTitle] = useState<string>()
    const [composition, setComposition] = useState<string>()
    const [img, setImg] = useState<File>()
    const [weight, setWeight] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)

    const uploadFileRef = useRef<HTMLInputElement>()

    const handleFileUploadClick = () => {
        uploadFileRef.current.click()
    }

    const handleFileUploadChange = (event: any) => {
        const file = event.target.files[0]
        setImg(file)
    }

    const handleSubmit = () => {
        sendProductData()
        handlerOpenPopap()
    }

    const sendProductData = () => {
        let formData = toFormData({ img, title, composition, weight, price })

        axios
            .post('http://localhost:3001/products', formData,
                { headers: {'Content-Type': 'multipart/form-data'}}
            )
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <Popup handlerOpenPopap={handlerOpenPopap } isPopupActive={isPopupActive}>
            <div className={classNames(cls.AddProduct)}>
                <input type='text' 
                    placeholder='Заголовок'
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
                <input type='text' 
                    placeholder='Ингриндиенты'
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setComposition(e.target.value)}}/>
                <input type='text' 
                    placeholder='Вес'
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setWeight(+e.target.value)}}/>
                <input type='text' 
                    placeholder='Цена'
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPrice(+e.target.value)}}/>
                
                <input hidden ref={uploadFileRef} type='file' onChange={handleFileUploadChange}/>
                <Button
                    theme={ThemeButton.DEFAULT}
                    className={cls.addFileBtn}
                    onClick={handleFileUploadClick}>
                        Выберите файл
                </Button>
                <Button
                    type='submit'
                    theme={ThemeButton.DEFAULT}
                    onClick={handleSubmit}>
                        {textButtonForm}
                </Button>
            </div>
        </Popup>
    )
}
