import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Cart from "../components/Cart"
import Header from "../components/Header"
import Menu from "../components/Menu"
import MenuFilter from "../components/MenuFilter"
import CardProduct from "../components/CardProduct"


export default function HomePage() {
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [cartMenu, setCartMenu] = useState(false);
    const [menuActive, setMenuActive] = useState(false)


    useEffect(()=>{
        async function fetchData() {
            try {
                const url = ""
                const { data } = await axios.get(url);
                setProductsData(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <ConteinerHome>

            <Header  setMenuActive={setMenuActive} setCartMenu={setCartMenu} cartMenu={cartMenu}/>
            <Main>
                <MenuFilter />
                <DivCard>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </DivCard>
            </Main>
            {menuActive && <Menu setMenuActive={setMenuActive} />}
            {cartMenu && <Cart setCartMenu={setCartMenu} />}
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
   width: 100%;
   height: 100vh;
`
const Main = styled.div`
    display:flex;
    gap: 10px;
`
const DivCard = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`