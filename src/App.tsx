import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, GraduationCap, Terminal } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Section from './components/Section';

function App() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa"
    },
    {
      title: "Groupie Trackers",
      description: "Groupie Tracker is a Go-based web app that tracks music artists, providing concert details, artist relations, and geolocation visuals, with clean architecture and API-driven data.",
      image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_1920,c_limit/GettyImages-125112134.jpg",
      tags: ["Go", "Javascript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/visualizations-groupie-trackers"
    },
    {
      title: "WGET",
      description: "Full-stack task management application with real-time updates.",
      image: "https://shapeshed.com/unix-wget/images/hero_hu9721cd899e5ce367f375e3e80fabbabf_80679_1600x0_resize_q80_h2_lanczos_3.webp",
      tags: ["Go"],
      link: "https://github.com/MauriceOmbewa/wget"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
              <img
                src="https://learn.zone01kisumu.ke/git/avatars/495e06ea69c29cee1df656696956ba25?size=870"
                alt="Maurice Ombewa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Maurice Ombewa
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Software Developer | Go Enthusiast | Problem Solver
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a href="https://github.com/MauriceOmbewa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/maurice-ombewa-3631ab223/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="mailto:ombewamaurice79@gmail.com" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" icon={<User />} title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in software development began in 2020 when I enrolled for a Bachelor of Science in Information Technology at KCA University. During my 4-year course, I developed a strong foundation in various programming languages and software development principles.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently, I'm an apprentice Software Developer at Zone01 Kisumu (from April 2024), where I'm actively enhancing my coding skills and working on real-world projects. I'm particularly passionate about Go programming and building efficient, scalable solutions.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SkillBadge title="Go" level={85} />
            <SkillBadge title="JavaScript" level={80} />
            <SkillBadge title="Python" level={75} />
            <SkillBadge title="SQL" level={80} />
            <SkillBadge title="Java" level={70} />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" icon={<Code2 />} title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" icon={<GraduationCap />} title="Education">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
                <p className="text-blue-400 mb-2">KCA University • 2020 - 2024</p>
                <p className="text-gray-300">
                  Completed a comprehensive 4-year program focusing on software development, database management, and system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" icon={<Briefcase />} title="Experience">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Apprentice Software Developer</h3>
                <p className="text-blue-400 mb-2">Zone01 Kisumu • April 2024 - Present</p>
                <p className="text-gray-300">
                  Currently enhancing my software development skills through hands-on experience with modern technologies and best practices. Focusing on Go programming and full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" icon={<Mail />} title="Get in Touch">
        <div className="max-w-xl mx-auto">
          <form className="space-y-4 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;