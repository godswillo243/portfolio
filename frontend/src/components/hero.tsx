import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Godswill{" "}
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ogbodu{" "}
            </span>
          </h1>

          {/*  */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-left mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in full stack web development
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="custom-button">
                View my works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
