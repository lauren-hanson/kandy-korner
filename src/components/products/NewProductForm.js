import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const NewProductForm = () => {

    const [products, setProducts] = useState([])
    const [productType, setProductType] = useState([])

    const [newProduct, setNewProduct] = useState({
        name: '',
        imageUrl: '',
        productTypeId: 0,
        price: 0
    })

    const navigate = useNavigate()

    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)


    useEffect(() => {
        fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productData) => {
                setProducts(productData)
            })

        fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productTypeData) => {
                setProductType(productTypeData)
            })
    }, []

    )


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        if (
            newProduct.name &&
            newProduct.imageUrl &&
            newProduct.productTypeId &&
            newProduct.price
        ) {
            fetch(`http://localhost:8088/products&productType&_expand=productType`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(newProduct)
            }).then(() => {
                fetch(`http://localhost:8088/products&productType&_expand=productType`).then(() => {
                    navigate('/')
                })
            })

        } else {
            alert('Please complete the form.')
        }

    }

    return (
    <>

            {
                kandyUserObject.staff
                    ? <>
                        <button onClick={() => { handleSaveButtonClick(clickEvent) }}>Add New Product</button>
        }


                        <form className="newProductForm">
                            <h2 className="newProductFormTitle">Add a new product</h2>
                            <fieldset>
                                <div className="form-group">
                                    <div>Name:</div>
                                    {products.map((product) => {
                                        return (
                                            <div key={product.id} className="radio">
                                                <label>
                                                    <input
                                                        id="name"
                                                        type="radio"
                                                        value={product.id}
                                                        check={newProduct.productId === product.id}
                                                        onChange={(event) => {
                                                            const copy = { ...newProduct }
                                                            copy.name = event.target.value(setNewProduct(copy))
                                                        }} />
                                                    {product.name}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </fieldset>

                            <button
                                onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }}
                                className="btn btn-primary">
                                Submit New Product
                            </button>

                        </form>

                    </>
)

}