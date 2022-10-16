import Image from 'react-bootstrap/Image'
import SumoCover from "../Img/SumoCover.gif"
import { Button } from 'react-bootstrap';

function Cover(){
    return(
        <>
            <div id='home' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'auto', width: 'auto', paddingTop:"91px"}}>
                <div style={{overflowX:"hidden",backgroundColor:"black", position:'relative', top:0, left:0}}>
                    <Image src={SumoCover} style={{overflowX:"hidden", opacity:.3, width:"100vw"}}></Image>
                    <h1 style={{position:"absolute", textAlign:"center", top:"30%", left:"50%", transform: "translate(-50%, -50%)", background:"linear-gradient(to right, #ef32d9 0%, #89fffd 100%)",WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontSize:"7vw", whiteSpace:"nowrap"}}>Rafael Padilla Perez</h1>
                    <h2 style={{position:"absolute", textAlign:"center", top:"45%", left:"50%", transform: "translate(-50%, -50%)", color:"white", fontSize:"3vw"}}>Game Developer, Software Engineer</h2>
                    <p style={{position:"absolute", textAlign:"center", top:"55%", left:"50%", transform: "translate(-50%, -50%)", color:"white", fontSize:"2vw", whiteSpace:"nowrap"}}>Welcome to my porfolio dear traveler! You may read more about me below</p>
                    <Button href='#about' variant="light" style={{position:"absolute", textAlign:"center", top:"65%", left:"50%", transform: "translate(-50%, -50%)", fontSize:"2vw"}}>About me</Button>
                </div>
            </div>
        </>
    );
}
export default Cover;