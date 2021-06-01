import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
  
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
      <>
      <h2>Locations</h2>
    <section className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`}>
              <div className="location__address">
                <h3>{ location.address }</h3>
              </div>
              <div className="location__size">
                Size: { location.squareFootage }
              </div>
            </div>
          )
        })
      }
    </section>
    </>
  )
}