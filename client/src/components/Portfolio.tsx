import { FC } from 'react';
import { ExternalLink, Shield, Lock, AlertCircle, Search, Code, BookOpen } from 'lucide-react';

const Portfolio: FC = () => {
  const projects = [
    {
      title: "Leakguard Analyst",
      category: "Python OSINT Tool",
      description: "Advanced Python tool for monitoring Telegram channels for data leaks with entity relationship mapping and IP geolocation capabilities.",
      technologies: ["Python", "Telegram API", "IP Geolocation", "Pattern Recognition"],
      impact: "Automated threat monitoring",
      icon: Shield,
      color: "red"
    },
    {
      title: "STUN Packet Extractor",
      category: "Network Forensic Tool",
      description: "Specialized tool for analyzing PCAP files for NAT traversal data with IP geolocation visualization and traffic pattern analysis.",
      technologies: ["Network Analysis", "PCAP Processing", "Traffic Analysis", "Visualization"],
      impact: "Enhanced network forensics",
      icon: Search,
      color: "green"
    },
    {
      title: "PhD Research - Cybercrime Law",
      category: "Academic Research",
      description: "Research on admissibility standards for digital evidence and investigative frameworks for cyber espionage cases.",
      technologies: ["Legal Research", "Digital Evidence", "Cyber Espionage", "Legal Frameworks"],
      impact: "Bridging law and technology",
      icon: BookOpen,
      color: "blue"
    },
    {
      title: "OSINT Threat Monitoring",
      category: "Freelance Investigation",
      description: "Independent investigations tracking cybercriminal activity with specialization in Arabic-language threat monitoring.",
      technologies: ["OSINT", "Threat Intelligence", "Arabic Language", "Cybercrime Tracking"],
      impact: "Active threat detection",
      icon: AlertCircle,
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'text-green-400',
          border: 'border-green-500/20',
          bg: 'bg-green-500/10',
          accent: 'text-green-400'
        };
      case 'blue':
        return {
          icon: 'text-blue-400',
          border: 'border-blue-500/20',
          bg: 'bg-blue-500/10',
          accent: 'text-blue-400'
        };
      case 'red':
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
      default:
        return {
          icon: 'text-red-400',
          border: 'border-red-500/20',
          bg: 'bg-red-500/10',
          accent: 'text-red-400'
        };
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 font-heading">
            Technical <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium">
            Custom tools and research projects in digital forensics, OSINT, and cybercrime investigation 
            combining technical expertise with legal knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`bg-black/50 rounded-xl border ${colors.border} p-10 hover:border-opacity-60 transition-all duration-300 group hover:transform hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <project.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-300 hover:text-white transition-colors cursor-pointer" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className={`text-sm ${colors.accent} font-medium`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 font-heading">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-200 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white font-heading">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs rounded-full border border-gray-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-4 border-t border-gray-600`}>
                    <div className={`inline-flex items-center px-3 py-1 ${colors.bg} rounded-full`}>
                      <span className={`text-sm font-medium ${colors.accent}`}>
                        Impact: {project.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12 font-heading">
            Professional Experience
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Currently pursuing PhD research in Cybercrime Law & Digital Evidence, focusing on admissibility standards and investigative frameworks.",
                author: "PhD Researcher",
                company: "Institute of Arab Research and Studies"
              },
              {
                quote: "Teaching practical digital forensics techniques and developing training modules combining technical skills with legal awareness.",
                author: "Cybersecurity Instructor",
                company: "Inceptum Egypt"
              },
              {
                quote: "Conducting independent investigations tracking cybercriminal activity with specialization in Arabic-language threat monitoring.",
                author: "OSINT & Threat Monitoring Analyst",
                company: "Indeed · Freelance"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/40 p-6 rounded-xl border border-gray-600/30"
              >
                <p className="text-gray-200 italic mb-4">
                  {testimonial.quote}
                </p>
                <div className="text-sm">
                  <div className="text-white font-medium font-heading">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;