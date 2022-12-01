import { useState, useEffect } from "react"
import { Product } from "./Product"
import "./ProductList.css"
import { useNavigate } from 'react-router-dom'



export const ProductList = ({searchTermState}) => {
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
            const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            }
            )
            setFilteredProducts(searchedProducts)
        },
        [searchTermState]
    )

    
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
                        product => 
                            <Product 
                                key={`product--${product.id}`}
                                productObject={product} 
                                
                                /> 
                        
                    )}

                </article>
            </div>

        </>
    )
}

