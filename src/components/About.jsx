import {
  CICD,
  CICDLogos,
  Database,
  DatabaseLogos,
  Frameworks,
  FrameworksLogos,
  Languages,
  LanguagesLogos,
  UI,
  UILogos,
} from "../utils/projectInfo";
import SkillCards from "./SkillCards";

export default function AboutMe() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* About Me & Side Quests */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* About Me */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl w-full lg:w-2/5 shadow-xl border border-blue-100 transition-transform duration-300 hover:scale-[1.02]">
            <h1 className="text-4xl font-extrabold text-zinc-950 mb-5">
              About Me
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed text-justify mb-4">
              I'm Mrityunjay Shrivastava, a builder at heart, currently crafting
              secure software solutions at Hughes Systique Corporation. My
              journey into tech wasn't just about learning to code; it was about
              discovering how ideas come to life through logic, creativity, and
              relentless iteration.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-justify mb-4">
              I’ve always believed that the best engineering isn't just about
              writing clever code, it's about solving meaningful problems,
              communicating clearly, and being deeply curious. Whether I'm
              leading a team, organizing an event, or helping local businesses
              launch their online presence, I bring a strong sense of ownership
              and empathy to everything I do.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              I’m not here just to write code, I’m here to build things that
              matter. If I can learn something new, collaborate with thoughtful
              people, or make someone’s life easier, that’s a good day’s work.
            </p>
          </div>

          {/* Side Quests */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-3xl w-full shadow-xl border border-zinc-100">
            <h1 className="text-4xl font-extrabold text-zinc-950 mb-5">
              My Soulful Quests
            </h1>
            <p className="text-zinc-700 text-lg leading-relaxed mb-8">
              I have always loved working on cool projects, 
              <br />
              Here are some highlights from my journey 🪃✨
            </p>

            {[
              {
                title: "📑 KuKi Solutions (one of my best experiences yet!)",
                href: "https://kuki.co.in/",
                desc: "🛠️  KuKi Solutions is one of the India’s pioneering ESG-AI compliance tech startups. I collaborated closely with all CXO's, ESG consultants and ML engineers to develop an end-to-end automation platform for ESG reporting. As a developer, I led the software design and development of KuKi's, ensuring a seamless, scalable, and impactful user experience.",
              },
              {
                title: "🌐 Indiestori.com",
                href: "https://indiestori.com",
                desc: "🚀 Led the complete digital transformation of Indiestori by developing an end-to-end e-commerce platform. Automated shipping, email marketing, order tracking, and other core operations for smoother business workflows.",
              },
              // {
              //   title: "🛍️ houseofojal.in",
              //   href: "https://houseofojal.in/",
              //   desc: "🎨 Launched an online storefront for traditional clothing to help the business go global. Integrated inventory tracking, secure payments, and analytics for long-term business sustainability.",
              // },
              {
                title: "🧑‍💻 Iniseria",
                href: "#",
                desc: "🛠️ Started a web studio during my 3rd and 4th year of engineering. Delivered 12+ client projects, including 4 international clients before handing the reins over to my juniors to keep the momentum going.",
              },
              {
                title: "🤖 MUJ SIGBED Chapter (Vice Chairperson)",
                href: "https://sigbed.vercel.app",
                desc: "📡 Organized some of Jaipur’s largest IoT events Sigfest and Autobots at Manipal University, attracting 800+ participants. Led and coordinated a team of 60+ members. Designed and developed the official website, which won the ACM National Award for Best Chapter Website 🏆.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm mb-6 hover:bg-sky-50 transition-colors"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 group-hover:text-blue-800 transition-colors font-semibold text-lg"
                >
                  {item.title}
                </a>
                <p className="text-zinc-800 text-base mt-2 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Patent Section */}
        <div className="bg-gradient-to-b from-white to-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-100">
          <h1 className="text-4xl font-extrabold text-zinc-950 mb-5">
            My Patent 
          </h1>
          <p className="text-zinc-700 text-lg leading-relaxed">
            In 2023, I was granted a patent titled: <br />
            <span className="font-semibold text-zinc-900">
              A Blockchain based device and method to enable E-Health system
              for Combating Drug Abuse in India: <br/> Publication Number: 47/2023
            </span>
            <br />A blockchain-powered platform to securely generate, verify,
            and trace electronic prescriptions, addressing India’s prescription
            drug abuse epidemic. Enables authorized healthcare providers to
            issue tamper-proof prescriptions with cryptographic signatures and
            unique identifiers, ensuring end-to-end traceability in the supply
            chain. Tackles systemic challenges like fragmented healthcare and
            weak regulations by creating an immutable audit trail for
            prescriptions, reducing fraud and misuse.
          </p>
        </div>

        {/* SkillCards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkillCards
            ValueLogo={LanguagesLogos}
            Value={Languages}
            Heading={"Languages"}
            Spacing="w-full"
          />
          <SkillCards
            ValueLogo={FrameworksLogos}
            Value={Frameworks}
            Heading={"Frameworks/Libraries"}
            Spacing="w-full"
          />
          <SkillCards
            ValueLogo={CICDLogos}
            Valueof={CICDLogos}
            Value={CICD}
            Heading={"CI/CD"}
            Spacing="w-full"
          />
          <SkillCards
            ValueLogo={UILogos}
            Valueof={UILogos}
            Value={UI}
            Heading={"UI"}
            Spacing="w-full"
          />
        </div>

        <div className="mt-6">
          <SkillCards
            ValueLogo={DatabaseLogos}
            Valueof={DatabaseLogos}
            Value={Database}
            Heading={"Database"}
            Spacing="w-full"
          />
        </div>
      </div>
    </div>
  );
}
