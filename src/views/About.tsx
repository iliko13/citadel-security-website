import { AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="relative flex min-h-screen select-none items-center justify-center overflow-y-auto overflow-x-hidden"
    >
      <div className="item flex w-full max-w-screen-2xl flex-col gap-12  px-12 py-16 xl:flex-row  xl:justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="titleFont select-none text-center text-4xl font-bold text-stone-800 sm:text-5xl lg:text-[64px] "
          >
            About <span className="text-indigo-700">Us</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" buttonFont select-none"
          >
            At Citadel, we are committed to providing top-tier defense security
            solutions that safeguard what matters most to you. With a team of
            dedicated experts and state-of-the-art technology, we are your
            trusted partner in fortifying your security. Our mission is to offer
            24/7 protection, giving you the peace of mind you deserve. We
            believe in the strength of our services and the safety they provide.
            Choose Citadel as your first line of defense, and let us protect
            your world.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center gap-6  text-4xl "
          >
            <button className="transition-all duration-300 ease-linear hover:text-blue-600">
              <AiFillFacebook />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
