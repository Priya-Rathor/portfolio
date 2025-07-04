import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const blogs = [
  {
    title: "🧠 Mastering Real-Time AI: A Developer’s Guide to Building Streaming LLMs with FastAPI and Transformers",
    description:
      "This guide explores how to build real-time AI applications using FastAPI, Hugging Face Transformers, and Server-Sent Events (SSE). It highlights the importance of streaming LLMs to enhance user experience through low-latency, chunk-based responses—like ChatGPT.",

    tag: "#LangGraph",
    link: "https://i.postimg.cc/7hrzSRqk/Screenshot-2025-07-02-163448.png",
    color: "#f97316",
    githubLink: "https://github.com/Priya-Rathor/LangGraph-Chatbot",
    liveLink: "https://medium.com/@priyarathor/langgraph-production-chatbot-guide",
  },
  {
    title: "🧠 GPT-4, Gemini, Mixtral: Answer Evaluation Battle",
    description:
      "GPT-4, Gemini, and Mixtral are revolutionizing student answer evaluation. GPT-4 provides detailed, human-like feedback, Gemini delivers logical structure with clarity, and Mixtral offers ultra-fast performance for real-time scoring. These models compare student answers with suggested responses, generating scores and concise feedback instantly. In education and AI tools, the right choice balances speed, accuracy, and reliability — making this evaluation battle vital for next-gen learning platforms.",
    tag: "#LLMs",
    link: "https://www.geeky-gadgets.com/wp-content/uploads/2023/12/Gemini-Pro-vs-GPT-4.jpg",
    color: "#a855f7",
    githubLink: "https://github.com/Priya-Rathor/AI_INNOV_JAM",
    liveLink: "https://dev.to/priyarathor/evaluating-with-llms",
  },
  {
    title: "🧠 Fine-Tuning vs Prompt Engineering: When and Why It Matters",
    description:
      "Fine-tuning customizes a model by retraining it on domain-specific data, ideal for specialized tasks but resource-heavy. Prompt engineering, on the other hand, guides pre-trained models using clever input phrasing—faster and cost-effective. Choose fine-tuning for long-term, consistent behavior in specific applications. Opt for prompt engineering when flexibility, rapid iteration, and lower costs are priorities. Both approaches are powerful—your use case determines the right one.",
    tag: "#AWS",
    link: "https://i.postimg.cc/8PSpVSyG/Screenshot-2025-07-02-165309.png",
    color: "#10b981",
    githubLink: "https://github.com/Priya-Rathor/AWS-LLM-Deployment",
    liveLink: "https://hashnode.com/@priyarathor/aws-llm-deployment",
  },
];

export default function Blogs() {
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
          {blogs.map((blog, i) => {
            const targetScale = 1 - (blogs.length - i) * 0.05;
            return (
              <Card
                key={`b_${i}`}
                i={i}
                url={blog.link}
                title={blog.title}
                color={blog.color}
                description={blog.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={blog.githubLink}
                liveLink={blog.liveLink}
                tag={blog.tag}
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
  tag,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-[120vh] flex items-center justify-center sticky top-0 project-container pt-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[15%] h-auto w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] origin-top border border-gray-700 hover:shadow-2xl hover:border-white/10 transition-all duration-500 rounded-2xl overflow-hidden project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[360px] md:h-[520px] lg:h-[580px] relative overflow-hidden">
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
              style={{
                background: `linear-gradient(135deg, transparent, ${color}33)`,
                mixBlendMode: "overlay",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              Blog {i + 1}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-1 rounded-full text-xs font-medium">
              {tag}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-8 md:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <div className="h-[1px] w-16 bg-gray-600" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-6 pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4" />
              <div className="flex items-center gap-6">
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
                  <span className="text-sm md:text-base font-medium" style={{ color }}>
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
                  <span className="text-sm md:text-base font-medium" style={{ color }}>
                    Read More
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
  tag: PropTypes.string.isRequired,
};
