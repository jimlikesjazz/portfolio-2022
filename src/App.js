import "./App.css";
import "./components/Header/Header.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <div className="App" id="blah">
        <div id="header-body">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/bio">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
