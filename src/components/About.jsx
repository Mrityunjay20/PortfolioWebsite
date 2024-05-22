import { resumeLink } from "../utils/links";
import { SkillSet } from "../utils/projectInfo";

export default function AboutMe(){
    return(
        <div id="about" className="container w-full sm:mt-0 h-max mx-auto ">
            <div className="ml-12">
        <h1 className="w-3/4 hidden md:block text-3xl text-[#cce7f6] font-semibold"><span className="text-[#4cd8f7] font-mono text-base">02.</span> About Me                <span className=" text-[#4cd8f7] select-none tracking-[-0.3em] font-extralight ">      -------------------------------------------------------------</span></h1>
        <h1  className=" w-3/4 block md:hidden text-3xl  text-[#cce7f6] font-semibold"><span className="text-[#4cd8f7] font-mono text-base">02.</span> About Me.</h1>
        <p className="w-3/4 text-gray-300 mt-5 text-lg">I have always loved building Ideas from scratch, currently I'm in my Final year pursuing B.Tech in <span className="text-[#4cd8f7]">Information Technology</span> from Manipal University Jaipur (2020-2024).
        </p>
        <p className="w-3/4 text-gray-300 mt-5 text-lg">I began my journey in web development during my second year of engineering, and since then, I have continuously honed my skills and expanded my knowledge base. My enthusiasm for creating innovative and efficient web solutions has driven me to stay updated with the latest trends and technologies in the field.
        </p>
        <p className="text-[#4cd8f7] mt-8 text-lg">My skillset includes:</p>
        </div>

          
          <div className="lg:w-9/10 mx-auto px-10 flex flex-wrap">
    <div className="lg:w-1/5 sm:w-1/2 w-full lg:py-3 mt-2 lg:mt-0">
        <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
            <li className="text-white">Languages</li>
            {SkillSet[0].Languages.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
    <div className="lg:w-1/5 sm:w-1/2 w-full  lg:py-3 mt-6 lg:mt-0">
        <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
            <li className="text-white">Frameworks/Libraries</li>
            {SkillSet[0]["Frameworks/Libraries"].map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
    <div className="lg:w-1/5 sm:w-1/2 w-full  lg:py-3 mt-6 lg:mt-0">
        <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
            <li className="text-white">Database</li>
            {SkillSet[0].Database.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
    <div className="lg:w-1/5 sm:w-1/2 w-full  lg:py-3 mt-6 lg:mt-0">
        <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
            <li className="text-white">CI/CD</li>
            {SkillSet[0]["CI/CD"].map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
    <div className="lg:w-1/5 sm:w-1/2 w-full lg:pr-5 lg:py-3 mt-6 lg:mt-0">
        <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
            <li className="text-white">UI</li>
            {SkillSet[0]["UI"].map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
</div>

          
      </div>
    )
}