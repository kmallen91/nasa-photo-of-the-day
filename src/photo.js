import React, {useState, useEffect} from "react"
import axios from "axios"
import PhotoCard from "./PhotoCard"
import JumboTitle from "./Jumbotron"
import DescriptButton from "./DescriptionCard"

export default function Photo (){

const [currentPhoto, setPhoto] = useState({});

useEffect(()=>{
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
.then(response =>{
    console.log("Photo Data", response);
    const photo = response.data;
    setPhoto(photo);
    
})
.catch(error => {
    console.log("ERROR", error)
})
}, [])

return (
    <div>
    <JumboTitle 
    title={currentPhoto.title}
    date={currentPhoto.date}
    />
     <PhotoCard 
     
     hdurl={currentPhoto.hdurl}        
     copyright={currentPhoto.copyright} />
     <DescriptButton explanation={currentPhoto.explanation} title={currentPhoto.title} />   
     </div>
)
}