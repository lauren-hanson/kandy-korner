import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])


    const navigate = useNavigate()


    // fetching users that are staff 

    const getAllEmployees = () => {
        fetch(`http://localhost:8088/users?isStaff=true`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
            .then(console.log(employees))

    }


    useEffect(

        () => {

            getAllEmployees()

            fetch('http://localhost:8088/employees?_expand=location&_expand=user')
                .then(response => response.json())
                .then((employeeInfo) => {

                    setEmployees(employeeInfo)
                })
        },
        []
    )


    return (
        <>
            
            <article className="employees">
            <h2>Employees</h2>
                {
                    employees.map(employee => {
                        return <>
                        <section className="employee"
                            key={`employee--${employee.userId}`}>
                            <div>Name: {employee?.user?.name}
                            </div>
                            <div>Email: {employee?.user?.email}</div>
                            <div>Location: {employee?.location?.name}</div>
                        </section>
                        </>
                    }

                    )


                }

            </article>



            <div>
                <button onClick={() => navigate("/employees/newHireForm")}>Add New Employee</button>
            </div>
        </>
    )
}