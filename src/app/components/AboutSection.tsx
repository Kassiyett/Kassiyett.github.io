import { Code2, Sprout, Cpu, MapPin } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Code2, label: 'Lines of Code', value: '300k+' },
    { icon: Cpu, label: 'Bugs Debugged', value: '∞' },
    { icon: Sprout, label: 'Grass Touched', value: '0' },
  ];

  return (
    <section className="relative z-10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          {/* Header */}
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
            <span className="text-gray-500 text-sm">./about.sh</span>
          </div>

          <div className="p-8 bg-black">
            <div className="mb-6 text-sm" style={{ color: '#FFC9E5' }}>
              <div><span style={{ color: '#FFB6D9' }}>[INFO]</span> Initializing profile...</div>
              <div><span style={{ color: '#FFB6D9' }}>[OK]</span> Profile loaded successfully</div>
            </div>

            {/* Kazakhstan Origin Section */}
            <div className="mb-8 overflow-hidden" style={{ border: '2px solid rgba(255, 182, 217, 0.3)' }}>
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <img
                    src='@assets/tulips.jpeg'
                    alt="Kazakhstan"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(255,182,217,0.2))'
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 bg-black/70">
                    <MapPin className="w-4 h-4" style={{ color: '#FFB6D9' }} />
                    <span className="text-xs" style={{ color: '#FFD4EC' }}>Boralday, Kazakhstan</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gray-950">
                  <div className="mb-3 flex items-center gap-2">
                    <span style={{ color: '#FFB6D9' }}>$</span>
                    <span className="text-sm" style={{ color: '#FFD4EC' }}>echo $ORIGIN</span>
                  </div>
                  <div className="ml-4 space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: '#FFD4EC' }}>
                      <span style={{ color: '#FFC9E5' }}>&gt;</span> Born and raised in South Kazakhstan 🇰🇿
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255, 212, 236, 0.8)' }}>
                      My journey in tech started in Kazakhstan, where I learned to think and dream big. My hometown, my roots and family always inspire me to be resilient.
                    </p>
                    <div className="pt-2 text-xs" style={{ color: 'rgba(255, 201, 229, 0.6)' }}>
                      <span style={{ color: '#FFB6D9' }}>#</span> Proud of my roots, building for the world
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-950 p-4" style={{ border: '2px solid rgba(255, 182, 217, 0.3)' }}>
                  <stat.icon className="w-8 h-8 mb-2" style={{ color: '#FFB6D9' }} />
                  <div className="text-2xl mb-1" style={{ color: '#FFD4EC' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 201, 229, 0.7)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm" style={{ color: '#FFD4EC' }}>
              <p className="leading-relaxed">
                <span style={{ color: '#FFB6D9' }}>$</span> whoami
              </p>
              <p className="leading-relaxed ml-4" style={{ color: '#FFD4EC' }}>
                I'm a software engineer who loves building elegant solutions to complex problems. With a CS & Business degree, I specialize in turning coffee into messy ideas and ideas into scalable products.
              </p>
              <p className="leading-relaxed ml-4" style={{ color: '#FFD4EC' }}>
                When I'm not coding or debugging, you will find me doing hackathons, data competitions, or just building for fun.
              </p>
              <div className="flex items-center gap-2 mt-6" style={{ color: '#FFB6D9' }}>
                <span>$</span>
                <span style={{ color: '#FFC9E5' }}>cat interests.txt</span>
              </div>
              <p className="leading-relaxed ml-4" style={{ color: '#FFD4EC' }}>
                • Backend • Machine Learning • Computer Systems • Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}