import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import "./styles/home.css";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  let navigate = useNavigate();

  const base_time = 1;

  return (
    <div className="home-wrapper">
      <div className="home-top-color"></div>
      <div className="home-hero-wrapper">
        <div className="home-name-pic-wrapper">
          <motion.div
            className="home-name-wrapper"
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 10,
              opacity: 1,
              transition: {
                duration: base_time,
              },
            }}>
            <h1>
              HI, I'M <br /> DONALD THAI
            </h1>
          </motion.div>
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 10,
              opacity: 1,
              transition: {
                duration: base_time,
              },
            }}>
            <motion.img
              src="assets/IMG_4181.JPG"
              className="home-first-image"
              alt="Donald Thai"
            />
          </motion.div>
          <div className="home-hero-bottom">
            <motion.div
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 10,
                opacity: 1,
                transition: {
                  duration: base_time,
                  delay: base_time,
                },
              }}>
              <motion.div
                animate={{
                  y: ["15%", "-15%"],
                }}
                transition={{ duration: 0.7, yoyo: Infinity }}>
                <BsArrowDown className="home-arrow-down" size={95} />
              </motion.div>
            </motion.div>
            <motion.h4
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 10,
                opacity: 1,
                transition: {
                  duration: base_time,
                  delay: base_time,
                },
              }}>
              I create applications aimed at bettering my community
            </motion.h4>
            <motion.h1
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 10,
                opacity: 1,
                transition: {
                  duration: base_time,
                  delay: base_time,
                },
              }}>
              software <br /> engineer
            </motion.h1>
          </div>
        </div>
        {/* <div className="home-left-wrapper">
          <div className="home-second-image"></div>
          <div className="home-title-wrapper">
            <h1>software <br/> engineer</h1>
          </div>
        </div> */}
      </div>

      <motion.div 
        className="home-info-wrapper home-info-about-section"
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
        <div className="home-info-about-content">
          <h1>A little more about me 👋</h1>
          <h4>
            I am currently a sophomore pursiong a degree in Computer Science at
            the University of Texas at Austin. I enjoy solving problems and
            creating apps in my free time. I also love to play basketball and
            volleyball. Scroll down for some of my favorite projects!
          </h4>
          <motion.div
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
            className="home-about-button-wrapper">
            <Button
              size="large"
              className="home-about-button"
              onClick={() => {
                navigate("/about");
              }}>
              Learn More!
            </Button>
          </motion.div>
        </div>
        <div>
          <Avatar
            src="/assets/home_avatar.JPG"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="Profile Picture"
          />
        </div>
      </motion.div>
      <ProjectCard
        title={"WorkFlow"}
        type={"Mobile App"}
        route="/projects"
        image_src="/assets/workflow.png"
        image_alt="Login page of WorkFlow"
        wrapper_style={{
          background:
            "linear-gradient(180.14deg,#004986 .12%,#22303C 62.01%)#1a1a1a",
        }}
      />
    </div>
  );
};

export default Home;
