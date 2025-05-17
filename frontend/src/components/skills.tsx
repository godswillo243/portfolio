import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
  },
  {
    name: "React",
    level: 87,
    category: "frontend",
  },
  {
    name: "TypeScrypt",
    level: 85,
    category: "frontend",
  },
  {
    name: "Taillwind CSS",
    level: 90,
    category: "frontend",
  },
  //   B
  {
    name: "Node js",
    level: 85,
    category: "backend",
  },
  {
    name: "Express",
    level: 80,
    category: "backend",
  },
  {
    name: "MongoDB",
    level: 76,
    category: "backend",
  },

  {
    name: "Git/GitHub",
    level: 80,
    category: "tools",
  },
  {
    name: "VS Code",
    level: 87,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || activeCategory === skill.category
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3x md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer font-semibold",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-glow"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-background h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full  rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{
                      width: skill.level + "%",
                    }}
                  />
                </div>
                <div className="text-right mt-1 ">
                  <span className="text-sm">{skill.level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
