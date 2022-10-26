import CategoryButton from "./CategoryButton/CategoryButton"
import "./NavBar.scss"
import CartWidget from './CartWidget/CartWidget';
import {Link} from "react-router-dom"
function NavBar(){
    return (
        <div>
            <CategoryButton
                nombre="BarTender HC"
            />
            <Link to={"/"} >
                <CategoryButton
                    nombre="Home"
                />
            </Link>
            <Link to={"/category/grande"} >
                <CategoryButton
                    nombre="Grandes"
                />
            </Link>
            <Link to={"/category/mediano"} >
                <CategoryButton
                    nombre="Medianos"
                />
            </Link>

            <CartWidget
                  nombre=""
            />

        </div>
    )
}
export default NavBar