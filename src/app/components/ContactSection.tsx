import { Mail, Linkedin, Github, Terminal } from 'lucide-react';

export function ContactSection() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kassiyett/', username: 'github.com/kassiyett' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kassiyett/', username: 'linkedin.com/in/kassiyett' },
    { icon: Mail, label: 'Email', href: 'mailto:kassiyet.adilbay@gmail.com', username: 'kassiyet.adilbay@gmail.com' },
  ];

  return (
    <section className="relative z-10 py-12 px-6 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
            <span className="text-gray-500 text-sm">./contact.sh --all</span>
          </div>

          <div className="p-8 bg-black">
            <div className="mb-8 text-sm" style={{ color: '#FFD4EC' }}>
              <p className="mb-2">
                <span style={{ color: '#FFB6D9' }}>[EXEC]</span> Initializing contact protocols...
              </p>
              <p className="ml-4 mb-3" style={{ color: 'rgba(255, 212, 236, 0.8)' }}>
                Want to go on a hike? Have cool idea to build together? Feel free to contact me!
              </p>
              {/* <p className="text-xs ml-4" style={{ color: 'rgba(255, 201, 229, 0.6)' }}>
                # Open to opportunities | Remote-friendly | Available for consulting
              </p> */}
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-4 p-4 transition-all duration-300 group"
                  style={{ border: '2px solid rgba(255, 182, 217, 0.3)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.3)';
                  }}
                >
                  <link.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: '#FFB6D9' }} />
                  <div className="flex-1">
                    <div className="text-sm" style={{ color: '#FFD4EC' }}>{link.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255, 201, 229, 0.7)' }}>{link.username}</div>
                  </div>
                  <div className="transition-colors text-sm" style={{ color: '#FFB6D9' }}>
                    →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 text-center" style={{ borderTop: '2px solid rgba(255, 182, 217, 0.3)' }}>
              <p className="text-xs" style={{ color: 'rgba(255, 201, 229, 0.6)' }}>
                <span style={{ color: '#FFB6D9' }}>©</span> 2026 Kassiyet Adilbay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}