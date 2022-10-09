import CategoryButton from "./CategoryButton/CategoryButton"
import CartWidget from"./CartWidget/CartWidget"
import "./NavBar.scss"
function NavBar(){
    return (
        <div>
            NavBar
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CartWidget/>
        </div>
    )
}
export default NavBar