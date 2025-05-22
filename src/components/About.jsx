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
    <div className="w-full px-4 mx-4">
      <div
        id="about"
        className="container lg:flex w-full sm:mt-0 h-max mx-auto lg:w-11/12"
      >
        <div className="bg-zinc-950 p-8 mx-4 lg:w-2/6 md:w-10/12 sm:w-11/12 sm:mx-4 hover:scale-105 duration-200 rounded-lg">
          <h1 className="w-full text-4xl text-[#cce7f6] font-semibold">
             About Me
          </h1>
          <p className="w-full text-gray-300 mt-5 text-xl text-justify">
            I'm Mrityunjay Shrivastava, a final year B.Tech student in
            Information Technology at Manipal University Jaipur (2020-2024).
            Passionate about web development since my second year of
            engineering, I've honed my skills and stayed updated with the latest
            trends in technology.
          </p>
          <p className="w-full text-gray-300 mt-5 text-xl text-justify">
            With hands-on experience at Hughes Systique
            Corporation and Tangle, I've developed full-stack
            applications using frameworks like SpringBoot, React.js, and the
            MERN stack. My technical toolkit includes Java, TypeScript,
            JavaScript, SQL, and proficiency in databases like MySQL, MongoDB,
            Firebase, and Supabase. Additionally, I'm skilled in Git, GitHub,
            Docker, and various design and productivity tools. Driven by a love
            for creating innovative solutions.
          </p>
        </div>
        <div className="lg:w-4/6 sm:w-full mx-auto my-3">
          <SkillCards
            ValueLogo={LanguagesLogos}
            Value={Languages}
            Heading={"Languages"}
            Spacing={"w-full lg:py-3 lg:mt-0"}
          />
          <SkillCards
            ValueLogo={FrameworksLogos}
            Value={Frameworks}
            Heading={"Frameworks/Libraries"}
            Spacing={"w-full lg:py-3 lg:mt-4"}
          />
        </div>
      </div>
      <div className="container mx-auto sm:w-full">
        <div className="lg:flex xl:flex mx-auto my-3 h-3/4 md:w-full">
          <SkillCards
            ValueLogo={CICDLogos}
            Valueof={CICDLogos}
            Value={CICD}
            Heading={"CI/CD"}
            Spacing={"  w-full lg:py-3 "}
          />
          <SkillCards
            ValueLogo={UILogos}
            Valueof={UILogos}
            Value={UI}
            Heading={"UI"}
            Spacing={" w-full lg:py-3"}
          />
        </div>
        <SkillCards
          ValueLogo={DatabaseLogos}
          Valueof={DatabaseLogos}
          Value={Database}
          Heading={"Database"}
          Spacing={" container mx-auto h-1/2 w-full lg:py-3 lg:px-24"}
        />
      </div>
    </div>
  );
}
