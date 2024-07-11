import cls from "./AdminNavBar.module.scss"
import {AppLink} from "shared/ui/AppLink";


export const AdminNavBar = () => {
    return (
        <div className={cls.NavBar}>
            <AppLink to={'/admin/categories'} className={cls.link}>Категории</AppLink>
            <AppLink to={'/admin/products'} className={cls.link}>Продукты</AppLink>
        </div>
    )
}
