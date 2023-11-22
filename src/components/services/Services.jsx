import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cross-Language Integration Mastery</h2>
          <p>
            Leverage my expertise in C, JavaScript, Python, and TypeScript to
            seamlessly integrate diverse backend technologies. Build robust
            frontend solutions that bridge the gap between different programming
            languages, ensuring a cohesive and efficient application.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Interactive Data Visualizations</h2>
          <p>
            Harness the power of JavaScript, Python, and React to create
            captivating and interactive data visualizations. Transform complex
            information into engaging visuals, providing users with a
            comprehensive understanding of their data.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Real-Time Collaboration Tools</h2>
          <p>
            Elevate your team's productivity with real-time collaboration tools
            built using my frontend engineering skills. Experience seamless
            collaboration through shared document editing, collaborative
            whiteboards, and interactive project management interfaces.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Progressive Web Apps (PWAs) Excellence</h2>
          <p>
            Explore the advantages of Progressive Web Apps crafted with React,
            TypeScript, and SCSS. Deliver native app-like experiences on the
            web, complete with offline functionality, push notifications, and
            lightning-fast loading times.
          </p>
          <button>Go</button>
        </motion.div>

        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Progressive Web Apps (PWAs) Excellence</h2>
          <p>
            Explore the advantages of Progressive Web Apps crafted with React,
            TypeScript, and SCSS. Deliver native app-like experiences on the
            web, complete with offline functionality, push notifications, and
            lightning-fast loading times.
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
      <h1 className="app__services-btn">
        <button type="button" style={{ justifyContent: "center" }}>
          See More
        </button>
      </h1>
    </motion.div>
  );
};

export default Services;
