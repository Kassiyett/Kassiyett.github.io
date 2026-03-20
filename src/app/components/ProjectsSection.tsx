import { Github, ExternalLink, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  // stars: number;
  link?: string;
  awards?: string[];
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'BluRead',
      description: 'AI Powered Chrome extension that detects and blurs potentially triggering content on the web.',
      tech: ['Manifest V3', 'Vanilla JavaScript', 'APIs', 'CSS'],
      // stars: 342,
      link: 'https://github.com/Kassiyett/bluRead',
      awards: ['🏆 2nd Place - KickStart Hackathon 2025.']
    },
    {
      id: 2,
      title: 'AI research assistant',
      description: 'Automate academic paper discovery, summarization, and evidence extraction with AI research assistant using a multi-agent system with asynchronous microservices.',
      tech: ['FastAPI', 'Next.js', 'SQL', 'TypeScript'],
      // stars: 1289,
      link: 'https://devpost.com/software/research-insider',
      awards: ['CS Project Hub Shortlist - CMD-F Hackathon.']
    },
    // {
    //   id: 3,
    //   title: 'algo-visualizer',
    //   description: 'Interactive algorithm visualization platform. Supports sorting, graph traversal, and dynamic programming with step-by-step execution.',
    //   tech: ['Next.js', 'Canvas API', 'Tailwind'],
    //   // stars: 567,
    // },
  ];

  return (
    <section className="relative z-10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
            <span className="text-gray-500 text-sm">git log --projects --oneline</span>
          </div>

          <div className="p-8 bg-black space-y-4">
            <div className="text-sm mb-6" style={{ color: '#FFC9E5' }}>
              <div><span style={{ color: '#FFB6D9' }}>[GIT]</span> Showing featured repositories</div>
            </div>

            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 transition-colors"
                style={{
                  border: '2px solid rgba(255, 182, 217, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.3)';
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5" style={{ color: '#FFB6D9' }} />
                    <span style={{ color: '#FFD4EC' }}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#FFD4EC' }}>
                        {project.title}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="flex items-center gap-1" style={{ color: '#FFC9E5' }}>
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div> */}
                    {/* <ExternalLink className="w-4 h-4 cursor-pointer transition-colors" style={{ color: '#FFC9E5' }} /> */}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink
                          className="w-4 h-4 cursor-pointer transition-colors"
                          style={{ color: '#FFC9E5' }}
                        />
                      </a>
                    )}
                  </div>
                </div>

                <p className="leading-relaxed mb-4 text-sm" style={{ color: 'rgba(255, 212, 236, 0.8)' }}>
                  {project.description}
                </p>

                {project.awards && project.awards.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.awards.map((win, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1"
                        style={{
                          border: '1px solid rgba(255, 182, 217, 0.5)',
                          color: '#FFB6D9',
                          backgroundColor: 'rgba(255, 182, 217, 0.08)',
                        }}
                      >
                        {win}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs"
                      style={{
                        backgroundColor: 'rgba(255, 182, 217, 0.1)',
                        color: '#FFC9E5',
                        border: '1px solid rgba(255, 182, 217, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}