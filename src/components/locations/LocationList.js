import { useEffect, useState } from "react"
import "./LocationList.css"
//import { Navigate } from "react-router-dom"


export const LocationList = () => {
    const [locations, setLocations] = useState([])

    //const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(

        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (kandyUserObject) {
                setLocations(locations)
            }
        }
    )

    return (
        <>
            <div className="locationList">
                <h2 className="header">Locations</h2>
                <article className="locations" >
                    {locations.map(
                        (location) => {
                            return <section className="location" key={`location--${location.id}`}>
                                <h4>{location.name}</h4>
                                <p>{location.address}</p>
                                <p>{location.sqFootage}</p>
                                <br></br>
                            </section>
                        }
                    )}
                </article>
            </div>
        </>
    )


}