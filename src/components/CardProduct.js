import styled from "styled-components"
import { RiShoppingBag3Line } from "react-icons/ri"

export default function CardProduct() {
    return (
        <ConteinerCard>
            <div>
                <Img>
                    <img src="imagen" alt='nome produto' />
                </Img>
                <InfPrice>
                    <p>nome produto</p>
                    <span>R$100</span>
                </InfPrice>
                <Description>descrição</Description>
            </div>
            <AddCart>
                <RiShoppingBag3Line color="#fff" />
                COMPRAR
            </AddCart>
        </ConteinerCard>
    )
}
const ConteinerCard = styled.div`
    max-width: 217px;
    height: 285px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        padding: 8px;
    }
`
const Img = styled.div`
    width:180px;
    height: 180px;
    img{
        width: 100%;
    }

`
const InfPrice = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-weight: 400;
        font-size: 16px;
        color: #2C2C2C;
    }
    span{
        height: 24px;
        background: #373737;
        border-radius: 5px;
        text-align: center;
        padding: 4px;
        color: #fff;
        font-weight: 700;
        font-size: 12px;
    }
`
const Description = styled.p`
        font-weight: 300;
        font-size: 10px;
        color: #2C2C2C;
        text-align: justify;
`
const AddCart = styled.div`
    display: flex;
    justify-content: center;
    gap: 14px;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;

    font-weight: 600;
    font-size: 14px;
    color: #fff;
`