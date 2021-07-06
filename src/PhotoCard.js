import React from "react"

const PhotoCard = props => {
    return (
        <div className="card">
            <h2 className="title"> {props.title} </h2>
            <p className="date">{props.date}</p>
            <img className="photoImg" alt={props.explanation} src={props.hdurl} />
            <p className="explanation">{props.explanation}</p>
            
            <p className="copyright">Photo by: {props.copyright}</p>


        </div>

    )
}

export default PhotoCard;