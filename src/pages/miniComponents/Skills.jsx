import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axios.get(
          "https://my-portfolio-rose-two-59.vercel.app/api/v1/skill/getall",
          { withCredentials: true }
        );
        setSkills(data.skills);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching skills:", err);
        setError("Failed to load skills");
        setLoading(false);
      }
    };
    getMySkills();
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Loading skills...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section className="w-full px-6 md:px-12 py-20  text-white">

      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="uppercase text-xs tracking-[6px] text-orange-400 mb-2">
          What I Know
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-orange-500">Skills</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm">
          Technologies and tools I use to build projects
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.map((skill, i) => {
          const pct = skill.percentage || Math.floor(Math.random() * 30) + 70;

          return (
            <motion.div
              key={skill._id}
              
              /* Card animation */
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}

              /* Hover interactive */
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}

              className="bg-white/5 border border-white/10 rounded-xl p-5 
              backdrop-blur-lg hover:border-orange-400 transition duration-300"
            >

              {/* Top */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={skill.svg?.url}
                  alt={skill.title}
                  className="h-8 w-8 object-contain"
                />

                <h2 className="font-semibold">{skill.title}</h2>

                <span className="ml-auto text-sm text-orange-400 font-bold">
                  {pct}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                />
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;