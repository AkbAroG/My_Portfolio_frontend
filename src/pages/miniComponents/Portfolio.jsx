
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const filters = [
//   { name: "All", icon: "🌐" },
//   { name: "MERN", icon: "⚛️" },
//   { name: "Data Science", icon: "🤖" },
// ];

// const Portfolio = () => {
//   const [viewAll, setViewAll] = useState(false);
//   const [projects, setProjects] = useState([]);
//   // const [skills, setSkills] = useState([]);
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     const getMyProjects = async () => {
//       const { data } = await axios.get(
//         "https://my-portfolio-rose-two-59.vercel.app/api/v1/project/getall",
//         { withCredentials: true }
//       );
//       setProjects(data.projects);
//     };

//     // const getMySkills = async () => {
//     //   const { data } = await axios.get(
//     //     "http://localhost:4000/api/v1/skill/getall",
//     //     { withCredentials: true }
//     //   );
//     //   // setSkills(data.skills);
//     // };

//     getMyProjects();
//     // getMySkills();
//   }, []);

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((p) =>
//           p.category?.toLowerCase().includes(filter.toLowerCase())
//         );

//   return (
//     <div className="w-full px-6 md:px-12 py-20  text-white">

//       <div className="text-center mb-16">
//         <p className="uppercase text-xs tracking-[6px] text-orange-400 mb-2">
//          ✦ My Work
//       </p>
//          <h1 className="text-4xl md:text-5xl font-extrabold">
//           My <span className="text-orange-500">Projects</span>
//         </h1>
//       </div>

//       {/* FILTER */}
//       <div className="flex justify-center gap-3 mb-10 flex-wrap">
//         {filters.map((item) => {
//           const isActive = filter === item.name;

//           return (
//             <motion.button
//               key={item.name}
//               onClick={() => setFilter(item.name)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm border transition
//                 ${
//                   isActive
//                     ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.5)] border-orange-400"
//                     : "border-orange-400 text-orange-400"
//                 }`}
//             >
//               <span>{item.icon}</span>
//               {item.name}
//             </motion.button>
//           );
//         })}
//       </div>

//       {/* PROJECT CARDS (NEW DESIGN) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {(viewAll ? filteredProjects : filteredProjects.slice(0, 9)).map(
//           (element) => (
//             <Link to={`/project/${element._id}`} key={element._id}>

//               <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,140,0,0.2)]">

//                 {/* IMAGE */}
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={element.projectBanner && element.projectBanner.url}
//                     alt={element.title}
//                     className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

//                 {/* CONTENT */}
//                 <div className="p-4 relative">

//                   {/* TAG */}
//                   <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30">
//                     {element.category || "Project"}
//                   </span>

//                   {/* TITLE */}
//                   <h3 className="mt-3 text-lg font-semibold group-hover:text-orange-400 transition">
//                     {element.title}
//                   </h3>

//                   {/* BUTTONS PREVIEW */}
//                   <div className="mt-4 flex gap-2">
//                     <div className="flex-1 text-center text-xs py-2 rounded-md bg-orange-500 text-white">
//                       Live Demo
//                     </div>
//                     <div className="flex-1 text-center text-xs py-2 rounded-md border border-orange-400 text-orange-400">
//                       GitHub
//                     </div>
//                   </div>

//                 </div>
//               </div>

//             </Link>
//           )
//         )}
//       </div>

//       {/* SHOW MORE */}
//       {filteredProjects.length > 9 && (
//         <div className="w-full text-center my-9">
//           <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
//             {viewAll ? "Show Less" : "Show More"}
//           </Button>
//         </div>
//       )}

//       {/* SKILLS */}
//       {/* <div className="relative mb-12 mt-16 text-center">
//         <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] font-extrabold">
//           MY <span className="text-tubeLight-effect font-extrabold">SKILLS</span>
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {skills.map((element) => (
//           <div key={element._id} className="flex flex-col items-center p-4 border rounded-lg">
//             <img
//               src={element.svg && element.svg.url}
//               alt={element.title}
//               className="w-16 h-16 mb-2"
//             />
//             <h3 className="text-lg font-semibold">{element.title}</h3>
//             <p className="text-sm text-gray-400">{element.proficiency}</p>
//           </div>
//         ))}
//       </div> */}

//     </div>
//   );
// };

// export default Portfolio;


// import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Github } from "lucide-react";

const filters = [
  { name: "All", icon: "🌐" },
  { name: "MERN", icon: "⚛️" },
  { name: "Data Science", icon: "🤖" },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://my-portfolio-rose-two-59.vercel.app/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category?.toLowerCase().includes(filter.toLowerCase())
        );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const getCardStyle = (index) => {
    const len = filteredProjects.length;
    if (len === 0) return { opacity: 0 };

    const prevIndex = (activeIndex - 1 + len) % len;
    const nextIndex = (activeIndex + 1) % len;

    if (index === activeIndex)
      return {
        left: "50%",
        x: "-50%",
        scale: 1,
        opacity: 1,
        zIndex: 30,
        y: 0,
      };

    if (index === prevIndex)
      return {
        left: "28%",
        x: "-50%",
        scale: 0.85,
        opacity: 0.45,
        zIndex: 20,
        y: 10,
      };

    if (index === nextIndex)
      return {
        left: "72%",
        x: "-50%",
        scale: 0.85,
        opacity: 0.45,
        zIndex: 20,
        y: 10,
      };

    return {
      left: "50%",
      x: "-50%",
      scale: 0.6,
      opacity: 0,
      zIndex: 10,
      y: 0,
    };
  };

  return (
    <section className="relative min-h-screen overflow-hidden  text-white px-6 md:px-12 py-20">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
      <div className="absolute top-24 left-1/4 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />

      <div className="relative z-10 text-center mb-14">
        <p className="uppercase text-xs tracking-[6px] text-orange-400 mb-3">✦ My Work</p>
        <h1 className="text-4xl md:text-6xl font-extrabold">Selected <span className="text-orange-500">Projects</span></h1>
      </div>

      <div className="flex justify-center gap-3 mb-12 flex-wrap relative z-10">
        {filters.map((item) => (
          <button key={item.name} onClick={() => {setFilter(item.name);setActiveIndex(0);}} className={`px-4 py-2 rounded-full border text-sm ${filter===item.name?'bg-orange-500 border-orange-500':'border-orange-400 text-orange-400'}`}>
            {item.icon} {item.name}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="relative h-[420px] w-full max-w-[1100px] mx-auto rounded-[30px] border border-white/10 bg-zinc-950/70 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-orange-500 uppercase tracking-[6px] mb-3">No projects found</p>
            <h2 className="text-3xl font-bold text-white">Try another filter or come back later.</h2>
          </div>
        </div>
      ) : (
        <>
          <div className="relative h-[520px] w-full max-w-[1500px] mx-auto">
            {filteredProjects.map((element,index)=>(
              <motion.div
                key={element._id}
                animate={getCardStyle(index)}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 w-[300px] sm:w-[360px] md:w-[520px] lg:w-[620px] h-full rounded-[30px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl cursor-pointer"
                onClick={()=>setActiveIndex(index)}
              >
                <img src={element.projectBanner?.url} alt={element.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                {index===activeIndex && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex justify-between items-end gap-4">
                    <div>
                      <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-400/30">{element.category}</span>
                      <h2 className="text-3xl md:text-5xl font-bold mt-3">{element.title}</h2>
                      <p className="text-gray-300 mt-2 line-clamp-2 max-w-xl">{element.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <a href={element.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"><Github size={20} /></a>
                      <Link to={`/project/${element._id}`} className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center"><ArrowRight size={22} /></Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex justify-center items-center gap-6">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition hover:border-orange-400 hover:text-orange-400"><ChevronLeft /></button>
              <div className="flex gap-2">
                {filteredProjects.map((_,idx)=>(
                  <button key={idx} onClick={()=>setActiveIndex(idx)} className={activeIndex===idx?'w-8 h-1.5 bg-orange-500 rounded-full':'w-2 h-2 bg-zinc-600 rounded-full'} />
                ))}
              </div>
              <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition hover:border-orange-400 hover:text-orange-400"><ChevronRight /></button>
            </div>
            {filteredProjects.length > 1 && (
              <p className="text-sm text-gray-300">
                Next: <span className="text-white font-medium">{filteredProjects[(activeIndex + 1) % filteredProjects.length]?.title}</span>
              </p>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
