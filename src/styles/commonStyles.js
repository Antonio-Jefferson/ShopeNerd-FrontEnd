import styled from "styled-components";


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
    }
    button {
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

export const StyledLink = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    color: #0F52BA;
`