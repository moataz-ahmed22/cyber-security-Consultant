import { useEffect, useState, FC } from 'react';
import { ChevronRight, Shield, Lock, Eye, Terminal } from 'lucide-react';
import { HeroBackground, FloatingIcons, MatrixRain } from './CyberGraphics';

const Hero: FC = () => {
  const [text, setText] = useState('');
  const fullText = '> Securing your digital future...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Professional Cyber Background */}
      <HeroBackground />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Floating Security Icons */}
      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-16 md:pb-32">


        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center px-3 py-2 md:px-6 md:py-3 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-xs md:text-sm font-cyber font-medium">
                <Terminal className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                <span className="hidden sm:inline">Cybersecurity Consultant & Mentor | Expert in Cybercrime Investigations, OSINT & Legal-Tech Integration</span>
                <span className="sm:hidden">Cybersecurity Expert | OSINT Specialist</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-heading">
                Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500">
                  Consultant & Mentor
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
                I help professionals and organizations investigate cybercrime, analyze digital evidence, and bridge the gap between cybersecurity operations and legal frameworks.
              </p>

              <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                With a solid background in digital forensics, OSINT, cyber law, and career coaching, I provide technical guidance, strategic consulting, and professional mentorship for individuals and law enforcement teams seeking to grow in the cybersecurity field.
              </p>

              {/* Terminal-style typing text */}
              <div className="bg-black/90 border border-red-500/50 rounded-lg p-4 md:p-6 font-mono text-red-400 text-sm md:text-base shadow-lg">
                &gt; {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Security Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8">
              <div className="text-center p-3 md:p-6 bg-black/50 rounded-lg border border-red-500/30 backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-red-400">PhD</div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">Cybercrime Law</div>
              </div>
              <div className="text-center p-3 md:p-6 bg-black/50 rounded-lg border border-gray-500/30 backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-white">OSINT</div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">Specialist</div>
              </div>
              <div className="text-center p-3 md:p-6 bg-black/50 rounded-lg border border-gray-500/30 backdrop-blur-sm">
                <div className="text-xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-gray-300 text-xs md:text-sm font-medium">Certifications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank')}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group text-sm md:text-base relative overflow-hidden border border-red-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                Schedule Consultation
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="border-2 border-red-500 text-red-400 px-6 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 text-sm md:text-base relative overflow-hidden group cyber-cursor shadow-lg"
                onClick={() => {
                  const section = document.getElementById('portfolio');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">View Projects</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
           <div className="relative z-10 bg-gradient-to-br from-black/80 to-gray-900/50 backdrop-blur-sm rounded-2xl p-10 border border-red-500/30 shadow-2xl">
              {/* Code/Terminal Display */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 font-mono ml-4">cybercrime_investigation.py</span>
                </div>

               <div className="bg-black/95 rounded-lg p-8 font-mono text-sm border border-gray-700/30">
                  <div className="text-red-400">
                   <span className="text-white">def</span>{' '}
                    <span className="text-yellow-400">investigate_cybercrime</span>()
                  </div>
                 <div className="text-gray-200 ml-4">
                   <span className="text-red-400">print</span>(
                   <span className="text-gray-300">"Analyzing digital evidence..."</span>)
                  </div>
                 <div className="text-gray-200 ml-4">
                   evidence = <span className="text-red-400">extract_digital_artifacts</span>()
                  </div>
                 <div className="text-gray-200 ml-4">
                   <span className="text-white">if</span> evidence.is_admissible():
                  </div>
                 <div className="text-gray-200 ml-8">
                   <span className="text-red-400">build_case</span>(evidence)
                  </div>
                  <div className="text-red-400 ml-4 animate-pulse"># Case solved ✓</div>
                </div>

                {/* Security Metrics */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                 <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 text-center">
                    <div className="text-red-400 font-bold text-lg">Active</div>
                   <div className="text-gray-300 text-xs font-medium">Investigation</div>
                  </div>
                 <div className="bg-gray-600/20 border border-gray-500/50 rounded-lg p-4 text-center">
                   <div className="text-white font-bold text-lg">OSINT</div>
                   <div className="text-gray-300 text-xs font-medium">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing effect */}
           <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-gray-500/20 rounded-2xl blur opacity-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
