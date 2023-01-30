import styled from "styled-components"
import { MdCancel } from "react-icons/md"

export default function Menu({setMenuActive}) {

    return (
        <ConteinerCart>
            <Top>
                <p>Menu</p>
                <MdCancel onClick={()=> setMenuActive(false) }  fontSize={38} />
            </Top>
            <ul>
                <li>Perfil</li>
                <li>Configurações</li>
                <li>Sair</li>
            </ul> 
        </ConteinerCart>
    )
}

const ConteinerCart = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 486px;
    height: 100vh;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    ul{
        padding: 20px;
        li{
            margin-bottom: 40px;
            font-weight: 700;
            font-size: 20px;
            color: #fff;
        }
        li:hover{
            cursor: pointer;
        }
    }
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    p{
        font-weight: 700;
        font-size: 37px;
        color: #fff;
    }
`