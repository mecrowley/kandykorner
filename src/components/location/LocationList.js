import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
  
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])


  return (
      <>
      <h2>Locations</h2>
    <section className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`}>
              <div className="location__interior">
              <div className="location__address">
                <h3>{ location.address }</h3>
              </div>
                <div className="location__info">
              <div className="location__size">
                Size: { location.squareFootage }
              </div>
              <div className="location__hcAccess">
                Handicap Accessible: { location.handicapAccessible ? "Yes" : "No" }
              </div>
              </div>
              </div>
            </div>
          )
        })
      }
    </section>
    </>
  )
}