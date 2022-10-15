import Image from 'react-bootstrap/Image'
import SumoCover from "../Img/SumoCover.gif"
import { Button } from 'react-bootstrap';

function Cover(){
    return(
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'auto', width: 'auto'}}>
                <div style={{overflowX:"hidden",backgroundColor:"black", position:'relative', top:"-20vw", left:0}}>
                    <Image src={SumoCover} style={{overflowX:"hidden", opacity:.4, width:"100vw"}}></Image>
                    <h1 style={{position:"absolute", textAlign:"center", top:"50%", left:"50%", transform: "translate(-50%, -50%)", color:"white", fontSize:"7vw"}}>Rafael Padilla Perez</h1>
                    <h2 style={{position:"absolute", textAlign:"center", top:"70%", left:"50%", transform: "translate(-50%, -50%)", color:"white", fontSize:"3vw"}}>Game Developer, Software Engineer</h2>
                    <p style={{position:"absolute", textAlign:"center", top:"80%", left:"50%", transform: "translate(-50%, -50%)", color:"white", fontSize:"2vw"}}>Welcome to my porfolio dear traveler!<br></br> You may read more about me below</p>
                    <Button href='#about' variant="dark" style={{position:"absolute", textAlign:"center", top:"90%", left:"50%", transform: "translate(-50%, -50%)", fontSize:"2vw"}}>About me</Button>
                </div>
            </div>
        </>
    );
}
export default Cover;