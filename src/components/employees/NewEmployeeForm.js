import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employee.css"


export const NewEmployeeForm = () => {


    const [newEmployee, setNewEmployee] = useState({
        id: 0,
        name: "",
        email: "",
        isStaff: true
    })

    const navigate = useNavigate()


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const newUser = {
            id: newEmployee.id,
            name: newEmployee.name,
            email: newEmployee.email,
            isStaff: newEmployee.isStaff
        }

        const newEmployee = {
            userId: newEmployee.userId,
            location: newEmployee.locationId,
            startDate: newEmployee.startDate,
            payRate: newEmployee.payRate,

        }

        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json)
            



         fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })

            .then((response) => response.json)
            .then(
            )
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
                        value={newEmployee.name}
                        onChange={
                            (event) => {
                                const copy = { ...newEmployee }
                                copy.name = event.target.checked
                                setNewEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={newEmployee.email}
                        onChange={
                            (event) => {
                                const copy = { ...newEmployee }
                                copy.email = event.target.value
                                setNewEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <input type="checkbox"
                        value={newEmployee.isStaff}
                        onChange={
                            (event) => {
                                const copy = { ...newEmployee }
                                copy.isStaff = event.target.checked
                                setNewEmployee(copy)
                            }
                        } />
                    <label htmlFor="staff">Staff</label>

                </div>
            </fieldset>

            {/* <fieldset>
                <div className="form-group">
                    <label>Location: </label>
                    <select id="locations">
                        <option value="0">
                            Choose a location...
                        </option>

                    </select>

                </div>
            </fieldset> */}

            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date: </label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        name="date"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Pay Rate per Hour:</label>
                    <input type="number"
                        className="form-control"
                    />
                </div>
            </fieldset> */}

            <button
                onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }}
                className="btn btn-primary">
                Save New Employee
            </button>
        </form>
    )

}