import React from 'react';
import { CaseSensitive as University, School, GraduationCap, Trophy, Code } from 'lucide-react';
import { eduBg } from '../data/portfolio';

const Education: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'University':
        return <University className="w-6 h-6" />;
      case 'School':
        return <School className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      default:
        return <School className="w-6 h-6" />;
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {eduBg.map((edu, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Timeline Line */}
              {index !== eduBg.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    {getIcon(edu.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-6">
                      {edu.desc}
                    </p>

                    {/* Details */}
                    <div className="space-y-4">
                      {edu.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <div className="flex-shrink-0 mr-3 mt-0.5">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              {getIcon(detail.iconName)}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{detail.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">850+ Problems</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Solved on LeetCode and Codeforces
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">A2SV Scholar</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Google-backed competitive programming program
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">CS Student</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Bachelor's degree in Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;