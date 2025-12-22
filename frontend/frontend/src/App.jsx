import About from "./components/About/about";
import { Route, Routes } from "react-router-dom";
import Services from "./components/services/services";
import Home from "./components/Home/home";
// import HealthLibrary from "./components/links/health_library/Health_library";
import Contact from "./components/Contact/contact";

function App() {
  return (
      <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <HealthLibrary/> */}
    </>
  );
}

export default App;
