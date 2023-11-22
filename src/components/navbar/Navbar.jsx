import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Godspower Mukoro
        </motion.span>
        <div className="social">
          <div className="hide">
            <a
              href="https://web.facebook.com/mukoro.godspower.3?_rdc=1&_rdr"
              target="blank"
            >
              <img src="/facebook.png" alt="facebook logo" />
            </a>
          </div>
          <div className="onhoverdisplay">
            <p>facebook</p>
          </div>

          <a
            href="https://twitter.com/Guspiloo"
            target="blank"
            className="hide"
          >
            <img src="/X.png" alt="X logo" />
          </a>

          <p className="onhoverdisplay">X</p>

          <a
            href="https://www.linkedin.com/in/godspower-mukoro/"
            target="blank"
            className="hide"
          >
            <img src="/LinkedIn.png" alt="LinkedIn logo" />
          </a>
          <p className="onhoverdisplay">LinkedIn</p>

          <a href="https://github.com/Gmukoro" target="blank" className="hide">
            <img src="/github.png" alt="Github logo" className="hide" />
          </a>
          <p className="onhoverdisplay">Github</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
