import { Button, ThemeButton } from "shared/ui/Button"
import cls from "./FormCategory.module.scss"
import { ChangeEvent, FC, useRef, useState } from "react"
import classNames from "classnames"
import { Popup } from "shared/ui/Popup"
import { Input } from "shared/ui/Input"
import { CategoryType } from "entities/Category/type/CategoryType"

interface FormCategoryProps {
    data: CategoryType,
    onSubmit: (data: CategoryType) => void
    mainBtnBody: any
    submitBtnText: string
}

export const FormCategory:FC<FormCategoryProps> = ({data, onSubmit, mainBtnBody, submitBtnText}) => {
    const [title, setTitle] = useState<string>(data.title)
    const [img, setImg] = useState<File>()
    const [imgSource, setImgSource] = useState<string>(data.img ? `http://localhost:3001/public/${data.img}` : '')

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
            title: title
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
                handlerOpenPopap={handlerOpenPopap}
                isPopupActive={isPopupActive}
            >
                <div className={classNames(cls.FormCategory)}>
                    <Input type='text' 
                        value={title}
                        placeholder='Заголовок'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
                                        
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
