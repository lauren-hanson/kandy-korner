import { useState, useEffect } from "react"
import "./ProductList.css"
import { useNavigate } from 'react-router-dom'
//import { NewProductForm } from "../products/NewProductForm"


export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPriceProduct, setTopPriceProduct] = useState(false)


    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    const navigate = useNavigate() 

    /*
    This is another way to sort products instead of using _sort query string. if using this, make sure to exchange filteredProducts w/ sortFilteredProducts when mapping in return
    
    const sortFilteredProducts = [ ... filteredProducts].sort((a, b) => a.name > b.name ? 1 : -1)
    */


    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType&_sort=name`)
                .then(response => response.json())
                .then((productArray) => {

                    setProducts(productArray)

                })
        },
        []
    )

    useEffect(
        () => {

            setFilteredProducts(products)

        },
        [products]
    )

    useEffect(
        () => {
            if (topPriceProduct) {
                const topPriced = products.filter(product => product?.price > 2)
                setFilteredProducts(topPriced)
            } else {
                setFilteredProducts(products)
            }

        },
        [topPriceProduct]
    )

    return (
        <>

            {
                kandyUserObject.staff
                ? 
                <>
                    
                    <div className="productButton">
                        <button onClick={() => { setTopPriceProduct(false) }}>Show All</button>
                        <button onClick={() => { setTopPriceProduct(true) }}>Top Priced</button>
                        <button onClick={() => navigate("/products/addproduct")}>Add New Product</button>
                    </div> 
                </>: 
                <>
                    <div>
                        
                    </div>
                    
                </>
            } 


            <div className="productList">
                <h2>Products</h2>
                <article className="products">
                    {filteredProducts.map(
                        product => {
                            return <section className="product" key={`product--${product?.id}`}>
                                <img src={product?.imageUrl} />
                                <header>{product?.name}   ${product?.price}</header>
                                <p>{product?.productType?.category}</p>

                            </section>
                        }
                    )}

                </article>
            </div>

        </>
    )
}
