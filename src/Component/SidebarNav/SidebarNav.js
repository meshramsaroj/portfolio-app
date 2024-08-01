import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './SidebarNav.css'
import { Fragment, useState } from 'react';

function SidebarNav() {
  const location = useLocation()
  const activeNav = location.pathname
  const brandName = "Saroj Meshram"
  const navOptions = [
    {
      title: "Home",
      pathUrl: "/",
      id: "home"
    },
    {
      title: "About Me",
      pathUrl: "/about-me",
      id: "about"
    },
    {
      title: "Skills",
      pathUrl: "/skills",
      id: "skills"
    },
    {
      title: "Resume",
      pathUrl: "/my-resume",
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
  const [activeOption, setActiveOption] = useState(activeNav)

  const handleActiveNavOption = (value)=> {
    setActiveOption(value)
  }
  return (
    <Fragment key={activeNav}>
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
              <Nav.Item key={option.pathUrl} className={`mx-2 text-uppercase ${activeOption==option.pathUrl && 'activeNav'}`} onClick={()=>handleActiveNavOption(option.pathUrl)}>
                <Link to={option.pathUrl} className='text-decoration-none text-white'>{option.title}</Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </Fragment>
  );
}

export default SidebarNav;