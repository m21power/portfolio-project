import React from 'react';
import { ExternalLink } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-4">
                          {exp.company}
                        </p>
                      </div>
                      {exp.thumbnail && (
                        <div className="flex-shrink-0 lg:ml-4">
                          <img
                            src={exp.thumbnail}
                            alt={exp.company}
                            className="w-16 h-16 rounded-lg object-cover shadow-md"
                          />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <ul className="space-y-2 mb-6">
                      {exp.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-medium transition-colors duration-200"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;