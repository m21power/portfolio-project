import React, { useEffect, useState } from "react";
import { Github, Linkedin, Code, ChevronDown } from "lucide-react";
import { socials } from "../data/portfolio";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Backend Developer",
    "Mobile Developer",
    "Full Stack Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentTitle.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-6 h-6" />;
      case "Linkedin":
        return <Linkedin className="w-6 h-6" />;
      case "Code":
        return <Code className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-20"></div>

      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Geometric shapes with subtle animation */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/5 dark:bg-blue-400/5 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-blue-600/5 dark:bg-cyan-500/5 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-600/5 dark:bg-blue-500/5 rounded-full animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 dark:bg-cyan-400/20 rounded-full animate-bounce-slow"></div>
        <div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-cyan-400/20 dark:bg-blue-400/20 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-500/20 dark:bg-cyan-500/20 rounded-full animate-bounce-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        {/* Profile Image */}
        <div className="mb-8 mt-8 animate-fade-in">
          <img
            src="https://res.cloudinary.com/dl6vahv6t/image/upload/v1753348821/mesay_sw5s27.jpg"
            alt="Mesay Lemma"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Mesay Lemma
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 h-8">
            I'm a{" "}
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Computer Science student specializing in backend development with
            Golang and mobile development with Flutter. Passionate about
            building scalable solutions and solving complex problems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-6">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
              >
                {getIcon(social.iconName)}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <a
              href="https://github.com/m21power"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
