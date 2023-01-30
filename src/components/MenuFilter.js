import styled from "styled-components"

export default function MenuFilter(){
    return(
        <Menu>
            <ul>
                <li>Processadores</li>
                <li>Cooler do processador</li>
                <li>Placa de vídeo</li>
                <li>Placa-mãe</li>
                <li>Memória</li>
                <li>Armazenamento</li>
                <li>Gabinetes</li>
                <li>Fontes</li>
                <li>Mousepad</li>
                <li>Mouse</li>
                <li>Monitor</li>
                <li>Fone de ouvido</li>
            </ul>
        </Menu>
    )
}

const Menu = styled.div`
    width: 253px;
    height: 100vh;
    background-color: #D9D9D9;
    ul{
        padding: 25px;
        li{
            margin-bottom: 35px;
            font-size: 18px;
            font-weight: bold;
        }
    }

`