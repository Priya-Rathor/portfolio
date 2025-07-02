import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Web & UI
  "html5",
  "css3",
  "react",
  "tailwindcss",
  "figma",

  // Backend & APIs
  "python",
  "fastapi",
  "nodedotjs",
  "express",

  // Databases
  "mongodb",
  "postgresql",
  "firebase",

  // AI / ML / NLP / LLM / DL
  "openai",
  "huggingface",
  "jupyter",
  "pytorch",
  "tensorflow",

  // DevOps & Deployment
  "vercel",
  "heroku",
  "amazonaws",
  "docker",

  // Dev Tools
  "git",
  "github",
  "gitlab",
  "visualstudiocode",

  // Automation / Workflow
  "n8n",
  "langchain",
  "typesense",

  // Bonus: Programming & General Tools
  "javascript",
  "python",
  "c",
  "c++"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
