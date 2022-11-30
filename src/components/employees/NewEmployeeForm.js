import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const NewEmployeeForm = () => { 

    const [form, setForm] = useState({ 
        name: "", 
        location: "", 
        startDate: Date, 
        rate: 0 

    })
    
    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(kandyUser)

    const navigate = useNavigate() 

    const handleSaveButtonClick = (event) => { 
        event.preventDefault() 

        const newCustomerForm = { 
            userId: kandyUserObject.id, 
            name: kandyUserObject.name, 
            location: form.location, 
            date: "", 
            rate: kandyUserObject.rate
        }

        return fetch("http://localhost:8088/employees", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newCustomerForm)
        })

        .then ((response) => response.json)
        .then (() => {
            navigate("/employee")
        })
    }

    return ( 
        <>
        </>
    )

}