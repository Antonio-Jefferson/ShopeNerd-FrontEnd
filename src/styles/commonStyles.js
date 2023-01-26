import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ConteinerHeader = styled.div`
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

export const Logo = styled.div`
    display: flex;
    color: #fff;
    gap: 4px;
    h1{
        font-weight: 600;
        font-size: 40px;
    }
    a:hover{
        text-decoration: none;
    }
`

export const Cart = styled.div`
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
`

export const StyledH2 = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    color: #0F52BA;
`

export const StyledForm = styled.form`
    margin: 30px auto 20px auto;
    max-width: 350px;
    input {
        width: 100%;
        height: 58px;
        padding: 16px;
        margin-bottom: 20px;
        font-size: 18px;
        background-color: #FFFFFF;
        border: 2px solid #d9d9d9;
        border-radius: 5px;
        ::placeholder{
            color: #858585;
        }
        &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 58px;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 700;
        background-color: #0F52BA;
        border-radius: 5px;
        border: none;
        :hover{
            cursor: pointer;
        }
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: #0F52BA;
`

export const StyledFooter = styled.footer`
`