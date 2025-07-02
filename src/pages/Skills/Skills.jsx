// Updated SkillsSection component for Priya Rathor with extended personalized skill set
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cpu, Cloud, MonitorSmartphone } from "lucide-react";
import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
} from "react-icons/fa";
import {
  SiFastapi,
  SiMongodb,
  SiOpenai,
  SiLangchain,
  SiTailwindcss,
  SiVercel,
  SiPostgresql,
  SiHuggingface,
  SiHeroku,
  SiJupyter,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import { TbBrain } from "react-icons/tb";
import { MdOutlineSchema } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: GiArtificialHive,
      title: "AI, LLM & GenAI Tools",
      color: "text-yellow-400",
      skills: [
        { name: "LangChain", icon: <SiLangchain className="w-4 h-4 text-white" /> },
        { name: "LangGraph", icon: <BsStars className="w-4 h-4 text-purple-400" /> },
        { name: "OpenAI", icon: <SiOpenai className="w-4 h-4 text-green-300" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="w-4 h-4 text-yellow-300" /> },
        { name: "RAG Systems", icon: <GiArtificialHive className="w-4 h-4 text-amber-400" /> },
        { name: "CrewAI", icon: <BiNetworkChart className="w-4 h-4 text-blue-300" /> },
        { name: "N8N", icon: <BiNetworkChart className="w-4 h-4 text-orange-300" /> },
        { name: "LLMs", icon: <TbBrain className="w-4 h-4 text-pink-400" /> },
        { name: "GenAI", icon: <GiArtificialHive className="w-4 h-4 text-lime-300" /> },
        { name: "DataStax", icon: <MdOutlineSchema className="w-4 h-4 text-teal-300" /> },
        { name: "NLP", icon: <TbBrain className="w-4 h-4 text-indigo-400" /> },
        { name: "ML", icon: <TbBrain className="w-4 h-4 text-cyan-300" /> },
      ],
    },
    {
      icon: Code2,
      title: "Web Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4 text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4 text-blue-500" /> },
        { name: "React", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Responsive UI", icon: <MonitorSmartphone className="w-4 h-4 text-white" /> },
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-pink-500" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      color: "text-green-400",
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-teal-300" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "SQL", icon: <MdOutlineSchema className="w-4 h-4 text-blue-300" /> },
        { name: "Jupyter", icon: <SiJupyter className="w-4 h-4 text-orange-400" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Deployment & Tools",
      color: "text-pink-400",
      skills: [
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-white" /> },
        { name: "AWS EC2", icon: <FaAws className="w-4 h-4 text-yellow-300" /> },
        { name: "S3 / RDS", icon: <FaAws className="w-4 h-4 text-blue-300" /> },
        { name: "Heroku", icon: <SiHeroku className="w-4 h-4 text-purple-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-14 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
