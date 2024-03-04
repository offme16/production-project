import { Link } from "react-router-dom"
import { classNames } from "shared/config/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
            <Link to={'/'} className={cls.mainLink}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            </div>
           
        </div>
    )
}
