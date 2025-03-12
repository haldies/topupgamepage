import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/page/homePage";
import MobileLegendPage from "./components/mobileLegendPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobilelegend" element={<MobileLegendPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
