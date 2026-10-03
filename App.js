import React, { useState } from 'react';
import { profileData } from './data';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  Code2, 
  ExternalLink, 
  Github, 
  GraduationCap, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Users, 
  Menu, 
  X 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition">
            <span className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-base">KC</span>
            <span>Khushboo<span className="text-indigo-500">.</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#leadership" className="hover:text-indigo-400 transition">Leadership</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a 
              href={profileData.links.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition inline-flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <Linkedin className="w-4 h-4" /> Connect
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400">About</a>
            <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400">Leadership</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-400">Skills</a>
            <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn Profile
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Google Student Ambassador | Titan (Platinum)
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">{profileData.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {profileData.title} at <span className="text-indigo-300 font-medium">{profileData.college}</span>. {profileData.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-12">
              <a 
                href={profileData.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg shadow-indigo-600/25"
              >
                <Linkedin className="w-4 h-4" /> View LinkedIn Profile
              </a>
              <a 
                href="#projects" 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-xl flex items-center gap-2 transition border border-slate-700"
              >
                <Code2 className="w-4 h-4" /> Explore Work
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{profileData.location}</span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-extrabold text-indigo-400 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & About */}
        <section id="about" className="py-16 bg-slate-900/30 border-y border-slate-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-indigo-400" /> Education & Overview
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80">
                <h3 className="text-xl font-bold text-slate-100 mb-2">{profileData.degree}</h3>
                <p className="text-indigo-400 font-medium mb-4">{profileData.college}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Pursuing foundational and applied concepts in Computer Science and Design. Actively engaged in algorithmic problem solving, Python programming (recursion, exception handling, data structures), and AI/Data Science libraries.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md text-xs bg-slate-800 text-indigo-300 font-medium">B.Tech 3rd Sem</span>
                  <span className="px-3 py-1 rounded-md text-xs bg-slate-800 text-indigo-300 font-medium">Design & Logic</span>
                  <span className="px-3 py-1 rounded-md text-xs bg-slate-800 text-indigo-300 font-medium">Open Source</span>
                </div>
              </div>

              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-200 mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" /> Focus Highlights
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span> AI & Data Workflows with Pandas, NumPy, Scikit-learn
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span> Technical Community Leadership & Mentorship
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span> Event Planning & Hackathon Execution
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400">Location: </span>
                  <span className="text-xs font-medium text-slate-200">Gwalior, MP, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Experience */}
        <section id="leadership" className="py-20 max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-400" /> Leadership & Ambassadorships
            </h2>
            <p className="text-slate-400 text-sm">Empowering campus peers through tech engagement and national programs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {profileData.leadership.map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-indigo-400 text-sm font-medium">{item.org}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 bg-slate-900/30 border-y border-slate-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-indigo-400" /> Projects & Initiatives
              </h2>
              <p className="text-slate-400 text-sm">Selected software projects and open source contributions.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {profileData.projects.map((proj, idx) => (
                <div key={idx} className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">{proj.description}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Code2 className="w-7 h-7 text-indigo-400" /> Technical Skills & Tools
            </h2>
            <p className="text-slate-400 text-sm">Technologies and workflows I utilize in development and data analysis.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {profileData.skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-slate-200">Khushboo Chourasiya</p>
            <p className="text-xs text-slate-400">B.Tech CSD | Google Student Ambassador</p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={profileData.links.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
