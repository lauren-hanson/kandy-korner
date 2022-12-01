import { useEffect, useState } from "react"
import { Employee } from "./Employee"
import { useNavigate } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])

    const [employeeInfo, setEmployeeInfo] = useState([])

    const navigate = useNavigate()


    // fetching users that are staff 

    const getAllEmployees = () => {
        fetch(`http://localhost:8088/users?isStaff=true`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })

    }


    useEffect(

        () => {

            getAllEmployees()

            fetch('http://localhost:8088/employees?_expand=user&location&_expand=location')
                .then(response => response.json())
                .then((employeeInfo) => {
    
                    setEmployeeInfo(employeeInfo)
                })
        },
        []
    )



    return (
        <>
            <article className="employees">
                {
                    employeeInfo.map(employee => 
                    <Employee key={`employee--${employee.id}`}

                        // id, fullName, email are all props
                        id={employee.id}
                        name={employee?.user?.name}
                        email={employee?.user?.email}
                        location={employee.location}
                        getAllEmployees={getAllEmployees}
                        employees={employees}
                   
               
                       
                        

                    />)

                }
            </article>
           
            <div>
                <button onClick={() => navigate("/employees/newHireForm")}>Add New Employee</button>
            </div>
        </>
    )
}