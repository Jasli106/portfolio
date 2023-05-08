import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      {<Skills />}
      <Gallery />
    </div>
  );
}

export default App;
