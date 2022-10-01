import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles/about.css";

const About = () => {
  const base_enter = 1.5;
  const [exit, setExit] = useState(false);

  // ensures that we are at the top of the page when navigating here



  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <motion.h1
          className="about-fading-text"
          initial={{
            y: -15,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: 0,
            transition: {
              delay: base_enter / 2,
              duration: base_enter,
              repeat: 1,
            },
          }}
          onAnimationStart={() =>
            setTimeout(() => {
              setExit(true);
            }, (base_enter + base_enter / 2) * 1000)
          }
          exit={{
            zIndex: -1,
          }}>
          {!exit ? "Lifelong Learner" : "Passionate Problem Solver"}
        </motion.h1>
        <motion.div
          className="about-hero-wrapper"
          initial={{
            opacity: 0,
            y:-15
          }}
          animate={{
            opacity: 1,
            y:0,
            transition: {
              duration: 1,
              delay: base_enter * 2 + base_enter/2 + base_enter/4,
            },
          }}>
          <img src="/assets/IMG_4251.JPG" alt="" />
          <div className="about-my-description">
            <h1>I'm Donald, an aspiring software engineer</h1>
            <p>
              I am a sophomore majoring in Computer Science at the University of
              Texas at Austin. As a TECDP intern at Cigna during the summer of 2022, I worked in an AGILE team to create a dashboard from start to almost MVP release while also working in a team of interns to develop a mobile app, <a href="/projects">WorkFlow</a>, to help employees make the most of their in-person days.
              <br/> <br/> I am interested in software engineering roles, especially front end and full stack ones.
              <br />
              <br />
              Here is a link to my <a href="https://drive.google.com/file/d/1J4o-jj0oSYTQXdWl3IZYomppUoufHP77/view?usp=sharing" target="__blank">resume</a> or it can be viewed below.

            </p>
          </div>

        </motion.div>
        <div className="about-my-interests">
          <h1>My Interests</h1>
          <h4>
            I love to watch <a href="">movies</a>, read <a href="">books</a>, learn new things, and play sports - basketball, volleyball, and ultimate frisbee. I'd also love to get into <a href="">photography</a>. 
          </h4>
        </div>
        <div className="about-my-resume">
          
        </div>
      </div>
    </div>
  );
};

export default About;
