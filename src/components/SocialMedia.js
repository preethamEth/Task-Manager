import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
const SocialMedia = () => {
  return (
    <div className="social">
      <h3>Social Media Handles </h3>
      <a
        href="https://twitter.com/preetham_eth"
        className="twitter social"
        style={{ paddingRight: 20 }}
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/preetham-kumar-a8689022a/"
        className="linkedin social"
        style={{ paddingRight: 20 }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://discord.gg/zn2kZSX2xq"
        className="discord social"
        style={{ paddingRight: 20 }}
      >
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;
