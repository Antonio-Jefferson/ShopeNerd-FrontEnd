import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
export default function HomePage() {
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [menuActive, setMenuActive] = useState(false)
    useEffect(()=>{
        async function fetchData() {
            try {
                const url = ""
                const {data} = await axios.get(url);
                setProductsData(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <ConteinerHome>
            <Header setMenuActive={setMenuActive}/>
            {menuActive &&  <Menu setMenuActive={setMenuActive}/>}
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
   width: 100%;
   height: 100vh;
`