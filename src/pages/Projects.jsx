import { useState } from 'react'
import { motion } from 'framer-motion'
import FlexiQuizImage from '../assets/flexiquiz-screenshot.png'

const projects = [
  {
    id: 1,
    title: 'FlexiQuiz',
    description: 'An adaptive quiz platform that adjusts question difficulty based on user performance. Features topics like general knowledge, science, and tech.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    image: FlexiQuizImage,
    github: 'https://github.com/GodEye119/FlexiQuiz-App',
    demo: 'https://flexi-quiz-app.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-32 pb-20 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2a1140]/80 rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/10 hover:shadow-3xl hover:shadow-indigo-500/20 transition-transform duration-300 ease-in-out"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-900 p-2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <i className="fab fa-github text-2xl hover:scale-110 transition-transform duration-300"></i>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-indigo-500/30"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}