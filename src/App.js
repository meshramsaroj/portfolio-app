import logo from './logo.svg';
import './App.css';
import SidebarNav from './Component/SidebarNav/SidebarNav';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolios/Portfolio';

import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Pages/NoPage/NoPage';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Routes>
          <Route path="/" element={<SidebarNav />}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Container>
      
    </BrowserRouter>
  );
}

export default App;
