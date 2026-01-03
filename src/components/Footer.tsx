import React from "react";
import { Github, Linkedin, Code, Heart } from "lucide-react";
import { socials } from "../data/portfolio";

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-5 h-5" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "Code":
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Mesay Lemma
            </div>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer specializing in Golang, Flutter, and scalable
              system architecture. Always excited about new challenges and
              opportunities to learn.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Experience", "Projects", "Education", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(
                        link.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 text-white"
                  title={social.title}
                >
                  {getIcon(social.iconName)}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p>mesaylema21@gmail.com</p>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div> */}

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mesay Lemma. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
