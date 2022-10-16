// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css"

// React imports

// Components
import Cover from './Components/Cover';
import NavigationBar from "./Components/NavigationBar";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <NavigationBar/>
      <Cover/>
      <About/>
      <Projects/>
    </>
  );
}

export default App;
