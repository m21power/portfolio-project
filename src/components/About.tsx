import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                Mesay Lemma
              </span>
              , a Computer Science student at Addis Ababa University,
              specializing in{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                backend development with Golang
              </span>{" "}
              and{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                mobile development with Flutter
              </span>
              .
            </p>

            <p>
              With professional experience in Golang, Flutter, Python, Java, and
              C++, I build scalable backend systems and performant mobile
              applications.
            </p>

            <p>
              As an{" "}
              <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                A2SV scholar
              </span>
              , I've developed strong problem-solving skills through competitive
              programming, solving 850+ algorithmic challenges on LeetCode and
              Codeforces. This training has given me the ability to approach
              complex technical problems methodically.
            </p>

            <p>
              I prioritize clean, maintainable code and efficient solutions. My
              technical approach balances performance with practicality to
              deliver robust software.
            </p>
          </div>

          {/* Profile Image with Stats */}
          <div className="relative">
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dl6vahv6t/image/upload/v1752582210/IMG_20240929_105737_270_xwzh4q.jpg"
                alt="Mesay Lemma"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                  850+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Problems Solved
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                  240+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  DAU of My App
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Projects Built
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Golang",
              "Flutter",
              "React",
              "TypeScript",
              "JavaScript",
              "PostgreSQL",
              "Docker",
              "Firebase",
              "Java",
              "Spring Boot",
              "gRPC",
              "WebSockets",
              "Git",
              "CI/CD",
              "Clean Architecture",
              "Tailwind CSS",
              "Python",
              "C++",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
