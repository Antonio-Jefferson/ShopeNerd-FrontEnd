import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Cart from "../components/Cart"
import Header from "../components/Header"
import Menu from "../components/Menu"
import MenuFilter from "../components/MenuFilter"
import CardProduct from "../components/CardProduct"
import CardSkeleton from "../components/CardSkeleton"
import AuthContext from "../contexts/AuthContext"
import MOCK  from "../constants/mock"

export default function HomePage() {
    const { productsData, setProductsData } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    const [cartMenu, setCartMenu] = useState(false);
    const [menuActive, setMenuActive] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    // console.log(productsData)
   
    function filterByCategory(category) {
        if (category) {
            
            const filteredProducts = productsData.filter(product => product.category === category)
            console.log(filteredProducts)
            setFilteredData(filteredProducts)
        }else{
            setFilteredData(productsData)
        } 
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const url = "http://localhost:5005/products"
                const { data } = await axios.get(url);
                setProductsData(MOCK)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        setFilteredData(MOCK)
    }, [])

    return (
        <ConteinerHome>

            <Header setMenuActive={setMenuActive} setCartMenu={setCartMenu} cartMenu={cartMenu} />
            <Main>
                <MenuFilter filterByCategory={filterByCategory} />
                <DivCard>
                    {isLoading && Array(30).fill(0).map(() => <CardSkeleton />)}
                    {filteredData.map(product => <CardProduct product={product} />)}
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
    margin: 125px 20px 20px 350px;;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`