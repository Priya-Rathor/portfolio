import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
  title: "🧠 Business Doctor ",
  description:
     "A powerful, production-ready chatbot built using FastAPI, LangGraph, and LangChain. It enables intelligent business planning through dynamic multi-turn conversations, real-time streaming with Server-Sent Events (SSE), and memory summarization using LLMs. The bot guides users through tailored workflows such as executive summaries, market analysis, financial projections, and marketing strategies. It integrates external tools like Tavily for web search and features a clean modular folder structure for easy scalability and maintainability. Designed to assist entrepreneurs, startups, and business users with structured, AI-driven guidance.",
  src: "rock.jpg",
  link: "https://i.postimg.cc/J7T03c99/Screenshot-2025-07-02-134909.png",
  color: "#5196fd",
  githubLink: "https://github.com/Priya-Rathor/AIBusinessDoctors",
  liveLink: "https://businessdoctorclientfrontend.vercel.app/",
},

{
  "title": "Reddit_persona_analyzer",
  "description": "A Reddit profile analysis tool built with FastAPI, LangGraph, and LangChain. It retrieves a user's Reddit posts and comments, processes them with LLMs, and generates insightful persona summaries. The app identifies recurring themes, interests, writing style, and sentiment, providing an AI-driven overview of a user's online personality. Designed for research, marketing insights, and content personalization, it features a modular, scalable architecture with clean API integration.",
  "src": "rock.jpg",
  "link": "https://i.postimg.cc/N0NMDjsh/Screenshot-17.png",
  "color": "#5196fd",
  "githubLink": "https://github.com/Priya-Rathor/reddit_persona_analyzer",
  "liveLink": "https://priya-rathor.github.io/reddit_persona_analyzer/"
}
,

{
  "title": "ChatWithDoc",
  "description": "An AI-powered document interaction tool built with FastAPI, LangChain, and LangGraph. ChatWithDoc allows users to upload documents (PDF, DOCX, TXT) and engage in conversational Q&A, extracting key information with high accuracy. It uses LLMs for semantic search, context-aware responses, and summarization, enabling efficient knowledge retrieval. Designed with a modular architecture for scalability, it supports real-time streaming, clean API integration, and a responsive UI for seamless user experience.",
  "src": "rock.jpg",
  "link": "https://i.postimg.cc/rshsnyCR/Screenshot-18.png",
  "color": "#5196fd",
  "githubLink": "https://github.com/Priya-Rathor/chatwithDoc",
  "liveLink": "https://priya-rathor.github.io/chatwithDoc/"
}

,

{
  "title": "NeoCareerAI",
  "description": "A comprehensive AI career assistant built with FastAPI, LangChain, and LangGraph. NeoCareerAI orchestrates workflows like resume creation, job search, interview topic generation, mock interviews, query answering, and tutorial guidance. It combines retrieval-augmented generation, context-aware dialogue, and real-time streaming to help users prepare, apply, and interview with data-driven confidence. Modular, scalable, and extensible for personalized career journeys.",
  "src": "rock.jpg",
  "link": "https://i.postimg.cc/3rpHtx1s/Screenshot-19.png",
  "color": "#5196fd",
  "githubLink": "https://github.com/Priya-Rathor/NeoCareerAI",
  "liveLink": "https://priya-rathor.github.io/NeoCareerAI/"
}

,
{
  title: "📚 Book Recommender System – NLP + Vector Search Powered",
  description:
    "Built a smart book recommendation system that uses OpenAI embeddings to vectorize book summaries and user queries. Integrated Pinecone for fast semantic search across a large corpus of book data. Designed an intuitive search interface and used Streamlit to deploy the front-end. Enabled contextual recommendations using user input and content-based filtering, making book discovery personalized and intelligent.",
  src: "rock.jpg", // You can update this image if needed
  link: "https://i.postimg.cc/QdgLx3xs/Screenshot-2025-07-28-112117.png", // You can use a screenshot of your app
  color: "#5196fd",
  githubLink: "https://github.com/Priya-Rathor/BookRecommenderSystem",
  liveLink: "https://bookrecommendersystem-l6s0.onrender.com/",
}
,
  
  {
  title: "🎯 Onscreen Marketing System – AI-Powered Learning & Evaluation",
  description:
    "Integrated OpenAI API to dynamically generate and evaluate both subjective and objective questions across diverse subjects. Built advanced conversational workflows using LangGraph to control question logic and session flow. Employed Tavily for intelligent retrieval and context enrichment to simulate real-world assessments. Designed real-time scoring and AI-driven feedback to personalize evaluation. Ensured seamless backend-AI integration for scalable learning, and deployed the full solution on AWS EC2 for high availability.",
  src: "rock.jpg",
  link: "https://i.postimg.cc/xT60Vf0h/Screenshot-2025-07-02-140532.png",
  color: "#5196fd",
  githubLink: "https://github.com/Priya-Rathor/Onscreen-Marketing-System/tree/main", // (example)
  liveLink: "https://is10live.com/", // Add if hosted
}
,

  {
  title: "📚 AI_INNOV_JAM - LLM-Powered Student Evaluation",
  description:
    "A powerful FastAPI-based backend that evaluates student answers using GPT-4, Gemini, and Groq Mixtral. It auto-scores based on prompt-based logic, returns one-line feedback, validates API keys, and can extract Q&A from raw text. Designed for educational use cases, the system supports dynamic scoring logic, provider switching, and custom temperature control. It’s built with a modular folder structure, ready for database integration and frontend expansion.",
  src: "rock.jpg",
  link: "https://i.postimg.cc/fWXts0FF/Screenshot-2025-01-17-103016.png",
  color: "#5196fd",
  githubLink: "https://github.com/Priya-Rathor/AI_INNOV_JAM", // (example)
  liveLink: "ttps://assessmentor-frontend.vercel.app/", // Add if hosted
}
,

  {
  title: "🛒 MegaGrocery – SmartList-Powered E-commerce Platform",
  description:
    "MegaGrocery is a full-featured e-commerce platform built with React and Node.js, featuring a unique SmartList system. Users can create reusable daily, weekly, and monthly shopping lists, streamlining repeat purchases and saving time. The site includes secure authentication, real-time cart updates, product recommendations, infinite scroll, customer reviews, image storage via Cloudinary or AWS S3, and seamless checkout with discount support. SmartList boosts personalization and convenience, making the platform smarter than traditional online stores.",
  src: "rock.jpg", // Replace with screenshot link or actual image path
  link: "https://i.postimg.cc/rwWjBmTN/Screenshot-2025-07-02-141520.png", // Replace with actual screenshot if available
  color: "#70c05b",
  githubLink: "https://github.com/Priya-Rathor/MegaGrocery-Ecommerce-website?tab=readme-ov-file", // Change if repo URL is different
  liveLink: "https://front-end-mega-grocery.vercel.app/", // Add deployed link if hosted
}
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
