import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

// This is a simple navbar component that will be used in the app

const navbarItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs "
          : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-foreground flex items-center"
        >
          <span className="relative z-20  ">
            <span className=" text-glow text-primary">GODSWILLO243</span>
            {""} Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navbarItems.map((item, i) => {
            return (
              <a
                href={item.path}
                key={i}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Navigation */}

        <button
          className="md:hidden z-41 cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/75 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="md:hidden flex flex-col text-xl items-center space-y-8">
            {navbarItems.map((item, i) => {
              return (
                <a
                  href={item.path}
                  key={i}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
