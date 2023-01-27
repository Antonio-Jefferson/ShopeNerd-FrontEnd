import { AiOutlineShoppingCart, AiOutlineMenuFold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";
import { ConteinerHeader, Logo, Cart } from "../styles/commonStyles";

export default function Header({ setCartMenu, setMenuActive }) {
    return (
        <ConteinerHeader>
            <Logo>
                <h1><Link to="/">ShopeNerd</Link></h1>
            </Logo>
            <Cart onClick={() => setCartMenu(true)}>
                <AiOutlineShoppingCart height={18} width={19} />
                <span>0</span>
            </Cart>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <FaSearch fontSize={25} color="#FFF" />
            </div>
            <p>Faça <Link to={"/sign-in"}>LOGIN</Link>  ou <br /> crie seu <Link to={"/sign-up"}>CADASTRO</Link></p>
            <AiOutlineMenuFold onClick={()=> setMenuActive(true)} fontSize={45} color="#fff" />
        </ConteinerHeader>
    )
}

