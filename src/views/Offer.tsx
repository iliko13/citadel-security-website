import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="project"
      className="relative min-h-screen select-none overflow-y-auto overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-12 py-16">
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
            className=" mb-8 select-none text-center text-4xl font-bold text-stone-800 sm:text-5xl lg:text-[64px] "
          >
            Premium Security <span className="text-indigo-700">Packages</span>
          </motion.h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
            <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:flex lg:space-x-20">
              <div className="h-[550px] w-[300px]  border-4 border-indigo-800 p-3 text-center">
                <span className="border-b-4 border-indigo-700 text-2xl font-bold">
                  Basic
                </span>
                <div className="mt-8 space-y-2 text-start">
                  <h1 className="mb-3 text-center text-lg font-medium">
                    For Homeowners and Small Businesses
                  </h1>
                  <li>
                    <span className=" font-semibold">24/7 Monitoring:</span> Our
                    team keeps a watchful eye on your property at all times.
                  </li>
                  <li>
                    <span className="font-semibold">Access Control:</span>{" "}
                    Secure your premises with controlled entry and exit points.
                  </li>
                  <li>
                    <span className=" font-semibold">Intrusion Detection:</span>{" "}
                    Immediate response to unauthorized access or suspicious
                    activities.
                  </li>
                  <li>
                    <span className=" font-semibold">Emergency Response:</span>{" "}
                    Swift action in case of alarms or security breaches.
                  </li>
                </div>
              </div>

              <div className="h-[550px] w-[300px]  border-4 border-indigo-800 p-3 text-center">
                <span className="border-b-4 border-indigo-700 text-2xl font-bold">
                  Premium
                </span>
                <div className="mt-8 space-y-2 text-start">
                  <h1 className="mb-3 text-center text-lg font-medium">
                    deal for Offices and Medium-sized Businesses
                  </h1>
                  <li>
                    <span className=" font-semibold">
                      Everything in the Basic Package, plus:
                    </span>{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Video Surveillance:</span>{" "}
                    High-definition cameras for real-time monitoring and
                    recorded footage.
                  </li>
                  <li>
                    <span className=" font-semibold">Patrol Services:</span>{" "}
                    Regular patrols of your property for added deterrence.
                  </li>
                  <li>
                    <span className=" font-semibold">
                      Alarm System Integration:
                    </span>{" "}
                    Advanced alarm systems connected to local authorities.
                  </li>
                  <li>
                    <span className=" font-semibold">Remote Access:</span>{" "}
                    Monitor your property in real-time from anywhere via mobile
                    devices.
                  </li>
                </div>
              </div>

              <div className="h-[550px] w-[300px]  border-4 border-indigo-800 p-3 text-center">
                <span className="border-b-4 border-indigo-700 text-2xl font-bold">
                  Executive
                </span>
                <div className="mt-8 space-y-2 text-start">
                  <h1 className="mb-3 text-center text-lg font-medium">
                    Designed for High-Value Assets and Restaurants
                  </h1>
                  <li>
                    <span className=" font-semibold">
                      Everything in the Premium Package, plus:
                    </span>{" "}
                  </li>
                  <li>
                    <span className="font-semibold">
                      Personalized Security Plans:
                    </span>{" "}
                    Tailored solutions to meet specific needs.
                  </li>
                  <li>
                    <span className=" font-semibold">VIP Protection:</span>{" "}
                    Security detail for key personnel or high-profile guests.
                  </li>
                  <li>
                    <span className=" font-semibold">
                      Advanced Access Control:
                    </span>{" "}
                    Biometric and facial recognition systems.
                  </li>
                  <li>
                    <span className=" font-semibold">
                      Rapid Response Team:{" "}
                    </span>{" "}
                    Immediate action in high-threat situations.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
