import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(
        "https://my-portfolio-rose-two-59.vercel.app/api/v1/skill/getall/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);

        // success animation
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="overflow-x-hidden relative">

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-black/80 border border-green-500 text-green-400 px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
          ✅ Message Sent Successfully
        </div>
      )}

      {/* TITLE */}
      <div className="relative mb-10 text-center">
        <h1 className="flex gap-4 items-center text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3rem] tracking-[15px] mx-auto w-fit font-extrabold about-h1">
          CONTACT <span className="text-orange-500">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>

      {/* FORM WRAPPER */}
      <div className="flex justify-center">
        <form
          onSubmit={handleMessage}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-orange-400/20 rounded-2xl p-6 md:p-10 shadow-lg space-y-6"
        >

          {/* NAME */}
          <div className="space-y-2">
            <Label className="text-white">Your Name</Label>
            <Input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Enter your name"
              className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
            />
          </div>

          {/* SUBJECT */}
          <div className="space-y-2">
            <Label className="text-white">Subject</Label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
            />
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <Label className="text-white">Message</Label>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              className="bg-black/30 border-orange-400/20 text-white focus:border-orange-500"
            />
          </div>

          {/* 3D BUTTON */}
          <div className="pt-2">
            {!loading ? (
              <button
                type="submit"
                className="w-full py-3 font-bold text-white rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_6px_0_#c2410c] active:translate-y-1 active:shadow-none transition-all duration-150 hover:scale-[1.02]"
              >
                Send Message ✉
              </button>
            ) : (
              <button
                disabled
                className="w-full py-3 font-bold text-white rounded-xl bg-gray-500 cursor-not-allowed"
              >
                Sending...
              </button>
            )}
          </div>
        </form>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;