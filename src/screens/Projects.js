import { motion } from "framer-motion";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard"
import "./styles/projects.css"

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='projects-wrapper'>
      <motion.div 
        className="projects-top"
        initial={{
          y: -5,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <h1>
          Projects
        </h1>
        <h4>
          These are some of the projects I've worked on!
        </h4>
      </motion.div>
      <div className="projects-cards-wrapper">
        <ProjectCard
          title={"WorkFlow"}
          type={"Mobile App"}
          route="workflow"
          image_src="/assets/workflow.png"
          image_alt="Login page of WorkFlow"
          wrapper_style={{
            background:
              "linear-gradient(180.14deg,#004986 .12%,#22303C 62.01%)#1a1a1a",
          }}
        />

        <ProjectCard
          title={"YouTube Downloader"}
          type={"Web App"}
          route="youtube-downloader"
          image_src="/assets/youtube-mac.png"
          image_alt="YouTube Logo"
          wrapper_style={{
            background:
              "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(40,40,40,1) 100%)",
          }}
          image_style={{
            height: "70%",
          }}
        />

        {/* Pic from https://www.freepik.com/ */}
        <ProjectCard
          title={"Oil Rig Data Analyzer"}
          type={"Web App"}
          route="oil-data-analyzer"
          image_src="/assets/oil-mac.png"
          image_alt="Oil Rig"
          wrapper_style={{
            background:
              "linear-gradient(238deg, rgba(255,175,204,1) 0%, rgba(189,224,254,1) 100%)",
          }}
          type_style={{
            color: "#1A1A1A"
          }}
          image_style={{
            height: "70%",
          }}
        />

        {/* Pic from https://www.flaticon.com/ */}
        <ProjectCard
          title={"File Sorter"}
          type={"Web App"}
          route="file-sorter"
          image_src="/assets/file-mac.png"
          image_alt="File"
          wrapper_style={{
            background:
              "linear-gradient(144deg, rgba(251,133,0,1) 0%, rgba(255,183,3,1) 100%)",
          }}
          type_style={{
            color: "#1A1A1A"
          }}
          image_style={{
            height: "70%",
          }}
        />


      </div>
    </div>
  )
}

export default Projects