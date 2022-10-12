import CategoryButton from "./CategoryButton/CategoryButton"
import "./NavBar.scss"
import CartWidget from './CartWidget/CartWidget';

function NavBar(){
    return (
        <div>
            <CategoryButton
                nombre="BarTender HC"
            />
            <CategoryButton
                nombre="Bebidas"
            />
            <CategoryButton
                nombre="Accesorios"
            />
            <CategoryButton
                nombre="Cocteles"
            />
            <CartWidget
                  nombre=""
            />

        </div>
    )
}
export default NavBar