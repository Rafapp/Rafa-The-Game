// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css"

// React imports

// Components
import Cover from './Components/Cover';
import NavigationBar from "./Components/NavigationBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <>
      <NavigationBar/>
      <Cover/>
      <About/>
      <Projects/>
      <Contact/>
      <Copyright/>
    </>
  );
}

export default App;
