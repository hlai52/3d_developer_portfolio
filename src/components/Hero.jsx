import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto sm:block hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5  `}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hester </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A strategic thinker <br className="sm:block hidden" /> with
            experience in business and technology, I develop strategies for
            complex challenges and create value at the intersection of both
            worlds.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-32 xs:bottom-0 mt-3  w-full flex justify-center items-center ">
        <div> → </div>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeateType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            <div></div>
          </div>
        </a>
        <div> </div>
      </div>
    </section>
  );
};

export default Hero;
