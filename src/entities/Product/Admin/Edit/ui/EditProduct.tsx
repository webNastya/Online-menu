import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./EditProduct.module.scss"
import { ChangeEvent, FC, useRef, useState } from "react"
import axios, { toFormData } from "axios"
import classNames from "classnames"
import { Popup } from "shared/ui/Popup"
import Edit from "../../../assets/edit.svg"
import { ProductType } from "entities/Product/type/ProductType"

interface EditProductProps {
    data: ProductType,
    editCallback: () => void
}

export const EditProduct:FC<EditProductProps> = ({data, editCallback}) => {
    const [title, setTitle] = useState<string>(data.title)
    const [composition, setComposition] = useState<string>(data.composition)
    const [img, setImg] = useState<File>()
    const [weight, setWeight] = useState<number>(data.weight)
    const [price, setPrice] = useState<number>(data.price)

    const [isPopupActive, setIsPopupActive] = useState<boolean>(true)
    const uploadFileRef = useRef<HTMLInputElement>()

    const handlerOpenPopap = () => {
        setIsPopupActive(active => !active)
    }

    const handleFileUploadClick = () => {
        uploadFileRef.current.click()
    }

    const handleFileUploadChange = (event: any) => {
        const imageFile = event.target.files[0]
        setImg(imageFile)
    }

    const handleEdit = (data: ProductType) => {
        const formData = toFormData(data)

        axios
            .patch("http://localhost:3001/products/"+data.id, 
                formData,
                { headers: {
                    'Content-Type': 'multipart/form-data'
                }}
            )
            .then(res => {
                editCallback()
            })
            .catch(er => {
                console.log(er)
            })
    }

    const handleSubmit = () => {
        handleEdit({
            id: data.id,
            img: img ?? "",
            title: title,
            weight: weight,
            description: data.description,
            composition: composition,
            price: price
        })
        handlerOpenPopap()
    }

    return(
        <div>
            <Button 
                theme={ThemeButton.DEFAULT} 
                onClick={handlerOpenPopap}>
                <Edit className={cls.svg}/>
            </Button>

            <Popup 
                position="top"
                handlerOpenPopap={handlerOpenPopap}
                isPopupActive={isPopupActive}
            >
                <div className={classNames(cls.EditProduct)}>
                    {/* Product text Fields */}
                    <input type='text' 
                        value={title}
                        placeholder='Заголовок'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
                    <input type='text' 
                        value={composition}
                        placeholder='Ингриндиенты'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setComposition(e.target.value)}}/>
                    <input type='text' 
                        value={weight}
                        placeholder='Вес'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setWeight(+e.target.value)}}/>
                    <input type='text' 
                        value={price}
                        placeholder='Цена'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPrice(+e.target.value)}}/>

                    {/* Product Image */}
                    <img src={`http://localhost:3001/public/${data.img}`} className={cls.img}/>
                    <input hidden ref={uploadFileRef} type='file' onChange={handleFileUploadChange}/>
                    <Button
                        theme={ThemeButton.DEFAULT}
                        className={cls.addFileBtn}
                        onClick={handleFileUploadClick}>
                            Выберите файл
                    </Button>

                    {/* Submit */}
                    <Button
                        type='submit'
                        theme={ThemeButton.DEFAULT}
                        onClick={handleSubmit}>
                            Cохранить
                    </Button>
                </div>
            </Popup>
        </div>
    )
}
