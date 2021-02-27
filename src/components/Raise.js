import React from "react";
import { animated, useSpring } from "react-spring";

const Raise = ({ height = 0, timing = 150, children }) => {
  const [isRaised, setIsRaised] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isRaised ? `translateY(-${height}px)` : "translateY(0px)",
    config: {
      mass: 1,
      tension: 400,
      friction: 15
    }
  });

  React.useEffect(() => {
    if (!isRaised) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsRaised(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isRaised, timing]);
  const trigger = () => {
    setIsRaised(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Raise;
