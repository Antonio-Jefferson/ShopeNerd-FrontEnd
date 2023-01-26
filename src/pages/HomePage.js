import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
export default function HomePage() {
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
            <Header/>
        </ConteinerHome>
    )
}

const ConteinerHome = styled.div`
   width: 100%;
   height: 100vh;
`