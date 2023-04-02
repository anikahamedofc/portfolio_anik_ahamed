import React from "react";
// import motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center "
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch{" "}
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* from */}
          <motion.from
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6  pb-12 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
              class="border-b bg-transparent py-3 outline-none  w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
              type="text"
              placeholder="Your Email"
              class="border-b bg-transparent py-3 outline-none  w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea
              placeholder="Your Message"
              class="border-b bg-transparent py-3 outline-none  w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            ></textarea>
            <button class="btn btn-lg">Send Message</button>
          </motion.from>
        </div>
      </div>
    </section>
  );
};

export default Contact;
