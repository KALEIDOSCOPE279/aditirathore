import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  // Opacity transforms for each layer
  // Sky is visible from 0 to 0.33, then fades out
  const skyOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  
  // Greeny fades in from 0.25, full at 0.33, starts fading at 0.58, gone at 0.66
  const greenyOpacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  
  // Sunset fades in from 0.58, full at 0.66, starts fading at 0.91, gone at 1.0 (though it's the last section, maybe it fades to night)
  const sunsetOpacity = useTransform(scrollYProgress, [0.58, 0.66, 0.85, 1], [0, 1, 1, 0]);
  
  // Night fades in at the very end
  const nightOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  // Subtle parallax move effect
  const yMove1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const yMove2 = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const yMove3 = useTransform(scrollYProgress, [0, 1], ['0%', '2%']);

  const layerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  };

  return (
    <>
      <motion.div
        style={{
          ...layerStyle,
          backgroundImage: 'url(/images/sky.png)',
          opacity: skyOpacity,
          y: yMove1,
          zIndex: -4
        }}
      />
      <motion.div
        style={{
          ...layerStyle,
          backgroundImage: 'url(/images/greeny.png)',
          opacity: greenyOpacity,
          y: yMove2,
          zIndex: -3
        }}
      />
      <motion.div
        style={{
          ...layerStyle,
          backgroundImage: 'url(/images/sunset.png)',
          opacity: sunsetOpacity,
          y: yMove3,
          zIndex: -2
        }}
      />
      <motion.div
        style={{
          ...layerStyle,
          backgroundImage: 'url(/images/night.png)',
          opacity: nightOpacity,
          zIndex: -1
        }}
      />
    </>
  );
};

export default ParallaxBackground;
