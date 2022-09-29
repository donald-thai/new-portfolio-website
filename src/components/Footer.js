import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import {IoMdMail} from "react-icons/io"
import "./styles/footer.css"

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-icons-wrapper">
        <a href="https://www.linkedin.com/in/donald-thai/" target="_blank"><FaLinkedin size={30} className="footer-icon"/></a>
        <a href="https://github.com/donald-thai" target="_blank"><FaGithubSquare size={30} className="footer-icon"/></a>
        <a href="mailto:donaldthai@utexas.edu"><IoMdMail size={36} className="footer-icon" /></a>
      </div>
      <div className="footer-copyright">
        <h4>© 2022 Donald Thai. All rights reserved.</h4>
      </div>
    </div>
  )
}

export default Footer