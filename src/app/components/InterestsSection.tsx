import { Camera, Waves, Mountain, Code2 } from 'lucide-react';

interface Interest {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    icon: any;
}

export function InterestsSection() {
    const interests: Interest[] = [
        {
            id: 1,
            title: 'Surfing',
            description: 'Catching waves and finding balance.',
            imageUrl: 'assets/surfing.jpeg',
            icon: Waves,
        },
        {
            id: 2,
            title: 'Hiking',
            description: 'Exploring trails. Best ideas come at 10,000 feet.',
            imageUrl: 'assets/hiking.jpeg',
            icon: Mountain,
        },
        {
            id: 3,
            title: 'Travelling World',
            description: 'Meeting people, exploring new cultures and food.',
            imageUrl: 'assets/travel.png',
            icon: Code2,
        },
        {
            id: 4,
            title: 'Paddleboarding',
            description: 'When sun is out and its 20degrees+, you can only catch me in ocean or lakes.',
            imageUrl: 'assets/paddle.png',
            icon: Camera,
        },
    ];

    return (
        <section className="relative z-10 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-black shadow-2xl overflow-hidden font-mono" style={{ border: '2px solid rgba(255, 182, 217, 0.5)' }}>
                    <div className="bg-gray-950 px-4 py-3 flex items-center gap-2" style={{ borderBottom: '2px solid rgba(255, 182, 217, 0.3)' }}>
                        <span style={{ color: '#FFB6D9' }}>kassi@portfolio:~$</span>
                        <span className="text-gray-500 text-sm">cd interests/ && ls -la</span>
                    </div>

                    <div className="p-8 bg-black">
                        <div className="text-sm mb-6" style={{ color: '#FFC9E5' }}>
                            <div><span style={{ color: '#FFB6D9' }}>[INFO]</span> Loading personal interests...</div>
                            <div><span style={{ color: '#FFB6D9' }}>[OK]</span> {interests.length} hobbies found</div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {interests.map((interest) => (
                                <div
                                    key={interest.id}
                                    className="overflow-hidden transition-all duration-300 group"
                                    style={{ border: '2px solid rgba(255, 182, 217, 0.3)' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = '2px solid rgba(255, 182, 217, 0.3)';
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={interest.imageUrl}
                                            alt={interest.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(255,182,217,0.2))'
                                            }}
                                        />
                                        <div className="absolute top-3 right-3 p-2 bg-black/70">
                                            <interest.icon className="w-5 h-5" style={{ color: '#FFB6D9' }} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 bg-gray-950">
                                        <div className="mb-2 flex items-center gap-2">
                                            <span style={{ color: '#FFB6D9' }}>$</span>
                                            <h3 className="text-sm" style={{ color: '#FFD4EC' }}>{interest.title}</h3>
                                        </div>
                                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255, 212, 236, 0.8)' }}>
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 text-center" style={{ borderTop: '2px solid rgba(255, 182, 217, 0.3)' }}>
                            <p className="text-xs" style={{ color: 'rgba(255, 201, 229, 0.6)' }}>
                                <span style={{ color: '#FFB6D9' }}>[TIP]</span> Touching grass in between coding is important!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
