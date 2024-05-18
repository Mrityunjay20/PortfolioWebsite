import { linkedinLink } from "../utils/links";
import { Experience, VolExperience } from "../utils/projectInfo";

export default function ExperienceComponent() {
  return (
    <>
     <section id="experience" className="text-gray-400 body-font relative">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-[6vw] font-semibold title-font mb-4 text-[#ccd6f6]">
            Work Experience
          </h1>
          <p className="mx-auto text-center md:w-1/2 sm:1/3  text-gray-200">This is a concise overview of my career.
          For a more detailed account of my professional background, including specific roles, projects, and endorsements, I invite you to visit my <a href={linkedinLink} className="text-[#4cd8f7]">LinkedIn</a> profile.<br/> There, you'll gain deeper insights into my skills, achievements, and professional network.
          
          
          </p>
        </div>
      </div>
    </section>
<section className="text-gray-400 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="hidden md:block flex relative pb-5 sm:items-center md:w-2/3 mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
    </div>
    <div className="min-w-max shrink-0 h-[3px] px-0 rounded-full mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-indigo-500 relative z-10 title-font font-medium text-xs"></div>
</div>
          {Object.entries(Experience).map(([company, job]) => (
            <>
              <div
                key={Math.random()}
                className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
              >
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="min-w-max h-6 px-3 py-1 rounded-xl mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-xs">
                  {job.StartDate}- {job.EndDate}
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-28 h-28 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center overflow-hidden">
                    <img
                      src={job.logo}
                      alt="HSC Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-[#47a3e5] mb-1 text-xl">
                      {company}
                    </h2>
                    <div className="flex text-[#47a3e5] justify-between">
                      <p className="leading-relaxed">{job.Role}</p>
                      <p className="leading-relaxed">{job.Type}</p>
                    </div>
                    <p className="leading-relaxed">{job.Location}</p>
                    <p className="w-10/12">
                      <span className="text-[#47a3e5]">Worked on:</span>{" "}
                      {job.Technologies.map((tech, index) => (
                        <span key={index}>
                          {tech}
                          {index < job.Technologies.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="hidden md:block flex relative  sm:items-center md:w-2/3 mx-auto">
    <div className=" w-6 absolute inset-0 flex items-center justify-center">
        <div className=" w-1 bg-gray-800 pointer-events-none"></div>
    </div>
    <div className="min-w-max shrink-0 h-[3px] px-0 rounded-full mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-indigo-500 relative z-10 title-font font-medium text-xs"></div>
</div>
        </div>
      </section>

<section className="text-gray-400 body-font hidden md:block" >
<h1 className="text-[6vw] text-center mt-24 font-semibold title-font mb-24 text-[#ccd6f6]">
          Leadership experience
          </h1>
        <div className="container px-5 pb-16 mx-auto flex flex-wrap">
        <div className="hidden md:block flex relative pb-5 sm:items-center md:w-2/3 mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
    </div>
    <div className="min-w-max shrink-0 h-[3px] px-0 rounded-full mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-indigo-500 relative z-10 title-font font-medium text-xs"></div>
</div>
          {Object.entries(VolExperience).map(([company, job]) => (
            <>
              <div
                key={Math.random()}
                className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
              >
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="min-w-max h-6 px-3 py-1 rounded-xl mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-xs">
                  {job.StartDate}- {job.EndDate}
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-28 h-28 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center overflow-hidden">
                    <img
                      src={job.logo}
                      alt="HSC Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-[#47a3e5] mb-1 text-xl">
                      {company}
                    </h2>
                    <div className="flex text-[#47a3e5] justify-between">
                      <p className="leading-relaxed">{job.Role}</p>
                      <p className="leading-relaxed">{job.Type}</p>
                    </div>
                    <p className="leading-relaxed">{job.Location}</p>
                    <p className="w-10/12">
                      <span className="text-[#47a3e5]">Contribution:</span>{" "}
                      {job.Desc}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="hidden md:block flex relative  sm:items-center md:w-2/3 mx-auto">
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
    </div>
    <div className="min-w-max shrink-0 h-[3px] px-0 rounded-full mt-10 sm:mt-0 items-center justify-center bg-indigo-500 text-indigo-500 relative z-10 title-font font-medium text-xs"></div>
</div>
        </div>
      </section>
      <div className="mb-16 flex justify-center">
          <div className="inline-flex rounded-md shadow transition-all mt-4 duration-500">
            <a
              href="https://www.linkedin.com/in/mrityunjay-shrivastava/"
              className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md border-[#41bfdc] text-white hover:border-white hover:text-[#41bfdc] transition-all duration-500"
            >
              View More
            </a>
          </div>
        </div>
    </>
  );
}
