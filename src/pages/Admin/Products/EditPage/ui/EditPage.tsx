import classNames from 'classnames';
import cls from './EditPage.module.scss';
import axios, { toFormData } from 'axios';
import { ChangeEvent, useState } from 'react';
import btn from 'shared/ui/Button/Button.module.scss';


export const EditPage = () => {
    const [title, setTitle] = useState<string>()
    const [composition, setComposition] = useState<string>()
    const [img, setImg] = useState<File>()
    const [weight, setWeight] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)


    const handleFileUpload = (event: any) => {
        const file = event.target.files[0]
        
        setImg(file)
    }

    const handleSubmit = () => {
        sendProductData()
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

    return (
        <div className={classNames(cls.EditPage)}>
            <div className={classNames(cls.inputs)}>
                <input type='text' 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
                <input type='text' 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setComposition(e.target.value)}}/>
                <input type='text' 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setWeight(+e.target.value)}}/>
                <input type='text' 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{setPrice(+e.target.value)}}/>
            </div>
            <input type='file' onChange={handleFileUpload}/>
            <button type='submit' className={classNames(cls.Button, btn.clear)} onClick={handleSubmit}>submit</button>
        </div>
    );
};
