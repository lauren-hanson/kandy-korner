import { Link } from "react-router-dom"
import "./Customer.css"

export const Customer = ({ id, name, email, loyaltyNumber }) => {

    return (
        <>
            <section className="customer">
                <div>
                    <Link to={`/customers/${id}/edit`} className="customerLink">
                        Name: {name}
                    </Link>
                </div>

                <div>Email: {email}</div>
                <div>Loyalty Number: {loyaltyNumber}</div>


            </section>
        </>
    )
}