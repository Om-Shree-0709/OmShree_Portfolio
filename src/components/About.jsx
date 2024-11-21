import React from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-lg transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-24 h-24 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>&lt;Overview /&gt;</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <Typewriter
          words={[
            "I specialize in React, Three.js, Node.js, and Tailwind CSS, with extensive experience in converting Figma designs into polished websites. My expertise lies in delivering efficient and innovative solutions, crafting responsive web applications, and creating immersive 3D visuals. I prioritize clean coding practices to ensure streamlined development and stay updated with industry advancements to consistently deliver high-quality, performant solutions.",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={30}
          deleteSpeed={0}
          delaySpeed={0}
        />
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
