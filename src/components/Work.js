import React from "react";
// motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";
// images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div class="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            class="flex-1 flex flex-col gap-y-12 mb-6 lg:mb-0"
          >
            <div>
              <h2 class="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p class="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                ipsum temporibus sed modi in facere pariatur officia corporis
                voluptates asperiores.
              </p>
              <button class="btn btn-sm">View All Projects</button>
            </div>
            <div class="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                class="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="Img1"
              />
              <div class="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span class="text-gradient">UI/UX Design</span>
              </div>
              <div class="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span class="text-3xl text-white">Project Tittle</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            class="flex-1 flex flex-col gap-y-10 justify-end"
          >
            <div class="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                class="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="Img2"
              />
              <div class="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span class="text-gradient">Web Development</span>
              </div>
              <div class="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span class="text-3xl text-white">Project Tittle</span>
              </div>
            </div>
            <div class="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div class="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                class="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="Img3"
              />
              <div class="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span class="text-gradient">Digital Marketing</span>
              </div>
              <div class="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span class="text-3xl text-white">Project Tittle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
