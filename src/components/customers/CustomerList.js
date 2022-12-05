import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {

    const [customers, setCustomers] = useState([])

    useEffect(

        () => {

            fetch(`http://localhost:8088/customers?&_expand=user`)
                .then(response => response.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )



    return (
        <>
            <div className="customerProfile">
                <h2>Customers</h2>
                <article className="customers">
                    {
                        customers.map(customer =>
                            <Customer key={`customer--${customer.id}`}
                                id={customer.userId}
                                name={customer?.user?.name}
                                email={customer?.user?.email}
                                loyaltyNumber={customer.loyaltyNumber}


                            />
                        )}
                </article>
            </div>
        </>
    )
}