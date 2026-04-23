import { useEffect, useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBannerPreview, setProjectBannerPreview] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`https://my-portfolio-rose-two-59.vercel.app/api/v1/project/get/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.project.title);
          setDescription(res.data.project.description);
          setStack(res.data.project.stack);
          setDeployed(res.data.project.deployed);
          setTechnologies(res.data.project.technologies);
          setGitRepoLink(res.data.project.gitRepoLink);
          setProjectLink(res.data.project.projectLink);
          setProjectBannerPreview(
            res.data.project.projectBanner &&
              res.data.project.projectBanner.url
          );
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getProject();
  }, [id]);

  const descriptionList = description.split(". ");
  const technologiesList = technologies.split(", ");

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <div className="min-h-screen  text-white px-4 py-10 flex justify-center">

      <div className="w-full max-w-4xl">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
            PROJECT <span className="text-orange-500">DETAIL</span>
          </h1>

          <Button
            onClick={handleReturnToPortfolio}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Back
          </Button>
        </div>

        {/* CARD */}
        <div className="bg-white/5 border border-orange-500/20 rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl">

          {/* IMAGE */}
          <div className="w-full h-[250px] md:h-[350px] overflow-hidden">
            <img
              src={
                projectBannerPreview
                  ? projectBannerPreview
                  : "/avatarHolder.jpg"
              }
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 space-y-8">

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400">
              {title}
            </h2>

            {/* DESCRIPTION */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Description
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                {descriptionList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* TECHNOLOGIES */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologiesList.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* STACK + STATUS */}
            <div className="grid md:grid-cols-2 gap-4">

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-gray-400 text-sm">Stack</h3>
                <p className="text-white font-semibold">{stack}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-gray-400 text-sm">Deployed</h3>
                <p className="text-white font-semibold">{deployed}</p>
              </div>

            </div>

            {/* LINKS */}
            <div className="grid md:grid-cols-2 gap-4">

              <a
                href={gitRepoLink}
                target="_blank"
                className="p-4 rounded-xl border border-orange-500/30 hover:border-orange-500 text-orange-400 transition break-all"
              >
                GitHub Repository →
              </a>

              <a
                href={projectLink}
                target="_blank"
                className="p-4 rounded-xl border border-orange-500/30 hover:border-orange-500 text-orange-400 transition break-all"
              >
                Live Project →
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;