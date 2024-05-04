import classNames from 'classnames';
import cls from './EditPage.module.scss';
import axios, { toFormData } from 'axios';
import { ChangeEvent, useState } from 'react';


export const EditPage = () => {
    const [title, setTitle] = useState<string>()
    const [composition, setComposition] = useState<string>()
    const [img, setImg] = useState<File>()

    

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0]
        console.log(file);
        
        setImg(file)
    }

    const handleSubmit = () => {
        sendProductData()
        sendImg()
    }

    const sendProductData = () => {
        const data = JSON.stringify({title, composition})

        axios
            .post('http://localhost:3001/products', 
                data, 
                { headers: {'Content-Type': 'application/json'} }
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const sendImg = () => {
        let formData = new FormData();
        formData.append('img', img);

        console.log(formData.get('img'));
        

        axios
            .post('http://localhost:3001/products/img/add', formData,
                { headers: {'Content-Type': 'multipart/form-data'}}
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className={classNames(cls.EditPage)}>
            <input type='text' 
            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>
            <input type='text' 
            onChange={(e:ChangeEvent<HTMLInputElement>)=>{setComposition(e.target.value)}}/>
            <input type='file' onChange={handleFileUpload}/>
            <button type='submit' onClick={handleSubmit}>submit</button>
        </div>
    );
};
