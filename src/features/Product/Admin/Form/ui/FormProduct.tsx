import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./FormProduct.module.scss"
import { ChangeEvent, FC, useRef, useState } from "react"
import classNames from "classnames"
import { Popup } from "shared/ui/Popup"
import { ProductType } from "entities/Product/type/ProductType"
import { Input } from "shared/ui/Input"
import { SelectCategory } from "features/Category/SelectCategory"
import { CategoryType } from "entities/Category/type/CategoryType"

interface FormProductProps {
    data: ProductType,
    onSubmit: (data: ProductType) => void
    mainBtnBody: any
    submitBtnText: string
}

export const FormProduct:FC<FormProductProps> = ({data, onSubmit, mainBtnBody, submitBtnText}) => {
    const [title, setTitle] = useState<string>(data.title)
    const [composition, setComposition] = useState<string>(data.composition)
    const [img, setImg] = useState<File>()
    const [imgSource, setImgSource] = useState<string>(data.img ? `http://localhost:3001/public/${data.img}` : '')
    const [weight, setWeight] = useState<number>(data.weight)
    const [price, setPrice] = useState<number>(data.price)
    const [category, setCategory] = useState<CategoryType>(data.category)

    const [isPopupActive, setIsPopupActive] = useState<boolean>(false)
    const uploadFileRef = useRef<HTMLInputElement>()

    const handlerOpenPopap = () => {
        setIsPopupActive(active => !active)
    }

    const handleFileUploadClick = () => {
        uploadFileRef.current.click()
        console.log(data.img);
        
    }

    const handleFileUploadChange = (event: any) => {
        const imageFile = event.target.files[0]
        setImg(imageFile)
        setImgSource(URL.createObjectURL(imageFile))
    }

    const handlerSubmit = () => {
        onSubmit({
            id: data.id,
            img: img ?? "",
            title: title,
            weight: weight,
            description: data.description,
            composition: composition,
            price: price,
            category: category
        })
        handlerOpenPopap()
    }
    
    return(
        <div>
            <Button 
                theme={ThemeButton.DEFAULT} 
                onClick={handlerOpenPopap}>
                    { mainBtnBody }
            </Button>
            <Popup 
                position="top"
                toggleActive={handlerOpenPopap}
                isPopupActive={isPopupActive}
            >
                <div className={classNames(cls.FormProduct)}>
                    {/* Product text Fields */}
                    <Input type='text' 
                        value={title}
                        placeholder='Заголовок'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
                    <Input type='text' 
                        value={composition}
                        placeholder='Ингриндиенты'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setComposition(e.target.value)}}/>
                    <div className={cls.inputNumbers}>
                        <Input type='text' 
                            value={weight}
                            placeholder='Вес'
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setWeight(+e.target.value)}}/>
                        <Input type='text' 
                            value={price}
                            placeholder='Цена'
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPrice(+e.target.value)}}/>
                    </div>
                    
                    {/* Product Category */}
                    <SelectCategory category={category} setCategory={setCategory}/>

                    {/* Product Image */}
                    
                    <img hidden={!imgSource} src={imgSource} className={cls.img}
                    />
                    <input hidden ref={uploadFileRef} type='file' onChange={handleFileUploadChange}/>
                    <Button
                        theme={ThemeButton.DEFAULT}
                        className={classNames(cls.addFileBtn, {[cls.imgFiled]: img})}
                        onClick={handleFileUploadClick}>
                            { img
                                ? "Сменить фото"
                                : "Выберите фото"
                            }
                    </Button>

                    {/* Submit */}
                    <Button
                        type='submit'
                        theme={ThemeButton.DEFAULT}
                        onClick={handlerSubmit}>
                            { submitBtnText }
                    </Button>
                </div>
            </Popup>
        </div>
    )
}
