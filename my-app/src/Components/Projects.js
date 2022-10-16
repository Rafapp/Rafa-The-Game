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
        <div id='projects'  style={{ position: "absolute", backgroundColor: "black", width:"100vw", paddingBottom:"5vw"}}>
            <h1 style={{ position: "absolute", textAlign: "center", top: "10%", left: "50%", transform: "translate(-50%, -50%)", background:"linear-gradient(to right, #ef32d9 0%, #89fffd 100%)",WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontSize: "7vw"}}>
                My projects:
            </h1>
            <div style={{ position: "relative", width: "50vw", paddingTop: "15%", left:"25%"}}>
                <Carousel fade="true">
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={Swerve}
                            alt="First slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Swerve</h3>
                            <p style={{fontSize:"2vw"}}>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={SumoCover}
                            alt="Second slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Sumo time</h3>
                            <p style={{fontSize:"2vw"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={Maze}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Python maze generator</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={HappyPlace}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>HappyPlace</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={VRlab}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>VR Materials Engineering Lab</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={TakaTaka}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Taka Taka</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={RetroNinja}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Retro Ninja</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={slideInterval}>
                        <img
                            className="d-block w-100"
                            src={ThreadAhead}
                            alt="Third slide"
                            style={{  height: "50vw", objectFit:"cover"}}
                        />
                        <Carousel.Caption>
                            <h3 style={{fontSize:"5vw"}}>Thread Ahead!</h3>
                            <p style={{fontSize:"2vw"}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;