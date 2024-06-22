import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {FaFacebookF, FaYoutube, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Gourav.</div>
      <div>
        <Link to={"https://www.facebook.com/lipu.dash.5895"} target="_blank">
          <FaFacebookF />
          </Link>
        {/* <Link to={"/"} target="_blank">
          <FaYoutube /> */}
          <Link to={"https://github.com/KumarGourav163"} target="_blank">
          <FaGithub />
          </Link>
        <Link to={"https://www.linkedin.com/in/gourab-kumar-dash-951965245/"} target="_blank">
          <FaLinkedin />
          </Link>
        <Link to={"https://www.instagram.com/_kumar_gourav__/"} target="_blank">
          <RiInstagramFill />
          </Link>
          <Link to={"https://x.com/KumarGo39129043"} target="_blank">
          <FaTwitter />
          </Link>
      </div>
    </footer>
  );
};

export default Footer;