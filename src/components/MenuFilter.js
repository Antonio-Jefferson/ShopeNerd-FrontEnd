
import styled from "styled-components"

export default function MenuFilter({filterByCategory }) {
    const handleClick = (category) => {
        filterByCategory(category);
    };

    return (
        <>
            <Menu>
                <ul>
                    <li onClick={() => handleClick('Processadores')}>Processadores</li>
                    <li onClick={() => handleClick('Cooler')}>
                        Cooler do processador
                    </li>
                    <li onClick={() => handleClick('Placa de vídeos')}>Placa de vídeo</li>
                    <li onClick={() => handleClick('Placas mãe')}>Placa-mãe</li>
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