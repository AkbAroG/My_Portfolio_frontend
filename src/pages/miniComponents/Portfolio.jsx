
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const filters = [
  { name: "All", icon: "🌐" },
  { name: "MERN", icon: "⚛️" },
  { name: "Data Science", icon: "🤖" },
];

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  // const [skills, setSkills] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://my-portfolio-rose-two-59.vercel.app/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };

    // const getMySkills = async () => {
    //   const { data } = await axios.get(
    //     "http://localhost:4000/api/v1/skill/getall",
    //     { withCredentials: true }
    //   );
    //   // setSkills(data.skills);
    // };

    getMyProjects();
    // getMySkills();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category?.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="w-full px-6 md:px-12 py-20  text-white">

      <div className="text-center mb-16">
        <p className="uppercase text-xs tracking-[6px] text-orange-400 mb-2">
         ✦ My Work
      </p>
         <h1 className="text-4xl md:text-5xl font-extrabold">
          My <span className="text-orange-500">Projects</span>
        </h1>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {filters.map((item) => {
          const isActive = filter === item.name;

          return (
            <motion.button
              key={item.name}
              onClick={() => setFilter(item.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border transition
                ${
                  isActive
                    ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.5)] border-orange-400"
                    : "border-orange-400 text-orange-400"
                }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </motion.button>
          );
        })}
      </div>

      {/* PROJECT CARDS (NEW DESIGN) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(viewAll ? filteredProjects : filteredProjects.slice(0, 9)).map(
          (element) => (
            <Link to={`/project/${element._id}`} key={element._id}>

              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,140,0,0.2)]">

                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={element.projectBanner && element.projectBanner.url}
                    alt={element.title}
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* CONTENT */}
                <div className="p-4 relative">

                  {/* TAG */}
                  <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30">
                    {element.category || "Project"}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-orange-400 transition">
                    {element.title}
                  </h3>

                  {/* BUTTONS PREVIEW */}
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 text-center text-xs py-2 rounded-md bg-orange-500 text-white">
                      Live Demo
                    </div>
                    <div className="flex-1 text-center text-xs py-2 rounded-md border border-orange-400 text-orange-400">
                      GitHub
                    </div>
                  </div>

                </div>
              </div>

            </Link>
          )
        )}
      </div>

      {/* SHOW MORE */}
      {filteredProjects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}

      {/* SKILLS */}
      {/* <div className="relative mb-12 mt-16 text-center">
        <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] font-extrabold">
          MY <span className="text-tubeLight-effect font-extrabold">SKILLS</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((element) => (
          <div key={element._id} className="flex flex-col items-center p-4 border rounded-lg">
            <img
              src={element.svg && element.svg.url}
              alt={element.title}
              className="w-16 h-16 mb-2"
            />
            <h3 className="text-lg font-semibold">{element.title}</h3>
            <p className="text-sm text-gray-400">{element.proficiency}</p>
          </div>
        ))}
      </div> */}

    </div>
  );
};

export default Portfolio;