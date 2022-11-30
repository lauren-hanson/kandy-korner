import { Link, useNavigate } from "react-router-dom"

export const CustomerNav = () => { 

    const navigate = useNavigate()

    return (
        <ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/findcandy">Find Candy</Link>
            </li>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            
        </ul>
    )

}