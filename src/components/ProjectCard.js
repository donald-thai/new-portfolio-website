import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/projectcard.css"

const ProjectCard = ({title, type, route, image_src, image_alt, wrapper_style, title_style, type_style, image_style}) => {

  let navigate = useNavigate();

  return (
    <motion.div
      className="project-card-wrapper"
      onClick={() => navigate(route)}
      style={wrapper_style}
      initial={{ 
        opacity: 0,
      }}
      whileInView={{ 
        opacity: 1,
        transition: {
          duration: 1,
        }
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="project-card-title">
        <h1 style={title_style}>{title}</h1>
        <h4 style={type_style}>{type}</h4>
      </div>
      <div className="project-card-image-wrapper">
        <img
          src={image_src}
          alt={image_alt}
          className="project-card-image"
          style={image_style}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
