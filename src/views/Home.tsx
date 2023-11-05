//framer-motion
import { motion } from "framer-motion";
import cover from "../assets/citadel-img.jpeg";
import logo from "../assets/logo_transparent.png";

const Home = () => {
  return (
    <div
      id="home"
      className=" relative flex min-h-screen select-none items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-900"
    >
      <div className="absolute inset-x-0 top-0 h-[70px] w-[200px] ">
        <motion.img
          src={logo}
          alt="logo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        />
      </div>

      <div className="h-[200px] w-[600px] ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 2, y: 0 },
          }}
          className="titleFont text-center text-xl  text-stone-100"
        >
          When it comes to safeguarding your valuable assets and ensuring peace
          of mind, <span className="text-indigo-500">Citadel</span> is the best
          choice. We offer comprehensive security solutions tailored to your
          specific needs. Whether you're protecting your home, business, or any
          other property,
          <span className="text-indigo-500">Citadel</span> is your trusted
          partner in providing top-tier security. Don't compromise on your
          safety; choose <span className="text-indigo-500">Citadel</span> for
          uncompromising protection.
        </motion.div>
        <div className="mx-4 mt-8 w-full ">
          <img src={cover} alt="cover" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
