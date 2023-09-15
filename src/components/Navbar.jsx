import Brand from "./brand";
import MenuButton from "./MenuButton";
import CategoryIteam from "./CategoryItem";
import ContadorCarrito from "./ContadorCarrito";

const Navbar = () => {
    return (
        <div> <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Brand/>
        <MenuButton/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <CategoryIteam isActive = {true} name="OFERTAS"/>
            </li>
            <li className="nav-item">
            <CategoryIteam isActive = {false} name="Hombres"/>
            </li>
            <li className="nav-item">
            <CategoryIteam isActive = {false} name="Mujeres"/>
            </li>
            <li className="nav-item">
            <CategoryIteam isActive = {false} name="Niños"/>
            </li>
            </ul>
        </div>
        <ContadorCarrito/>
        </div>
    </nav></div>
    );
};

export default Navbar;