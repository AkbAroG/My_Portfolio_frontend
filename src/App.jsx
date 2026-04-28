import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/miniComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ModeToggle } from "./components/mode-toggle";
import video from "../assets/video2.mp4";
import { useRef, useEffect } from "react";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme "><video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 blur-lg opacity-100"
        >
          <source src={video} type="video/mp4" />
        </video>

      <Router>
        {/* <ModeToggle /> */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </ThemeProvider>
  );
}

export default App;





// Simple Mode Toggle M

// Page Mocks


