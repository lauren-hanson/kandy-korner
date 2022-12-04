import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employee.css"


export const NewEmployeeForm = () => {

    // const [newUser, setNewUser] = useState({
    //     name: "",
    //     email: "",
    //     isStaff: true
    // })
    // const [newEmployee, setNewEmployee] = useState({
    //     locationId: 0,
    //     startDate: "",
    //     payRate: 0  
    // })
    // const [locations, setLocations] = useState([])

    // const navigate = useNavigate()

    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)

    // useEffect(
    //     () => {
    //         fetch(`http://localhost:8088/locations`)
    //             .then(response => response.json())
    //             .then((locationArray) => {
    //                 setLocations(locationArray)
    //             })
    //     },
    //     []
    // )

    // const handleSaveButtonClick = (event) => {
    //     event.preventDefault()

    //     const userDataToSendToAPI =
    //     {
    //         name: newUser.name,
    //         email: newUser.email,
    //         isStaff: newUser.isStaff
    //     }

    //     const employeeDataToSendToAPI = {
    //         locationId: newEmployee.locationId,
    //         startDate: newEmployee.startDate,
    //         payRate: newEmployee.payRate
            
    //     }

        //     return fetch(`http://localhost:8088/users`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(userDataToSendToAPI)
        //     })
        //         .then(response => response.json())

        //         .then(newUser => {
        //             newEmployee.userId = newUser.id
        //             return fetch(`http://localhost:8088/employees`, {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 },
        //                 body: JSON.stringify(employeeDataToSendToAPI)
        //             })
        //         })
        //         .then(() => {
        //             navigate("/employees")
        //         })


        // }

        // return (
        //     <>
        //         <form className="newHireForm">
        //             <h2 className="newHireForm_header">New Hire Form</h2>

        //             <fieldset >
        //                 <div className="form-group">
        //                     <label htmlFor="name">Name: </label>
        //                     <input
        //                         required autoFocus
        //                         type="text"
        //                         className="form-control"
        //                         value={newUser.name}
        //                         onChange={
        //                             (event) => {
        //                                 const copy = { ...newUser }
        //                                 copy.name = event.target.value
        //                                 setNewUser(copy)
        //                             }
        //                         }
        //                     />
        //                 </div>
        //             </fieldset>

        //             <fieldset>
        //                 <div className="form-group">
        //                     <label htmlFor="name">Email: </label>
        //                     <input
        //                         required autoFocus
        //                         type="text"
        //                         className="form-control"
        //                         value={newUser.email}
        //                         onChange={
        //                             (event) => {
        //                                 const copy = { ...newUser }
        //                                 copy.email = event.target.value
        //                                 setNewUser(copy)
        //                             }
        //                         }
        //                     />
        //                 </div>
        //             </fieldset>

        //             <fieldset>
        //                 <div className="form-group">
        //                     <label htmlFor="location">Choose a location:</label>
        //                     <select id="location"
        //                         onChange={
        //                             (event) => {
        //                                 const copy = { ...newEmployee }
        //                                 copy.locationId = parseInt(event.target.value)
        //                                 setNewEmployee(copy)
        //                             }}>
        //                         <option value="0">Location...</option>

        //                         {
        //                             locations.map(
        //                                 (location) => {
        //                                     return <option
        //                                         key={`location--${location.id}`}
        //                                         value={location.id}>{location.name}</option>
        //                                 }
        //                             )
        //                         }
        //                     </select>
        //                 </div>
        //             </fieldset>

        //             <fieldset>
        //                 <div className="form-group">
        //                     <label htmlFor="date">Start Date: </label>
        //                     <input
        //                         type="date"
        //                         className="form-control"
        //                         onChange={
        //                             (event) => {
        //                                 const copy = { ...newEmployee }
        //                                 copy.startDate = event.target.value
        //                                 setNewEmployee(copy)
        //                             }
        //                         }
        //                     />

        //                 </div>
        //             </fieldset>

        //             <fieldset>
        //                 <div className="form-group">
        //                     <label htmlFor="number">Pay Rate: </label>
        //                     <input type="number"
        //                         className="form-control"
        //                         step=".01"
        //                         onChange={
        //                             (event) => {
        //                                 const copy = { ...newEmployee }
        //                                 copy.payRate = parseFloat(event.target.value, 2)
        //                                 setNewEmployee(copy)
        //                             }
        //                         }
        //                     />

        //                 </div>
        //             </fieldset>

        //             {/* <fieldset>
        //             <div className="form-group">
        //                 <label htmlFor="name">Staff:</label>
        //                 <input type="checkbox"
        //                     className="form-control"
        //                     onChange={
        //                         (event) => { 
        //                             const copy = { ...newUser }
        //                             copy.isStaff = event.target.checked
        //                             setNewUser(copy)
        //                         }
        //                     } />
        //             </div>
        //         </fieldset> */}


        //         </form>

        //         <button
        //             onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }}
        //             className="addEmployee">
        //             Save New Employee
        //         </button>
        //     </>)

}