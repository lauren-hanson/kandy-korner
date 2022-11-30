import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employee.css"


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

        const newEmployeeForm = {
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
            body: JSON.stringify(newEmployeeForm)
        })

            .then((response) => response.json)
            .then(() => {
                navigate("/employee")
            })
    }

    return (
        <form className="newHireForm">
            <h2 className="newHireForm_header">New Hire Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={form.name}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Location</label>
                    <input 
                    type="radio"/> 

                </div>
            </fieldset>
        </form>
    )

}