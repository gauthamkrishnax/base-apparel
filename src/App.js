import logo from "./assets/logo.svg";
import heroDesk from "./assets/hero-desktop.jpg";
import heroMobile from "./assets/hero-mobile.jpg";
import "./styles/styles.scss";
import Email from "./Email";

function App() {
  return (
    <div className="App">
      <div className="main">
        <img src={logo} alt="Base Apparel Logo" />
        <img src={heroMobile} alt="female Model" className="hero mobile" />
        <div className="container">
          <h1 className="heading">
            We're <strong>Coming Soon</strong>
          </h1>
          <p className="paragraph">
            Hello fellow shoppers! we're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <Email />
        </div>
      </div>
      <div className="hero-container">
        <img src={heroDesk} alt="female Model" className="hero desktop" />
      </div>
    </div>
  );
}

export default App;
