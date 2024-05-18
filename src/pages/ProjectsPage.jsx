import ProjectCard from "../components/ProjectCard";
import ProjectHeading from "../components/ProjectHeading";
import { ProjectInfo } from "../utils/projectInfo";

export default function ProjectsPage(){

    return(
        <>
        <ProjectHeading/>
        <div className="inline">
        {Object.entries(ProjectInfo).map(([projectName, projectDetails]) => (
                <ProjectCard key={projectName} projectName={projectName} projectDesc={projectDetails.Desc} githubLink={projectDetails.GithubLink} websiteLink={projectDetails.websiteLink}/>
        ))}
        </div>
        
        </>
    )
}