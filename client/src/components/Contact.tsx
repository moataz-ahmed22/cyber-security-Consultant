import { useState, FC } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Contact Form: ${formData.service || 'General Inquiry'}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service Needed: ${formData.service || 'Not specified'}

Message:
${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:moataz.yones244@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-red-950/20 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="text-red-400">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your cybercrime investigation or digital forensics needs? 
            Let's explore how I can help with your case or cybersecurity challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Available for Consultation
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need cybercrime investigation, digital forensics analysis, 
                OSINT research, or cybersecurity mentorship, I'm here to provide expert 
                consultation bridging legal frameworks with technical solutions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+44 7366 187685</p>
                  <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">moataz.yones244@gmail.com</p>
                  <p className="text-sm text-gray-400">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Available Worldwide</p>
                  <p className="text-sm text-gray-400">Arabic & English proficiency</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 bg-red-500/10 border border-red-500/20 text-red-400 py-4 rounded-lg hover:bg-red-500/20 transition-all duration-300 group relative overflow-hidden cyber-cursor glow-red"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Schedule Investigation Consultation</span>
                </a>
                <button className="w-full flex items-center justify-center space-x-3 bg-green-500/10 border border-green-500/20 text-green-400 py-4 rounded-lg hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>Emergency Investigation Support</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 p-10 rounded-xl border border-red-500/20">
            <h3 className="text-xl font-bold text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="cybercrime-investigation">Cybercrime Investigation</option>
                  <option value="digital-forensics">Digital Forensics</option>
                  <option value="osint-research">OSINT Research</option>
                  <option value="mentorship">Cybersecurity Mentorship</option>
                  <option value="training">Awareness Training</option>
                  <option value="content-creation">Content Creation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your investigation needs, cybersecurity challenges, or mentorship goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-green-500 text-white py-4 rounded-lg font-semibold hover:from-red-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;