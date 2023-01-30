import styled from "styled-components"
import { MdCancel } from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import ProductsCart from "../components/ProductsCart"
import { Link } from "react-router-dom"

 export default function Cart({ setCartMenu }) {
    const { productsData, productsID } = useContext(AuthContext);
    const [listProducts, setListProducts] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        const filterProduct = productsData.filter((item) => productsID.includes(item._id));
        setListProducts(filterProduct);
        sumPrices();
    }, [productsData, productsID, quantity]);

    const sumPrices = () => {
        let total = 0;
        listProducts.forEach((product) => {
            total += product.price * (quantity[product._id] || 1);
        });
        console.log(total)
        setPriceTotal(total);
    };

    return (
        <ConteinerCart>
            <Top>
                <p>Carrinho de compras</p>
                <MdCancel onClick={() => setCartMenu(false)} fontSize={38} />
            </Top>
            <ProductList>
                {listProducts.map((product) => (
                    <ProductsCart
                        key={product._id}
                        quantity={quantity[product._id] || 1}
                        setQuantity={(qty) =>
                            setQuantity({
                                ...quantity,
                                [product._id]: qty,
                            })
                        }
                        product={product}
                    />
                ))}
            </ProductList>
            <Footer>
                <div>
                    <p>Total</p>
                    <span>R${priceTotal}</span>
                </div>
                <Finalize>
                    <Link to="/confirmation">
                        <h1>Finalizar Compra</h1>
                    </Link>
                </Finalize>
            </Footer>
        </ConteinerCart>
    );
}

const ConteinerCart = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 486px;
    height: 100vh;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    p{
        font-weight: 700;
        font-size: 37px;
        color: #fff;
    }
`
const ProductList = styled.ul`
    height: 650px;
    padding: 12px 46px;
`
const Footer = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 34px;
        font-weight: 700;
        font-size: 28px;
        color: #FFF;
    
    }
`
const Finalize = styled.div`
    padding: 39px;
    height: 97px;
    background: #000000;
    h1{
        display: flex;
        margin: auto;
        font-weight: 700;
        font-size: 28px;
        color: #FFF;
    }
    
`