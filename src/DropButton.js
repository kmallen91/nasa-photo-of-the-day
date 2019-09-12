import React from "react"
import Drop from "./Drop"

const DropButton = {
    function dropdown() {
        document.getElementById('mydropdown').classList.toggle('show');
    };

    return (
        <div className="dropdown">
            <button className="dropbutton" id="mydropdown" onclick={dropdown()}>
                Other Dates
            </button>
            <div className="dropdown-content">
                <a href={props.date1}>Date 1</a>
                <a href={props.date2}>Date 2</a>
                <a href={props.date3}>Date 3</a>
                <a href={props.date4}>Date 4</a>
                <a href={props.date5}>Date 5</a>

            </div>

        </div>

    )

}


export default DropButton;