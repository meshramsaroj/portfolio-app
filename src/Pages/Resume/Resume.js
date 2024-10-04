import React from "react";
import { Col, Row } from "react-bootstrap";
import profileImg from "../../assets/profile-img.png";
import { profileData } from "../../data";
import SocialMediaInfo from "../../Component/SocialMediaInfo/SocialMediaInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCog, faSchool,  } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const {
    name,
    email,
    alternateEmail,
    contactInfo,
    address,
    designation,
  } = profileData.personalDetails;

  const skills = profileData.skills;
  const experience = profileData.experience;
  const education = profileData.education;
  console.log(education);

  const SkillItem = ({ skillName, year }) => (
    <p className="d-flex justify-content-between mb-1" key={skillName}>
      <span>{skillName}</span>
      <span>{year} year/s</span>
    </p>
  );
  return (
    <Row className="border border-dark border-2">
      <Col md={12} className="d-flex p-2 border-bottom border-dark border-2">
        <img src={profileImg} alt={name} width={200} height={200} />
        <section className="mx-3 d-flex flex-column justify-content-start align-items-start">
          <p className="h3">
            <strong>{name}</strong>
          </p>
          <p className="h5">{designation}</p>
          <p className="mb-1">
            <strong>Email</strong>: {email}
          </p>
          <p className="mb-1">
            <strong>Contact no</strong>: {contactInfo}
          </p>
          <p className="mb-1">
            <strong>Address</strong>: {address}
          </p>
          <SocialMediaInfo />
        </section>
      </Col>
      <Col md={12} className="border-bottom border-dark border-2 pt-2">
        <h4>Career Objective</h4>
        <p>{profileData.careerObjective}</p>
      </Col>
      <Col md={3} className="border-end border-dark border-2 py-2">
        <section className="skills">
          <h4 className=""><FontAwesomeIcon icon={faCog} size="sm" /> Technical Skills</h4>
          <div>
            {skills.map((s) => (
              <div key={s.name.split(" ").join("_")}>
                <h5 className="my-2">{s.name}</h5>
                <div>
                  {s.skillSet.map((skillItem, i) => (
                    <SkillItem
                      skillName={skillItem.name}
                      year={skillItem.yearOfExperience}
                      key={skillItem.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="soft-skills"></section>
        <section className="hobbies"></section>
        <section className="languages"></section>
      </Col>
      <Col md={9}>
        <section className="experience-details-section p-2">
          <h4><FontAwesomeIcon icon={faBriefcase} size="sm" /> {experience.title}</h4>
          <div>
            {experience.experienceList.map((exp, i) => (
              <div
                className="d-flex justify-content-between"
                key={exp.companyName.split(" ").join("_") + i}
              >
                <div>
                  <p className="mb-1">
                    <strong>{exp.companyName}</strong>
                    <br />
                    <span>{exp.designation}</span>
                  </p>
                  <div>
                    <p className="my-0">Roles and Responsibility:</p>
                    <ul>
                      {exp.responsibility.map((res, i) => (
                        <li key={res.split(" ").join("_") + i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  {i === 0 && "(Present)"} {exp.yearOfExperience}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="education-details-section p-2">
          <h4><FontAwesomeIcon icon={faSchool} size="sm" /> {education.title} Details</h4>
          <div>
            {education.collageList.map((collage) => (
              <div className="d-flex justify-content-between">
                <span>
                  <p className="mb-1 fw-bold">{collage.course}</p>
                  <p className="mb-1">{collage.university}</p>
                  <p>Grade: {collage.grade}</p>
                </span>
                <span>({collage.duration})</span>
              </div>
            ))}
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default Resume;
