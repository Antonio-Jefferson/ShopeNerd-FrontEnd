import { useContext } from "react";
import { AiOutlineShoppingCart, AiOutlineMenuFold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { ConteinerHeader, Logo, Cart } from "../styles/commonStyles";

export default function Header({ setCartMenu, cartMenu, setMenuActive }) {
    const {nameUser, productsID} = useContext(AuthContext)
    return (
        <ConteinerHeader>
            <Logo>
                <h1><Link to="/">ShopeNerd</Link></h1>
            </Logo>
            <Cart onClick={() => setCartMenu(!cartMenu)}>
                <AiOutlineShoppingCart height={18} width={19} />
                <div>{productsID.length}</div>
            </Cart>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <span><FaSearch fontSize={25} color="#FFF" /></span>
            </div>
            {nameUser ? <p>Olá, {nameUser}</p>:<p>Faça <Link to={"/sign-in"}>LOGIN</Link>  ou <br /> crie seu <Link to={"/sign-up"}>CADASTRO</Link></p>}
            <span><AiOutlineMenuFold onClick={()=> setMenuActive(true)} fontSize={45} color="#fff" /></span>
        </ConteinerHeader>
    )
}

