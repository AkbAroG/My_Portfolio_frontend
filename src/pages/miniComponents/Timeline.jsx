import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axios.get(
        "https://my-portfolio-rose-two-59.vercel.app/api/v1/timeline/getall",
        { withCredentials: true }
      );
      setTimeline(data.timelines);
    };
    getMyTimeline();
  }, []);

  return (
    <section className="w-full px-6 md:px-12 py-20  text-white">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-extrabold mb-16"
      >
        My <span className="text-orange-500">Timeline</span>
      </motion.h1>

      <div className="relative">

        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-white/10"></div>

        {timeline &&
          timeline.map((element, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={element._id}

                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}

                className={`mb-12 flex ${
                  isLeft ? "justify-start" : "justify-end"
                } w-full`}
              >

                {/* Card */}
                <div className="w-full md:w-[45%] bg-white/5 border border-white/10 
                backdrop-blur-lg rounded-xl p-5 shadow-lg hover:border-orange-400 transition">

                  <h3 className="text-lg font-semibold mb-1">
                    {element.title}
                  </h3>

                  <time className="block text-sm text-orange-400 mb-2">
                    {element.timeline.from} -{" "}
                    {element.timeline.to ? element.timeline.to : "Present"}
                  </time>

                  <p className="text-gray-400 text-sm">
                    {element.description}
                  </p>
                </div>

                {/* Dot */}
                <span className="absolute left-1/2 transform -translate-x-1/2 
                w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0b0f19] shadow-md"></span>

              </motion.div>
            );
          })}
      </div>
    </section>
  );
};

export default Timeline;