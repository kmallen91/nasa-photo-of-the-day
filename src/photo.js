import React, {useState, useEffect} from "react"
import axios from "axios"
import PhotoCard from "./PhotoCard"

export default function Photo (){

const [currentPhoto, setPhoto] = useState({});

useEffect(()=>{
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
.then(response =>{
    console.log("Photo Data", response);
    const photo = response.data;
    setPhoto(photo);
    console.log("photo", photo)
})
.catch(error => {
    console.log("ERROR", error)
})
}, [])

return (
    
     <PhotoCard 
     title={currentPhoto.title}
     hdurl={currentPhoto.hdurl} 
     explanation={currentPhoto.explanation}
     date={currentPhoto.date} 
     copyright={currentPhoto.copyright} />
)
}