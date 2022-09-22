import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles/about.css";

const About = () => {
  const base_enter = 2;
  const [exit, setExit] = useState(false);
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
              Texas at Austin. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Provident dolor adipisci pariatur quod, fugiat
              omnis doloremque necessitatibus dicta reprehenderit similique
              tempore officiis nihil vero cumque animi! Est aspernatur mollitia
              pariatur!{" "}
            </p>
          </div>

        </motion.div>
        <div className="about-my-interests">
          <h1>My Interests</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
