import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    getApps();
  }, []);

  const getApps = async () => {
    const { data } = await axios.get(
      "https://my-portfolio-rose-two-59.vercel.app/api/v1/softwareapplication/getall",
      { withCredentials: true }
    );
    setApps(data.softwareApplications);
  };

  // 💾 SAVE ORDER TO BACKEND
  const saveOrder = async (newOrder) => {
    await axios.post(
      "https://my-portfolio-rose-two-59.vercel.app/api/v1/softwareapplication/reorder",
      { apps: newOrder },
      { withCredentials: true }
    );
  };

  // 🔥 DRAG HANDLER
  const handleDragEnd = (fromIndex, toIndex) => {
    const updated = [...apps];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);

    setApps(updated);
    saveOrder(updated.map((a) => a._id));
  };

  return (
    <div className="w-full flex flex-col gap-8 py-10">

      {/* TITLE */}
      <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] font-extrabold mx-auto text-orange-500">
        MY APPS
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">

        {apps.map((app, index) => (
          <motion.div
            key={app._id}
            layout
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}

            onDragEnd={() => handleDragEnd(index, index)}

            whileHover={{
              scale: 1.08,
              rotateY: 10,
              rotateX: 10,
            }}

            style={{ perspective: 1000 }}
          >

            <Card
              className="relative p-5 flex flex-col items-center gap-3
              bg-white/5 border border-white/10 backdrop-blur-lg
              hover:border-orange-400 transition"
              onClick={() => setSelectedApp(app)}
            >

              {/* ICON */}
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <img
                  src={app.svg?.url}
                  className="h-14 sm:h-20"
                />
              </motion.div>

              <p className="text-white text-sm">{app.name}</p>

            </Card>

          </motion.div>
        ))}

      </div>

      {/* 🔵 MODAL */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#0b0f19] p-6 rounded-xl border border-orange-400 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedApp.svg?.url}
                className="h-20 mx-auto mb-3"
              />

              <h2 className="text-white text-lg">
                {selectedApp.name}
              </h2>

              <button
                className="mt-4 px-4 py-1.5 bg-orange-500 text-white rounded"
                onClick={() => setSelectedApp(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MyApps;