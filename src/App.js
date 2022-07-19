import logo from "./logo.svg";
import "./App.css";
import "./components/Header/Header.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import lines from "./images/lines.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${lines})`,

        backgroundSize: "cover",
      }}
    >
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
