import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import linkedin from '../Img/lin.png'
import github from '../Img/github.png'
import email from '../Img/email.png'
import React from "react";

function Contact() {
    return (
        <div style={{display: 'flex', position:"relative", justifyContent:'center', alignItems:'center', height: 'auto', width: 'auto', paddingTop:"60%"}}>
            <h1 id="contact" style={{ position: "absolute", top: "7.5%", textAlign: "center", left: "50%", transform: "translate(-50%, -50%)", background: "linear-gradient(to right, #FF5F6D 0%, #FFC371 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "7vw",clipPath:"inset(1px)" }}>
                Contact:
            </h1>

            <div style={{ position:"absolute", top:"50%", right:"70%"}}>
                <Image src={linkedin} style={{ width: "20vw"}}></Image>
            </div>
            <div style={{position:"absolute", top:"75%", right:"68%"}}>
                    <Button href='https://www.linkedin.com/in/rafaelpadillaperez/' variant="dark" style={{ width: "25vw", height: "7vw", fontSize: "2.5vw", whiteSpace: "nowrap", background:"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>Let's connect!</Button>
            </div>

            <div style={{ position:"absolute", top:"30%", right:"40%"}}>
                <Image src={github} style={{ width: "20vw"}}></Image>
            </div>
            <div style={{position:"absolute", top:"75%", right:"38%"}}>
                    <Button href='https://github.com/Rafapp' variant="dark" style={{ width: "25vw", height: "7vw", fontSize: "2.5vw", whiteSpace: "nowrap", background:"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>My GitHub</Button>
            </div>

            <div style={{ position:"absolute", top:"30%", right:"10%"}}>
                <Image src={email} style={{ width: "20vw"}}></Image>
            </div>
            <div style={{position:"absolute", top:"75%", right:"8%"}}>
                <Button href='mailto: rpadiper@gmail.com' variant='dark'  style={{ width: "25vw", height: "7vw", fontSize: "2.5vw", whiteSpace: "nowrap", background:"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>Contact e-mail</Button>
                <p style={{color:"white", paddingTop:"5%", textAlign:"center", fontSize:"2vw"}}>rpadiper@gmail.com</p>
            </div>
        </div>
    );
}


export default Contact;