import ProjectCard from "../cards/ProjectCard";
import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="banner02">
      <div className="w-5/6 mx-auto flex flex-col items-center py-16 md:py-24 gap-16">
        {/* title and subtitle */}
        <div>
          <h1 className="font-bold font-IBMPlex text-4xl sm:text-5xl text-white text-center">
            Projects
          </h1>
          <p className="font-IBMPlex sm:text-lg text-white mt-4 text-center">
            My personal projects that have been developed using React and
            Next.js
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
