import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./Customer.css"

export const CustomerDetails = () => {

    const { customerId } = useParams()
    const [customer, setCustomers] = useState([])
    const [update, setUpdateProfile] = useState({
        id: 0, 
        userId: 0,
        loyaltyNumber: 0

    })

    const navigate = useNavigate()

    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?&_expand=user&userId=${customerId}`)
                .then(response => response.json())
                .then((customerDetails) => {
                    const singleCustomer = customerDetails[0]
                    setCustomers(singleCustomer)
                })
        },
        [customerId]
    )

    const handleUpdateButtonClick = (event) => {
        event.preventDefault()


        const updateLoyaltyToSendToAPI = { 
            id: customer.id, 
            userId: customer.userId, 
            loyaltyNumber: update.loyaltyNumber
        }

        return fetch(`http://localhost:8088/customers`, {
            method: "PUT",
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify(updateLoyaltyToSendToAPI)
        })
            .then(response => response.json())

            .then(() => {
                navigate("/customers")
            })
    }

    return (
        <>
            <section className="customerProfile">
                <h2 className="customerForm_title">
                    Edit Customer Profile
                </h2>
                <div className="customer">

                    <header className="customer_header">Name: {customer?.user?.name}</header>
                    <div>Email: {customer?.user?.email}</div>

                    <form>
                        <fieldset>
                            <div className="form-group updateLoyalty">
                                <label htmlFor="number">
                                    Loyalty Number:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={update.loyaltyNumber}
                                    onChange={
                                        (event) => {
                                            const copy = { ...update }
                                            copy.loyaltyNumber = event.target.value
                                            setUpdateProfile(copy)
                                        }
                                    } />
                                <button
                                    className="updatebutton"
                                    onClick={(clickEvent) => {
                                        { handleUpdateButtonClick(clickEvent) }
                                    }}
                                >Update</button>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </section>
        </>

    )

}