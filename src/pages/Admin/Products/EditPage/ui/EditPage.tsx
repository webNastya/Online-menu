import classNames from 'classnames';
import cls from './EditPage.module.scss';
import { AddProduct } from 'widgets/Product/Admin/Add';


export const EditPage = () => {
    return (
        <div className={classNames(cls.EditPage)}>
            <AddProduct/>
        </div>
    );
};
