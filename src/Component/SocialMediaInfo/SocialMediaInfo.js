import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMailReply,
  faUser,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaInfo = () => {
  const socialMediaData = [
    {
      icon: faGithub,
      url: "https://github.com/meshramsaroj",
      id: "git",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/saroj-meshram-442a72179",
      id: "linkedIn",
    },
    {
      icon: faEnvelope,
      url: "sarojmeshram1911@gmail.com",
      id: "gmail",
    },
    {
      icon: faUser,
      url: "https://saroj-meshram-portfolio.netlify.app/",
      id: "profile",
    },
    // {
    //   icon: faInstagram,
    //   url: "https://www.instagram.com/saroj_1911/?igsh=cXF3cDFod2dnNDNj",
    //   id: "instagram"
    // },
    // {
    //   icon: faFacebook,
    //   url: "#",
    //   id: "facebook"
    // },
  ];
  return (
    <div className="d-flex align-items-center justify-content-center">
      {socialMediaData.map((data) => (
        <a
          target="_blank"
          className="text-reset p-1"
          href={data.url}
          key={data.id}
        >
          <FontAwesomeIcon icon={data.icon} size="xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaInfo;
