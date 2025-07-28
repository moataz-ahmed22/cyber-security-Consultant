import { FC } from 'react';
import { Shield, Search, Lock, Monitor, AlertTriangle, FileCheck, Users, BookOpen, PenTool } from 'lucide-react';
import { FloatingIcons } from './CyberGraphics';

const Services: FC = () => {
  const services = [
    {
      icon: Users,
      title: "Cybersecurity Career Guidance & Mentorship",
      description: "End-to-end support for professionals entering cybersecurity fields with personalized assessment and custom learning roadmaps.",
      features: ["Path Selection & Specialization", "Custom Learning Roadmap", "Certification & Job Preparation", "Academic Research Support"],
      color: "red"
    },
    {
      icon: BookOpen,
      title: "Cybersecurity Awareness Training",
      description: "Interactive workshops for organizations and educational institutions covering fundamental cyber hygiene and threat-specific training.",
      features: ["Fundamental Cyber Hygiene", "Digital Privacy Protection", "Threat-Specific Training", "Legal Cyber Awareness"],
      color: "green"
    },
    {
      icon: PenTool,
      title: "Legal & Technical Content Creation",
      description: "High-quality, accessible content for diverse platforms including technical writing, visual content, and content review services.",
      features: ["Articles & Whitepapers", "Script Development", "Visual & Digital Content", "Content Review Services"],
      color: "blue"
    },
    {
      icon: Search,
      title: "OSINT & Threat Monitoring",
      description: "Advanced open-source intelligence gathering and threat monitoring with custom tool development and Arabic-language specialization.",
      features: ["Cybercriminal Activity Tracking", "Arabic-Language Monitoring", "Python Automation Tools", "Threat Intelligence"],
      color: "red"
    },
    {
      icon: Shield,
      title: "Digital Forensics & Investigation",
      description: "Comprehensive digital forensics services including evidence analysis, breach investigations, and court-admissible reporting.",
      features: ["Digital Evidence Analysis", "Breach Investigations", "Court-Admissible Reports", "Chain of Custody"],
      color: "green"
    },
    {
      icon: FileCheck,
      title: "Legal-Technical Consulting",
      description: "Bridge legal frameworks with technological solutions for incident response, compliance, and cybercrime law applications.",
      features: ["Incident Response Consulting", "Compliance Requirements", "Digital Evidence Standards", "Legal Framework Integration"],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'text-green-400',
          border: 'border-green-500/20 hover:border-green-500/40',
          bg: 'bg-green-500/10',
          accent: 'text-green-400'
        };
      case 'blue':
        return {
          icon: 'text-blue-400',
          border: 'border-blue-500/20 hover:border-blue-500/40',
          bg: 'bg-blue-500/10',
          accent: 'text-blue-400'
        };
      case 'red':
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20 hover:border-red-500/40',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
      default:
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20 hover:border-red-500/40',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <FloatingIcons />
      {/* Animated Glowing Circles */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 md:w-56 md:h-56 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/5 w-24 h-24 md:w-40 md:h-40 bg-gray-400 opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-20 h-20 md:w-32 md:h-32 bg-red-400 opacity-15 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            Professional <span className="text-red-500">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Comprehensive cybersecurity services spanning investigation, education, and consulting 
            to bridge legal frameworks with technological solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`bg-black/50 p-6 md:p-8 lg:p-10 rounded-xl border ${colors.border} transition-all duration-300 hover:transform hover:scale-105 group backdrop-blur-sm cyber-cursor hover-glow relative overflow-hidden`}
              >
                {/* Hover scan line effect */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${colors.icon}`} />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-heading">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 md:w-2 md:h-2 ${colors.bg} rounded-full mr-2 md:mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-black/70 to-gray-900/50 rounded-2xl p-6 md:p-8 lg:p-12 border border-red-500/30 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 font-heading">
              Need Specialized Cybercrime Investigation?
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 max-w-2xl mx-auto">
              Every case has unique challenges. Let's discuss your specific investigation needs 
              and develop a customized approach combining legal expertise with technical solutions.
            </p>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank')}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base relative overflow-hidden group border border-red-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;