import ProjectCard from "../components/ProjectCard";
import ProjectHeading from "../components/ProjectHeading";
import { ProjectInfo } from "../utils/projectInfo";

export default function ProjectsPage(){

    return(
        <>
        <ProjectHeading/>
        <section className="text-gray-200 w-full body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
        {Object.entries(ProjectInfo).map(([projectName, projectDetails]) => (
                <ProjectCard key={projectName} projectImg={projectDetails.imglink} projectName={projectName} projectDesc={projectDetails.Desc} githubLink={projectDetails.GithubLink} websiteLink={projectDetails.websiteLink}/>
        ))}
        </div>
        </div>
        </section>
        
        </>
    )
}