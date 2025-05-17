import { BriefcaseBusinessIcon, CodeIcon, UserIcon } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Web Developer
            </h3>
            <p className="text-left">
              Full Stack Web Developer proficient in building scalable web
              applications using modern technologies including React, Node.js,
              and TypeScript. Passionate about clean, efficient code and
              creating seamless user experiences.
            </p>
            <p className="text-left">
              Skilled in both frontend and backend development, with a strong
              understanding of RESTful API design, MongoDB integration, and
              responsive design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="custom-button">
                Get in Touch
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-background rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-primary/8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/12">
                  <CodeIcon className="text-primary w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-primary/8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/12">
                  <UserIcon className="text-primary w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing initiative user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-primary/8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/12">
                  <BriefcaseBusinessIcon className="text-primary w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conceptions to completion with agile
                    methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
