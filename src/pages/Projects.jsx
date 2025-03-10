import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data/projects";
const Projects = () => {
  
  return (
    <div className="container mt-4">
      <h2>Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;