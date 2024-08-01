import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
  const socialMediaData = [
    {
      icon: faGithub,
      url: "https://github.com/meshramsaroj",
      id: "git"
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/saroj-meshram-442a72179",
      id: "linkedIn"
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/saroj_1911/?igsh=cXF3cDFod2dnNDNj",
      id: "instagram"
    },
    {
      icon: faFacebook,
      url: "#",
      id: "facebook"
    },

  ]
  return (
    <Row>
      <Col md={4} sm={12}>
      <img src='https://lh3.googleusercontent.com/a/ACg8ocLnlVs6BqDTPyLzWpoyJg5OyEG_OZHaQADTLELvRkDq6SGe7lE=s360-c-no' alt='saroj-meshram' />
      </Col>
      <Col md={8} sm={12}>
       <section className='text-center'>
        <TypeAnimation
          sequence={[
            "Hello, I am Saroj Meshram. \nA Front end developer.", 
          ]}
          style={{ whiteSpace: 'pre-line', fontSize: '3em' }}
          speed={50}
          repeat={2}
        />
        <p className='mt-3'>Please click here to know more <Link to={"/about"}>About me</Link> and my <Link to={"/skills"}>Skills</Link></p>
       </section>
       <section className='text-center my-3'>
        <Button className='m-2' variant='info'>Hire Me</Button>
        <Button className='m-2' variant='info'>Download Resume</Button>
       </section>
       <section className='text-center'>
        {socialMediaData.map((data)=>(
          <a target='_blank' className='text-reset p-1' href={data.url} key={data.id}>
          <FontAwesomeIcon icon={data.icon} size='xl' />
          </a>
        ))}
        </section>
      </Col>
    </Row>
  )
}

export default Home