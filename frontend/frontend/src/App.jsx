import About from "./components/About/about";
import { Route, Routes } from "react-router-dom";
import Services from "./components/services/services";
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import HealthLibrary from "./components/links/health_library/Health_library";
import ClinicalTrials from "./components/links/clinical_trails/ClinicalTrials";
import Newsroom from "./components/links/Newsroom/newsroom";
import SchoolOfMedicine from "./components/links/School_of_medicine/SchoolOfMedicine";
import MedicalEducation from "./components/links/Medical_Education/MedicalEducation";

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
      {/* <ClinicalTrials/> */}
      {/* <Newsroom/> */}
      {/* <SchoolOfMedicine/> */}
      {/* <MedicalEducation/> */}
    </>
  );
}

export default App;
