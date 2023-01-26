import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineMenuFold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Header({ setCartMenu }) {
    return (
        <ConteinerHeader>
            <Logo>
                <h1>ShopeNerd</h1>
            </Logo>
            <Cart onClick={() => setCartMenu(true)}>
                <AiOutlineShoppingCart height={18} width={19} />
                <span>0</span>
            </Cart>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <FaSearch fontSize={25} color="#FFF"/>
            </div>
            <p>Faça <Link to={"/sign-in"}>LOGIN</Link>  ou <br /> crie seu <Link to={"/sign-up"}>CADASTRO</Link></p>
            <AiOutlineMenuFold fontSize={45} color="#fff" />
        </ConteinerHeader>
    )
}

const ConteinerHeader = styled.div`
    width: 100%;
    height: 101px;
    background: #0F52BA;
    padding: 28px 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        width: 500px;
        height: 35px;
        border: none;
        border-radius: 5px;
        padding: 8px;
    }
    div{
        display: flex;
        gap: 8px;
        align-items: center;
    }
    p{
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    a:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const Logo = styled.div`
    display: flex;
    color: #fff;
    gap: 4px;
    h1{
        font-weight: 600;
        font-size: 40px;
    }
`
const Cart = styled.div`
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`