import { Terminal, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import picImg from '@/assets/headshot.png';


export function Header() {
  return (
    <header className="relative z-10 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
          {/* Terminal header */}
          <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
            <Terminal className="w-4 h-4" style={{ color: '#FFB6D9' }} />
            <span className="text-sm" style={{ color: '#FFC9E5' }}>kassi@portfolio:~$</span>
            <span className="text-gray-500 text-sm ml-2">cat about.json</span>
          </div>

          {/* Terminal content */}
          <div className="p-8 bg-black">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start mb-6">
              {/* Profile Picture */}
              <div className="overflow-hidden" style={{ border: '2px solid rgba(255, 182, 217, 0.4)' }}>
                <div className="relative group">
                  <img
                    src={picImg}
                    alt="Profile"
                    className="w-full aspect-square object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(255,182,217,0.3))'
                    }}
                  />
                </div>
                <div className="bg-gray-950 px-3 py-2 text-xs text-center" style={{ color: '#FFC9E5', borderTop: '2px solid rgba(255, 182, 217, 0.3)' }}>
                  <span style={{ color: '#FFB6D9' }}>[STATUS]</span> Chronically Online
                </div>
              </div>

              {/* JSON Content */}
              <div className="text-sm">
                <div className="mb-2">
                  <span style={{ color: '#FFB6D9' }}>{'{'}</span>
                </div>

                <div className="ml-4 space-y-1" style={{ color: '#FFD4EC' }}>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"name":</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"Kassiyet Adilbay"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"role":</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"Software Engineer"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"location":</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"Vancouver, Canada"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"education":</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"Bachelor's in Computer Science & Business"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"passions":</span>{' '}
                    <span style={{ color: '#FFB6D9' }}>[</span>
                    <span style={{ color: '#FFE5F1' }}>"algorithms"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"optimization"</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"data"</span>
                    <span style={{ color: '#FFB6D9' }}>]</span>
                    <span style={{ color: '#FFB6D9' }}>,</span>
                  </div>
                  <div>
                    <span style={{ color: '#FFC9E5' }}>"status":</span>{' '}
                    <span style={{ color: '#FFE5F1' }}>"coding & learning"</span>
                  </div>
                </div>

                <div className="mt-1">
                  <span style={{ color: '#FFB6D9' }}>{'}'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
              <motion.span
                style={{ color: '#FFC9E5' }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              >
                █
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}