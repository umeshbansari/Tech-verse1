import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Contact.scss";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

// import Footer from "./Components/Footer";
// import "./Styles/Footer.scss";

// import "./Styles/services.scss";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/#home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
