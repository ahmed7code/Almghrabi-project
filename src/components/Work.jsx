import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaGlobe,
  FaShoppingCart,
  FaGamepad,
  FaTasks,
  FaCloudSun,
  FaDiscord,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "Modern E-Commerce Store",
    category: "React",
    description:
      "A responsive storefront featuring an interactive shopping cart, product filtering, and smooth state management.",
    icon: <FaShoppingCart />,
    tech: ["React", "Tailwind CSS", "Context API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Gaming Community Portal",
    category: "Frontend",
    description:
      "A community hub with dark and light theme support, responsive layouts, and clean interactive sections.",
    icon: <FaDiscord />,
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task & Productivity Manager",
    category: "React",
    description:
      "A daily task and workflow organizer with priority tags, task completion states, and local storage persistence.",
    icon: <FaTasks />,
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Next.js SaaS Landing Page",
    category: "Next.js",
    description:
      "A high-speed landing page built for modern software products with clear hierarchy and fluid motion.",
    icon: <SiNextdotjs />,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Live Weather Dashboard",
    category: "Frontend",
    description:
      "A real-time weather forecast interface powered by external API data with clean condition indicators.",
    icon: <FaCloudSun />,
    tech: ["JavaScript", "REST API", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Interactive Gaming Hub",
    category: "React",
    description:
      "A game discovery showcase with instant search, genre filtering, and structured title cards.",
    icon: <FaGamepad />,
    tech: ["React", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Agency Portfolio Template",
    category: "Frontend",
    description:
      "A clean digital agency showcase focused on readable typography, balanced spacing, and mobile responsiveness.",
    icon: <FaGlobe />,
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Developer Snippets Vault",
    category: "React",
    description:
      "A fast reference utility for storing, filtering, and copying reusable frontend code snippets.",
    icon: <FaCode />,
    tech: ["React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "UI Component Library",
    category: "Next.js",
    description:
      "A collection of reusable buttons, modals, and layout blocks styled with utility-first classes.",
    icon: <SiTailwindcss />,
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Personal Portfolio v1",
    category: "Frontend",
    description:
      "My first personal portfolio built with core web technologies and custom responsive styling.",
    icon: <FaReact />,
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "React", "Next.js", "Frontend"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const visibleProjects =
    activeFilter === "All" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

  return (
    <section
      id="work"
      className="py-24 scroll-mt-24 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-[#10b981]">Projects</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          A selection of web applications and interfaces I have built with
          modern frontend tools.
        </p>
      </motion.div>

      {/* Filter Buttons with Shared Layout Pill */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveFilter(category);
                setShowAll(false);
              }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-black font-semibold"
                  : "bg-[#161616] text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition-colors hover:border-zinc-600"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#10b981]/10 text-2xl text-[#10b981]">
                {project.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 border-t border-zinc-800 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#10b981]"
                >
                  Live demo <FaExternalLinkAlt aria-hidden="true" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-[#10b981]"
                >
                  GitHub <FaGithub aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {activeFilter === "All" && filteredProjects.length > 6 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-[#10b981] hover:text-[#10b981]"
          >
            {showAll ? "Show less" : "Show all projects"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;