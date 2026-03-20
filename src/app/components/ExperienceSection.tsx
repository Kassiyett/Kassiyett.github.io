import { Terminal, GitBranch } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Incoming Software Engineering Intern',
      company: 'Uber',
      period: 'May 2026 - July 2026',
      description: 'I do not know what I will do yet. But something related to backend and pricing!',
      tech: ['Go'],
    },
    {
      id: 2,
      title: 'In Focus Participant',
      company: 'Jane Street',
      period: 'Jan 2026 - Jan 2026',
      description: 'Participated in a week-long on-site program for students experiencing barriers to technology in NYC. Debugged, wrote, and optimized code.',
      tech: ['OCaml', 'Python', 'Market Making', 'Critical Thinking'],
    },
    {
      id: 3,
      title: 'Quantitative Analyst',
      company: 'Investa Insights',
      period: 'Sep 2025 - Present',
      description: 'Did clustering, Monte Carlo, credit risk analysis, and multi-factor analysis to evaluate stocks, find a signal, and prove a hypothesis.',
      tech: ['ML', 'Python', 'Data Engineering', 'Quantitative Finance'],
    },
    {
      id: 4,
      title: 'Medical Technology Researcher',
      company: 'Hill Lab',
      period: 'May 2024 - October 2025',
      description: 'Leveraged machine learning algorithms on clinical datasets to enable low-cost, early-stage disease detection through feature selection and predictive modeling.',
      tech: ['ML', 'Python', 'R', 'Data Engineering', 'Data Analysis'],
    },
    {
      id: 5,
      title: 'Software Engineering Fellow',
      company: 'Uber Career Prep',
      period: 'Jan 2025 - Aug 2025',
      description: 'Implemented and optimized solutions across 30+ algorithmic problems using data structures including graphs, tries, heaps, and dynamic programming, emphasizing clean code, refactoring, and time/space complexity improvements.',
      tech: ['Python', 'Data Structures and Algorithms'],
    },
  ];

  return (
    <section className="relative z-10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
            <span className="text-gray-500 text-sm">ls -la experience/</span>
          </div>

          <div className="p-8 bg-black space-y-4">
            <div className="text-sm mb-6" style={{ color: '#FFC9E5' }}>
              <div><span style={{ color: '#FFB6D9' }}>[LISTING]</span> 5 entries found</div>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="pl-6 pb-6 relative"
                style={{ borderLeft: '2px solid rgba(255, 182, 217, 0.5)' }}
              >
                <div className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px]" style={{ backgroundColor: '#FFB6D9' }} />

                <div className="mb-2">
                  <div className="mb-1" style={{ color: '#FFD4EC' }}>{exp.title}</div>
                  <div className="text-sm" style={{ color: '#FFC9E5' }}>{exp.company} | {exp.period}</div>
                </div>
                <p className="leading-relaxed mb-3 text-sm" style={{ color: 'rgba(255, 212, 236, 0.8)' }}>{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
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