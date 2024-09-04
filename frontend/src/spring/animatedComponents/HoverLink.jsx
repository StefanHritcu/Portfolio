import React from "react";
import { useSpring, animated } from "@react-spring/web";

const HoverLink = ({ children, href }) => {
  const [isHovered, setHovered] = React.useState(false);

  // Animazione per la linea
  const lineAnimation = useSpring({
    width: isHovered ? "100%" : "0%",
    config: { tension: 300, friction: 20 },
  });

  // Animazione per il testo offuscato
  const textAnimation = useSpring({
    opacity: isHovered ? 0.6 : 1,
    color: isHovered ? "#e7472b" : "#2f355c",
    fontSize: isHovered ? "1.02rem" : "1rem",
    config: { duration: 400 },
  });

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 10px",
        textDecoration: "none", // Disabilita la sottolineatura predefinita
      }}
    >
      <animated.span style={textAnimation}>{children}</animated.span>
      <animated.div
        style={{
          ...lineAnimation,
          height: "2px",
          background: "#e7472b",
          position: "absolute",
          bottom: "-2px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </a>
  );
};

export default HoverLink;
