
import styled from "styled-components"

export default function MenuFilter({filterByCategory }) {
    const handleClick = (category) => {
        console.log(category)
        filterByCategory(category);
    };

    return (
        <>
            <Menu className="visibilete">
                <ul>
                    <li onClick={() => handleClick('Processador')}>Processadores</li>
                    <li onClick={() => handleClick('Cooler')}>
                        Cooler do processador
                    </li>
                    <li onClick={() => handleClick('Placa de vídeos')}>Placa de vídeo</li>
                    <li onClick={() => handleClick('Placa mãe')}>Placa-mãe</li>
                    <li onClick={() => handleClick('Memórias')}>Memória</li>
                    <li onClick={() => handleClick('Armazenamentos')}>Armazenamento</li>
                    <li onClick={() => handleClick('Gabinetes')}>Gabinetes</li>
                    <li onClick={() => handleClick('Fontes')}>Fontes</li>
                    <li onClick={() => handleClick('Mousepads')}>Mousepad</li>
                    <li onClick={() => handleClick('Mouses')}>Mouse</li>
                    <li onClick={() => handleClick('Monitores')}>Monitor</li>
                    <li onClick={() => handleClick('Fones')}>
                        Fone de ouvido
                    </li>
                </ul>
            </Menu>
        </>
    );
}

const Menu = styled.div`
    @media (max-width:835px) {
        ul{
            display: none;
        }
    }
    ul{
        width: 253px;
        height: 100vh;
        background-color: #D9D9D9;
        position: fixed;
        left: 0px;
        top: 101px;
        padding: 25px;
        li{
            margin-bottom: 35px;
            font-size: 18px;
            font-weight: bold;
        }
    }

`