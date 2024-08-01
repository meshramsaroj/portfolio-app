import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolios/Portfolio';

import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Layout from './Component/Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Container fluid className='p-0 bg-page-body'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="about-me" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="my-resume" element={<Resume />} />
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
