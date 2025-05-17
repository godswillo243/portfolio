import Background from "@/components/background";
import ThemeToggle from "@/components/themeToggle";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden ">
      {/* Theme toggle */}
      <ThemeToggle />

      {/*  */}
      <Background />
      {/*  */}
      <Navbar />
      {/*  */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      {/*  */}
    </div>
  );
}

export default Home;
