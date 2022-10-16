import React from "react";
import { Image } from "react-bootstrap";
import RafaIcon from "../Img/RafaIcon.png"
function About(){
    return(
        <div id="about" bg='dark' style={{position:"relative", paddingTop:"60%", backgroundColor:"#212529"}}>
            <h1 style={{position:"absolute", textAlign:"center", top:"15%", left:"25%", transform: "translate(-50%, -50%)", color:"white", fontSize:"7vw", whiteSpace:"nowrap"}}>About me</h1>
            <p style={{position:"absolute", textAlign:"left", top:"60%", left:"30%", right:"25%", transform: "translate(-50%, -50%)", color:"white", fontSize:"2vw"}}>
            Since I was a kid, I fell in love with computers, technology, and games. <br></br><br></br> There's nothing that brings me more joy than making games and software that brighten other people's days!<br></br><br></br> With all this passion, i'm eager to get my foot on the door as a Game Developer or Software Engineer by bringing my experience and ideas to the table while growing as a person.
            </p>
            <Image src={RafaIcon} style={{position:"absolute", top:"20%", left:"55%", width:"40vw", height:"40vw"}}></Image>
        </div>
    );
}
export default About;