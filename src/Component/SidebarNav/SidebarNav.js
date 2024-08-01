import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './SidebarNav.css'
import { useState } from 'react';

function SidebarNav() {
  const brandName = "Saroj Meshram"
  const navOptions = [
    {
      title: "Home",
      pathUrl: "/",
      id: "home"
    },
    {
      title: "About Me",
      pathUrl: "/about",
      id: "about"
    },
    {
      title: "Skills",
      pathUrl: "/skills",
      id: "skills"
    },
    {
      title: "Resume",
      pathUrl: "/resume",
      id: "resume"
    },
    {
      title: "Portfolio",
      pathUrl: "/portfolio",
      id: "portfolio"
    },
    {
      title: "Contact",
      pathUrl: "/contact",
      id: "contact"
    }
  ]
  const [activeOption, setActiveOption] = useState(navOptions[0].id)

  const handleActiveNavOption = (value)=> {
    setActiveOption(value)
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="brandTheme navHeight" fixed='top'>
      <Container>
        <Navbar.Text>
          <Link to={"/"} className='text-decoration-none text-white text-uppercase'>
          {brandName}
          </Link>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {navOptions.map((option)=> (
              <Nav.Item key={option.id} className={`mx-2 text-uppercase ${activeOption==option.id && 'activeNav'}`} onClick={()=>handleActiveNavOption(option.id)}>
                <Link to={option.pathUrl} className='text-decoration-none text-white'>{option.title}</Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default SidebarNav;