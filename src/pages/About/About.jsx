// import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png"; // Optional: Replace or remove if not needed

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Generative AI Engineer · Machine Learning
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src="https://i.postimg.cc/vmtpQnBt/Screenshot-2025-07-04-134935.png"
                  className="rounded-[15px] shadow block"
                  alt="Priya Rathor"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Priya Rathor</span>, a passionate developer with a focus on building intelligent systems using AI, Machine Learning, and modern web technologies.
              </p>
              <p className="text-white">
                I specialize in developing scalable AI solutions, LLM-based tools, and interactive web applications using technologies like LangChain, OpenAI, FastAPI, and AWS. I love turning complex ideas into real-world tools that make a difference.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in continuous learning, building with purpose, and sharing knowledge through open-source contributions. My work combines backend logic, conversational AI, and elegant frontend design to deliver seamless digital experiences.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Priya Rathor — Generative AI Engineer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Tech Stack Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">AI | FastAPI | LangChain | React</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
