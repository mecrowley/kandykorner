import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    });

    const history = useHistory();

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = parseInt(employee.locationId)
        const hourlyRate = parseInt(employee.hourlyRate)
        const manager = eval(employee.manager)
        const fullTime = eval(employee.fullTime)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {

            const newEmployee = {
                name: employee.name,
                locationId: locationId,
                manager: manager,
                fullTime: fullTime,
                hourlyRate: hourlyRate
            }
            addEmployee(newEmployee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>
                    <select name="manager" id="manager" className="form-control" value={employee.manager} onChange={handleControlledInputChange}>
                        <option value="0">Select an option</option>
                        <option key={true} value={true}>yes</option>
                        <option key={false} value={false}>no</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full-Time: </label>
                    <select name="fullTime" id="fullTime" className="form-control" value={employee.fullTime} onChange={handleControlledInputChange}>
                        <option value="0">Select an option</option>
                        <option key={true} value={true}>yes</option>
                        <option key={false} value={false}>no</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Pay Rate:</label>
                    <input type="text" id="hourlyRate" required autoFocus className="form-control" placeholder="Hourly Pay Rate" value={employee.hourlyRate} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
                Save Employee
          </button>
        </form>
    )
}