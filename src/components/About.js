import React from "react";
// countup
import CountUp from "react-countup";
// intersection ovserver hook
import { useInView } from "react-intersection-observer";
// import motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" class="section" ref={ref}>
      <div class="container mx-auto">
        <div class="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            class="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            class="flex-1"
          >
            <h2 class="h2 text-accent">About me</h2>
            <h3 class="h3 mb-4">I am a Frontend Web Developer</h3>
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              reprehenderit, iste repudiandae nisi earum, voluptas placeat
              tempora recusandae eaque dolor.
            </p>
            <div class="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div class="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div class="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div class="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div class="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div class="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div class="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Client
                </div>
              </div>
            </div>
            <div class="flex gap-x-8 items-center">
              <button class="btn btn-lg">Contact me</button>
              <a href="/" class="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
