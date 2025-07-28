import { FC } from 'react';
import { Shield, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-red-950/20 border-t border-red-500/20 relative overflow-hidden">
      {/* Binary Background Image */}
      <img src="/binary-bg.jpg" alt="Binary Background" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-mono mb-2">
                <span className="text-red-400">Moataz</span> <span className="text-green-400">Younes</span>
              </h3>
              <p className="text-red-300 text-sm font-mono">Your Mentor of Cyber Security</p>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Investigating digital crimes and bridging legal frameworks with technological solutions 
              through expert cybercrime investigation, OSINT research, and digital forensics.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/moataz-younes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="http://www.linkedin.com/in/moataz-younes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://medium.com/@moataz.yones244" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cybercrime Investigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Digital Forensics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">OSINT Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cybersecurity Mentorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Awareness Training</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-red-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Moataz Younes. All rights reserved. Your Mentor of Cyber Security.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Professional Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;