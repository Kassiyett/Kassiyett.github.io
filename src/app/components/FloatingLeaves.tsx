import { motion } from 'motion/react';

interface CodeSymbol {
  id: number;
  left: string;
  delay: number;
  duration: number;
  symbol: string;
}

export function FloatingLeaves() {
  const codeSymbols: CodeSymbol[] = [
    { id: 1, left: '10%', delay: 0, duration: 15, symbol: '{' },
    { id: 2, left: '25%', delay: 2, duration: 18, symbol: '}' },
    { id: 3, left: '50%', delay: 4, duration: 20, symbol: '<>' },
    { id: 4, left: '75%', delay: 1, duration: 16, symbol: '/>' },
    { id: 5, left: '90%', delay: 3, duration: 19, symbol: '()' },
    { id: 6, left: '15%', delay: 5, duration: 17, symbol: ';' },
    { id: 7, left: '65%', delay: 2.5, duration: 19, symbol: '[]' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {codeSymbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-2xl font-mono opacity-10"
          style={{
            left: item.left,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 30, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span className="text-pink-400/40">{item.symbol}</span>
        </motion.div>
      ))}
    </div>
  );
}