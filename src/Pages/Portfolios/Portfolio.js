import React, { useState } from "react";
import { Badge, Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { profileData } from "../../data";

const btnArr = [
  { title: "All", key: "all" },
  {
    title: "Company",
    key: "company_project",
  },
  {
    title: "Personal",
    key: "personal_projects",
  },
];

const Portfolio = () => {
  const allProjectsObject =  profileData.projects.map((data) => data.projectList)
  const [fst, sec] = allProjectsObject;
  
  const allProjects = [...fst, ...sec]

  const [activeProject, setActiveProject] = useState({
    title: "All",
    data: allProjects,
    key: "all",
  });

  const handleActiveProjectList = (btnObj) => {
    const { key, title } = btnObj;
    let active =[]
    if(key !==btnArr[0].key){
       active = profileData.projects.filter(
        (data) => data.name === key
      );
    }
    
    setActiveProject({
      title,
      data: btnObj.key!=="all"? active[0].projectList: allProjects,
      key
    })
  };

  return (
    <>
      <section className="d-flex justify-content-between align-items-center pe-3">
      <ButtonGroup size="lg" className="mb-2">
        {btnArr.map((btn) => (
          <Button key={btn.key} variant={activeProject.key===btn.key ? "info" :"outline-info"} onClick={() => handleActiveProjectList(btn)}>
            {btn.title}
          </Button>
        ))}
      </ButtonGroup>
      <div>
        <strong>Total: </strong> {activeProject.data?.length}
      </div>
      </section>
      <Row>
        {activeProject.data.map((project) => (
          <ProjectItem project={project} />
        ))}
      </Row>
    </>
  );
};

const ProjectItem = ({ project }) =>
  project.projectTitle && (
    <Col md={4} sm={12} className="p-2" key={project.projectTitle}>
      <Card className="projectCards">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
          <span>{project.projectTitle}</span>
          <a href={project.url} target="_blank">
            <Button variant="info" className="my-2 text-white">
              Visit Url
            </Button>
          </a>
          <p>
            {project.technologies.map((tech) => (
              <Badge bg="light" text="dark" className="m-1" key={tech}>
                {tech}
              </Badge>
            ))}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );

export default Portfolio;
