import { SKILLS } from "@/constants";
import SkillCard from "../cards/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-5/6 mx-auto flex flex-col items-center py-16 md:py-24 gap-16"
    >
      {/* title and subtitle */}
      <div>
        <h1 className="font-bold font-IBMPlex text-4xl sm:text-5xl text-deep-blue text-center">
          Skills
        </h1>
        <p className="font-IBMPlex sm:text-lg text-deep-blue text-center mt-4">
          My current skills that I good enough at it
        </p>
      </div>

      {/* skills  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {SKILLS.map((skill) => (
          <SkillCard
            key={skill.label}
            skillName={skill.label}
            image={skill.image}
          />
        ))}
      </div>
    </section>
  );
}
