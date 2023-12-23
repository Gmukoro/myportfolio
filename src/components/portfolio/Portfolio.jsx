import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce App",
    img: "",
    desc: "Elevate Your Shopping Experience. Immerse yourself in the future of online shopping with our E-Commerce Platform, meticulously crafted with a blend of JavaScript, React, TypeScript, and CSS. Discover a seamless and intuitive shopping journey, where the frontend harmonizes with the backend to create a visually stunning and responsive interface. ",
  },
  {
    id: 2,
    title: "React Portfolio",
    img: "/portfolio.png",
    desc: "Explore my React Portfolio, a blend of React, TypeScript, HTML, CSS, and Framer Motion. Seamless navigation, elegant animations, and a touch of creativity redefine web development possibilities. Witness innovation at its best – click through and discover the artistry in code.",
    link: "https://github.com/Gmukoro/myportfolio",
  },
  {
    id: 3,
    title: "GPT3 Open AI",
    img: "ai.png",
    desc: "Frontend Brilliance in Conversational Innovation. Explore the forefront of conversational innovation with ChatGPT AI, where the frontend is the star, built with JavaScript, React, TypeScript, and CSS expertise. Engage in dynamic conversations through an interface that seamlessly combines React's interactivity, TypeScript's precision, and CSS's sleek styling. ",
    link: "https://github.com/Gmukoro/GPT-3",
  },
  {
    id: 4,
    title: "Music App",
    img: "music-app.png",
    desc: "Web Development Mastery Unleashed. Experience the future of web development with my Spotify Replica Music app. Meticulously crafted with JavaScript and CSS mastery, it features a modern homepage, a robust music player, and advanced song exploration. Uncover lyrics seamlessly, explore popular music trends. ",
    link: "https://github.com/Gmukoro/music-player-app",
  },
  {
    id: 5,
    title: "Restaurant Website",
    img: "restaurant-app.png",
    desc: "Elevating Dining Experiences with React Mastery. Embark on a gastronomic adventure with my Restaurant App, meticulously developed using React, JavaScript, and CSS. Immerse yourself in a visually enchanting experience designed for seamless navigation and culinary discovery. ",
    link: "https://github.com/Gmukoro/mykitchen",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="__blank">
                See Github Code
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
