import Image from 'react-bootstrap/Image'
import SumoCover from "../Img/SumoCover.gif"

function Cover(){
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 'auto', width: 'auto'}}>
            <div style={{backgroundColor:"black", position:'absolute', top:0, left:0, width: "100%", height:"100%"}}>
            <Image src={SumoCover} style={{width:'100%', opacity:.1}}></Image>
            </div>
        </div>
    );
}
export default Cover;