import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom'
import "./Employee.css"

export const EmployeeList = () => {

  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, [])

  const history = useHistory()

  return (
    <>
      <h2>Employees</h2>
      <section className="employees">
        {
          employees.map(employee => {
            return (
              <div className="employee" id={`employee--${employee.id}`}>
                <div className="employee__name">
                  <h3>{employee.name}</h3>
                </div>
                <div className="employee__location">
                  Location: {employee.location.address}
                </div>
                <div className="employee__manager">
                  Manager: {employee.manager ? "Yes" : "No"}
                </div>
                <div className="employee__fullTime">
                  Fulltime: {employee.fullTime ? "Yes" : "No"}
                </div>
                <div className="employee__hourlyRate">
                  Hourly Pay Rate: {employee.hourlyRate}
                </div>
              </div>
            )
          })
        }
      </section>
      <button onClick={
        () => history.push("/employees/create")
      }>
        Add Employee
      </button>
    </>
  )
}