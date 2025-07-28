import { FC } from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { CyberBackground } from './CyberGraphics';

const About: FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <CyberBackground />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            About <span className="text-red-500">Moataz</span> <span className="text-white">Yones</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Cybercrime Investigator and OSINT Specialist with extensive experience bridging 
            legal frameworks and technological solutions in digital forensics and threat monitoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-heading">
              Investigating Digital Crimes Since 2020
            </h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium">
              As a Cybercrime Investigator and OSINT Specialist, I focus on leading digital investigations 
              and forensic evidence analysis for complex cybercrimes. My work involves developing custom 
              tools for OSINT, threat monitoring, and digital forensics while providing legal-technical 
              consulting to organizations on incident response and compliance.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Currently pursuing a PhD in Cybercrime Law & Digital Evidence, I bridge the gap between 
              legal requirements and technical solutions. I also mentor professionals entering 
              cybersecurity, OSINT, and digital forensics fields.
            </p>

            {/* Core Focus Areas */}
            <div className="space-y-4">
              <h4 className="text-base md:text-lg font-semibold text-red-500 font-heading">Core Focus Areas:</h4>
              <div className="flex flex-wrap gap-2 md:gap-4">
                <span className="px-3 py-1 md:px-4 md:py-2 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-xs md:text-sm font-medium">Digital Forensics</span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-600/20 border border-gray-500/50 rounded-full text-gray-300 text-xs md:text-sm font-medium">OSINT & Threat Monitoring</span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-red-600/20 border border-red-500/50 rounded-full text-red-400 text-xs md:text-sm font-medium">Cybercrime Investigation</span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-600/20 border border-gray-500/50 rounded-full text-gray-300 text-xs md:text-sm font-medium">Legal-Tech Integration</span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-600/20 border border-gray-500/50 rounded-full text-gray-300 text-xs md:text-sm font-medium">Cybersecurity Mentorship</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-black/50 p-4 md:p-6 lg:p-8 rounded-xl border border-red-500/30 hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm group cyber-cursor glow-red hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-red-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <div className="text-2xl md:text-3xl font-bold text-white relative z-10 font-heading">PhD</div>
              <div className="text-sm md:text-base text-gray-300 relative z-10 font-medium">Cybercrime Law Research</div>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border border-gray-500/30 hover:border-gray-500/60 transition-colors">
              <Award className="w-12 h-12 text-white mb-4" />
              <div className="text-3xl font-bold text-white font-heading">15+</div>
              <div className="text-gray-300 font-medium">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;