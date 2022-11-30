import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import { useNavigate } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=true`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            <article className="employees">
                {
                    employees.map(employee => <Employee key={`employee--${employee.id}`}

                        // id, fullName, email are all props
                        id={employee.id}
                        name={employee.name}
                        email={employee.email} />)
                }
            </article>
                <div>
                    <button onClick={() => navigate("/employees/newHireForm")}>Add New Employee</button>
                </div>
        </>
    )
}