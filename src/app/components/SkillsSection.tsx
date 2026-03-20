interface Skill {
  category: string;
  items: string[];
}

export function SkillsSection() {
  const skills: Skill[] = [
    {
      category: 'Languages',
      items: ['TypeScript', 'Python', 'Go', 'Rust', 'Java', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue', 'Tailwind', 'WebGL', 'Motion'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'REST'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Nginx'],
    },
    {
      category: 'Tools',
      items: ['Git', 'VSCode', 'Linux', 'Vim', 'Postman', 'Figma'],
    },
    {
      category: 'Concepts',
      items: ['Data Structures', 'Algorithms', 'System Design', 'Agile', 'TDD', 'OOP'],
    },
  ];

  return (
    <section className="relative z-10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <span style={{ color: '#FFB6D9' }}>alex@portfolio:~$</span>
            <span className="text-gray-500 text-sm">cat skills.json | jq</span>
          </div>

          <div className="p-8 bg-black">
            <div className="text-sm mb-6" style={{ color: '#FFC9E5' }}>
              <div><span style={{ color: '#FFB6D9' }}>[OUTPUT]</span> Skills and technologies</div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-3" style={{ color: '#FFD4EC' }}>
                    <span style={{ color: '#FFB6D9' }}>$</span> {skill.category.toLowerCase()}_skills
                  </div>
                  <div className="ml-4 flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm"
                        style={{
                          backgroundColor: 'rgba(255, 182, 217, 0.1)',
                          color: '#FFD4EC',
                          border: '1px solid rgba(255, 182, 217, 0.3)'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}