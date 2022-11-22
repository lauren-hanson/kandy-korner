import { useState, useEffect } from "react"
import "./ProductList.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPriceProduct, setTopPriceProduct] = useState(false)

    /*
    This is another way to sort products instead of using _sort query string. if using this, make sure to exchange filteredProducts w/ sortFilteredProducts when mapping in return
    
    const sortFilteredProducts = [ ... filteredProducts].sort((a, b) => a.name > b.name ? 1 : -1)
    */


    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_sort=name&productType&_expand=productType`)
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
                const topPriced = products.filter(product => product.price > 2)
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
                <div className="productButton">
                    <button onClick={ () => {setTopPriceProduct(false)}}>Show All</button> 
                    <button onClick={() => {setTopPriceProduct(true) }}>Top Priced</button>
                </div>
            }


            <div className="productList">
                <h2>Products</h2>
                <article className="products">
                    {filteredProducts.map(
                        product => {
                            return <section className="product" key={`product--${product.id}`}>
                                <img src={product.img} />
                                <header>{product.name}   ${product.price}</header>
                                <p>{product?.productType.category}</p>

                            </section>
                        }
                    )}

                </article>
            </div>

        </>
    )
}
