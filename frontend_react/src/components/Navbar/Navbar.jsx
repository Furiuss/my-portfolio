import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <motion.nav
      initial={{ y: '-100vw' }}
      animate={{ y: 0 }}
      transition={{type: 'spring', stiffness: 120}}
      className={scrolled ? 'scrolled app__navbar' : 'app__navbar'}
    >
      <div className="app__navbar-logo">
        <motion.h1
          whileHover={{
            scale: 1.1,
            color: '#9922ff',
            transition: {
              duration: 0.3,
              yoyo: Infinity,
            }
          }}
        >
          ANDRÉ
        </motion.h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills", "testemonial"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "contact",
                "work",
                "skills",
                "testemonial",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
