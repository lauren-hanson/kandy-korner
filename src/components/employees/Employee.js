import { Link } from "react-router-dom"
import "./Employee.css"


export const Employee = ({ id, name, email }) => {

   

    return (
    
            <section className="employee">
                <div>
                    <Link to={`/employees/${id}`} className="link">Name: {name}</Link>
                </div>
                <div>Email: {email}</div>
            </section>
          
        
    )
} 