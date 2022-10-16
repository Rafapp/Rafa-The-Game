// Bootstrap
import Carousel from 'react-bootstrap/Carousel'

// Slides
import Swerve from "../Img/swerve.gif"
import TakaTaka from "../Img/TakaTaka.gif"
import ThreadAhead from "../Img/ThreadAhead.gif"
import RetroNinja from "../Img/RetroNinja.gif"
import SumoCover from "../Img/SumoCover.gif"
import Maze from "../Img/maze.gif"
import VRlab from "../Img/VRlab.gif"
import HappyPlace from "../Img/HappyPlace.gif"

// Other imports

var slideInterval = 4000;

function Projects() {
    return (
        // Div for section
        <div id='projects'  style={{display:"flex", position: "relative", background:"linear-gradient(to top, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)", width:"100%", paddingBottom:"5vw"}}>
            <h1 style={{ position: "absolute", textAlign: "center", top: "10%", left: "50%", transform: "translate(-50%, -50%)", background:"linear-gradient(to right, #FF5F6D 0%, #FFC371 100%)",WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontSize: "7vw"}}>
                My projects:
            </h1>
            <div style={{ position: "relative", width: "100%", paddingTop: "15%"}}>
                <Carousel>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://play.google.com/store/apps/details?id=com.Quazaar.Swerve&hl=en_US&gl=US'>
                            <img
                                className="d-block w-100"
                                src={Swerve}
                                alt="First slide"
                                style={{  height: "50vw", objectFit:"cover", opacity:.75}}
                            />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Swerve</h3>
                            <p style={{fontSize:"3vw"}}>
                                An infinite runner with skins, lootboxes, and tons of obstacles!<br></br>Available on the google play store.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://github.com/Rafapp/SumoTime'>
                        <img
                            className="d-block w-100"
                            src={SumoCover}
                            alt="Second slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.6}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Sumo time</h3>
                            <p style={{fontSize:"3vw"}}>
                                My side project: A local and online multiplayer physics-based sumo wrestling game.<br></br> In progress!
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://github.com/Rafapp/Python-Maze-Generator'>
                        <img
                            className="d-block w-100"
                            src={Maze}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Python maze generator</h3>
                            <p style={{fontSize:"3vw"}}>
                                A maze generator with an implementation of Prim's Algorithm created along a colleague using Python and Pygame.<br></br>Features many solution algorithms.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://theraff.itch.io/happyplace'>
                        <img
                            className="d-block w-100"
                            src={HappyPlace}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>HappyPlace</h3>
                            <p style={{fontSize:"3vw"}}>
                                A game created for the CruzHacks hackathon in 24 hours, meant to transport you to your relaxed and Happy Place.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://github.com/Rafapp/SJSU-MaterialsEngineering-VR-lab'>
                        <img
                            className="d-block w-100"
                            src={VRlab}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>VR Materials Engineering Lab</h3>
                            <p style={{fontSize:"3vw"}}>
                                Research project at my university aimed at comparing the benefits of learning in VR compared to traditional methods.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://phalistafer.itch.io/taka-taka'>
                        <img
                            className="d-block w-100"
                            src={TakaTaka}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Taka Taka</h3>
                            <p style={{fontSize:"3vw"}}>
                                Japanese-themed rhythm game that started in Global Game Jam with a team of 8.<br></br> Releasing on Steam soon!
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item interval={slideInterval}>
                        <a href='https://play.google.com/store/apps/details?id=com.Quazaar.RetroNinja&hl=en_US&gl=US'>
                        <img
                            className="d-block w-100"
                            src={RetroNinja}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Retro Ninja</h3>
                            <p style={{fontSize:"3vw"}}>
                                Infinite runner featuring a retro 8-bit ninja.<br></br> Available on the Google Play Store.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <a href='https://andrew-w-pierce.itch.io/needle-and-thread'>
                        <img
                            className="d-block w-100"
                            src={ThreadAhead}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover", opacity:.5}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"6vw"}}>Thread Ahead!</h3>
                            <p style={{fontSize:"3vw"}}>
                                Game created with a team of 6 students for the Student Game Developers Alliance Jam.<br></br> Available on the Google Play Store.
                            </p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;