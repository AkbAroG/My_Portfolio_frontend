import { motion } from "framer-motion";
import avatar from "../../../assets/image.png";


// const stats = [
//   { value: "5+", label: "Years Experience" },
//   { value: "10+", label: "Technologies" },
//   { value: "100+", label: "Projects Done" },
// ];

const About = () => {
  return (
    <section className="w-full px-6 md:px-12 py-24  text-white overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="uppercase text-sm tracking-[5px] text-orange-400 mb-2">
          ✦ Who I Am
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-orange-500">Me</span>
        </h1>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl">
            <img
              src={avatar}
              alt="avatar"
              className="w-[280px] md:w-[340px] rounded-xl object-cover"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl border border-orange-500/20 shadow-[0_0_60px_rgba(255,140,0,0.3)]"></div>
          </div>

          {/* Floating tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-5 -right-6 bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            ⚛️ React.JS
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-0 -left-6 bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            🟩 Node.JS
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-0 right-[-40px] bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            🐍 Python
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-[-40px] bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
           ❇️ MERN
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-[-40px] left-0 bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
           🤖 AI/ML
          </motion.div>
           <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-[-20px]  bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            📊 Data Science
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-[40%] left-[-40px]  bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            🚀 Full Stack
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-[40%] right-[-60px]  bg-[#111827] px-4 py-2 rounded-lg border border-orange-400 text-sm shadow-lg"
          >
            💻 Developer
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a passionate Data science student and MERN Stack Developer with
            a strong foundation in building modern, scalable, and user centric
            web applications. I specialize in developing end-to-end solutions
            from clean, responsive frontend to robust backend architectures.
            Alongside my MERN stack expertise,
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m actively expanding my skill set in Artificial Intelligence and
            Machine Learning to build smarter, data-driven products. I enjoy
            solving real-world problems, learning emerging technologies, and
            continuously improving my craft. I believe in writing clean code,
            following best practices, and delivering solutions that actually
            make an impact.
          </p>

          {/* Glass List */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
            <h2 className="font-bold text-lg text-orange-400 mb-3">
              Currently focused on:
            </h2>

            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Full Stack Development</li>
              <li>AI & Machine Learning</li>
              <li>Data Science</li>
              <li>Real-world Projects</li>
            </ul>
          </div>

          {/* Stats */}
          {/* <div className="flex gap-10 flex-wrap mt-8">
            {stats.map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h2 className="text-3xl font-extrabold text-orange-500">
                  {item.value}
                </h2>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div> */}

          {/* Button */}
          {/* <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                       rounded-lg font-semibold shadow-lg"
          >
            Learn More →
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
