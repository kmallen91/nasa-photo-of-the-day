import React, { useState, useEffect } from "react"
import DropButton from "./DropButton"
import axios from "axios"
import PhotoCard from "./PhotoCard"

export default function Drop() {
    const [dates, setDate] = useState("")
   let datesArr = [`2012-05-13`, `2009-01-20`, `2017-10-30`, `2005-05-20`, `2018-12-20` ];

    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dates}`)
        .then(response => {
            setDate(datesArr)
        })
        .catch(error => {
            console.log("ERROR", error)
        })

    })

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Other Dates
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href=
            </Dropdown.Menu>


        </Dropdown>
    )
        
}