import HtmlIcon from '../assets/icons/html.svg?react'
import CssIcon from '../assets/icons/css.svg?react'
import JsIcon from '../assets/icons/javascript.svg?react'
import ReactIcon from '../assets/icons/react.svg?react'
import TailwindIcon from '../assets/icons/tailwind.svg?react'

import NodeIcon from '../assets/icons/nodejs.svg?react'
import MysqlIcon from '../assets/icons/mysql.svg?react'
import RestApiIcon from '../assets/icons/restapi.svg?react'

import FigmaIcon from '../assets/icons/figma.svg?react'
import AdobeXDIcon from '../assets/icons/xd.svg?react'
import WireframeIcon from '../assets/icons/wireframe.svg?react'

import GitIcon from '../assets/icons/git.svg?react'
import GithubIcon from '../assets/icons/github.svg?react'
import VscodeIcon from '../assets/icons/vscode.svg?react'
import PostmanIcon from '../assets/icons/postman.svg?react'


const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: HtmlIcon},
      { name: 'CSS', icon: CssIcon },
      { name: 'JavaScript', icon: JsIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'MySQL', icon: MysqlIcon },
      { name: 'REST API', icon: RestApiIcon },
    ]
  },
  {
    category: 'UI/UX',
    items: [
      { name: 'Figma', icon: FigmaIcon },
      { name: 'Adobe XD', icon: AdobeXDIcon },
      { name: 'Wireframing', icon: WireframeIcon },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'VS Code', icon: VscodeIcon },
      { name: 'Postman', icon: PostmanIcon },
    ]
  }
];

export default function Skills() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">My Skills</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mt-6 max-w-3xl mx-auto">
            Here are the technologies and tools I work with. I'm always learning and expanding my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="relative bg-gray-900/40 backdrop-blur-sm border border-indigo-700/10 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <h2 className="relative z-10 text-xl font-semibold text-white text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {category.category}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <div className="w-16 h-16 flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110">
                      {skill.icon ? (
                        typeof skill.icon === 'string' ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-10 h-10 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" 
                          />
                        ) : (
                          <skill.icon 
                            className="w-10 h-10 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" 
                          />
                        )
                      ) : null}
                    </div>
                    <span className="text-xs text-gray-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
