import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Customer.css"

export const CustomerDetails = () => {

    const { customerId } = useParams()
    const [customer, setCustomers] = useState({})

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

    return (
        <section className="customers">
            <header className="customer_header">{customer?.user?.name}</header>
            <div>Email: {customer?.user?.email}</div>
            <div>Loyalty Number: {customer.loyaltyNumber}</div>
        </section>

        
    )
}