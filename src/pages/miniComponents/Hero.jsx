
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  
} from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import axios from "axios";
import { motion } from "framer-motion";
import pic from "../../../public/picofme (3).png";

const Hero = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://my-portfolio-rose-two-59.vercel.app/api/v1/user/portfolio/me",
          { withCredentials: true },
        );
        setUser(data?.user || {});
      } catch (error) {
        console.log(error);
        setUser({});
      } finally {
        setLoading(false);
      }
    };

    getMyProfile();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-br  text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      {/* <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] top-10 right-10 rounded-full"></div> */}

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex-1"
      >
        <p className="text-orange-400 tracking-widest uppercase text-sm mb-3">
          Aspiring Data Scientist & MERN Stack Developer
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {user?.fullName || "I'M Akbar Ali"}
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Data Scientist",
              "Machine Learning Engineer",
              "Python Developer",
              "Building Predictive Models",
              "Data Visualization Expert",
              "Data Analyst",
              "Video Editor",
              "Digital Marketer",
            ]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h2>
        {/* SOCIAL ICONS (ALWAYS SHOW) */}
        <div className="mt-6 flex gap-5 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full w-fit">
          <a
            href={
              user?.instagramURL ||
              "https://www.instagram.com/akbaro_20?igsh=MTZxNXluOThnaWptcw=="
            }
            target="_blank"
            // rel="noreferrer"
            // onClick={(e) => !user?.instagramURL && e.preventDefault()}
          >
            <Instagram className="text-pink-400 hover:scale-110 transition" />
          </a>

          <a
            href={
              user?.facebookURL || "https://www.facebook.com/share/18swHUPapq"
            }
            target="_blank"
          >
            <Facebook className="text-blue-500 hover:scale-110 transition" />
          </a>

          <a
            // href={user?.linkedInURL || "https://www.linkedin.com/in/akbaraliduhavi28/"}
            href="https://www.linkedin.com/in/akbaraliduhavi28/"
            target="_blank"
          >
            <Linkedin className="text-sky-400 hover:scale-110 transition" />
          </a>

          <a
            href={user?.twitterURL || "https://x.com/akbaro_akb33714"}
            target="_blank"
            // rel="noreferrer"
            // onClick={(e) => !user?.twitterURL && e.preventDefault()}
          >
            <Twitter className="text-blue-400 hover:scale-110 transition" />
          </a>

          <a href="https://github.com/AkbAroG">
            <Github className="hover:scale-110 transition" />
          </a>
        </div>

        {/* BUTTONS */}
       
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center items-center relative z-10"
      >
        <div className="absolute w-[350px] h-[350px] bg-orange-500/30 blur-[100px] rounded-full"></div>

        <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] overflow-hidden rounded-2xl border border-orange-400/40 shadow-2xl">
          <img
            // src={user?.avatar?.url || {pic}}
            src={pic}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-10 right-10 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          Open to Work
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
