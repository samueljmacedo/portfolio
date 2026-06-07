import './App.css';
import {Main} from "./main/main";
import {Content} from "./content/content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CentralHub from "./centralHub/CentralHub";

const LandingPage = () => (
  <section className="App">
    <Main />
    <Content />
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/export" element={<CentralHub />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
