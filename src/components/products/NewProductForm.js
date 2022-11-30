import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./NewProductForm.css"


export const NewProductForm = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        productTypeId: 0,
        price: "",
        imageUrl: ""

    })

    const [productTypes, setProductType] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        fetch('http://localhost:8088/productTypes')
            .then(response => response.json())
            .then(productTypeInfo => {
                setProductType(productTypeInfo)
            })
    }, []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const newProductToSendToAPI = {
            name: newProduct.name,
            productTypeId: newProduct.productTypeId,
            price: newProduct.price,
            imageUrl: newProduct.imageUrl
        }

        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProductToSendToAPI)
        })

            .then((response) => response.json())
            .then(() => {
                navigate('/products')
            })
    }

    return (
        <>

            <form className="productForm">
                <h2 className="formHeader">New Product Form</h2>
                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="name">Name: </h3>
                        <input
                            required
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.name = event.target.value
                                setNewProduct(copy)
                            }} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <h3>Product Type: </h3>
                        {productTypes.map((productObj) => {
                            return (
                                <div key={productObj.id} className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value={productObj.id}
                                            checked={newProduct.productTypeId === productObj.id}
                                            onChange={(event) => {
                                                const copy = { ...newProduct }
                                                copy.productTypeId = parseInt(event.target.value)
                                                setNewProduct(copy)
                                            }}
                                        />
                                        <div className="productTypeRadio">
                                            {productObj.category}
                                        </div>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </fieldset>



                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="price">Price: </h3>
                        <input
                            required
                            id="price"
                            type="text"
                            className="form-control"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.price = event.target.value
                                setNewProduct(copy)
                            }} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="imgURL">Image URL: </h3>
                        <input
                            required
                            id="imgURL"
                            type="text"
                            className="form-control"
                            placeholder="example.com"
                            value={newProduct.imageUrl}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.imageUrl = event.target.value
                                setNewProduct(copy)
                            }}
                        />
                    </div>
                </fieldset>

                <button
                    className="saveButton"
                    onClick={(event) => {
                        handleSaveButtonClick(event)
                    }}
                >
                    Add New Product
                </button>

            </form >
        </>
    )
}








