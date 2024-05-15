import { resumeLink } from "../utils/links";

export default function AboutMe(){
    return(
        <div id="about" className="container w-4/6 h-max mx-auto ">
        <h1 className="text-3xl pt-10 text-[#cce7f6] font-semibold"><span className="text-[#4cd8f7] font-mono text-base">02.</span> About Me                <span className="text-[#4cd8f7] select-none tracking-[-0.3em] font-extralight ">      -------------------------------------------------------------</span></h1>
        <p className="text-gray-300 mt-5 text-lg">I'm in my Final year pursuing B.Tech in <span className="text-[#4cd8f7]">Information Technology</span> at Manipal University Jaipur (2020-2024). 
        Passionate about technology and innovation, I've immersed myself in the world of software development, specializing in web development.
        </p>

          <p className="text-[#4cd8f7] mt-8 text-lg">My skillset includes:</p>
          <div className="lg:w-9/10 mx-auto flex flex-wrap">
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-3 mt-2 lg:mt-0">
              <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
                <li className="text-white">Languages</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-3 mt-6 lg:mt-0">
              <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
              <li className="text-white">Frameworks/Libraries</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-3 mt-6 lg:mt-0">
              <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
                <li className="text-white">Database</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Supabase</li>
              </ul>
            </div>
            
            <div className="lg:w-1/4 w-full lg:pr-10 lg:py-3 mt-6 lg:mt-0">
              <ul className="text-[#4cd8f7] mt-5 text-base font-mono leading-10">
              <li className="text-white">CI/CD</li>
                <li>Git</li>
                <li>Github</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
          
      </div>
    )
}