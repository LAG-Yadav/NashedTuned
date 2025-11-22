import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isStandalone = true }) => {
  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-[#0f172a] relative overflow-hidden min-h-screen flex items-center border-t border-slate-800`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#586e45]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-2 uppercase italic">Book Your Service</h1>
            <p className="text-slate-400">
              Ready to give your vehicle the care it deserves? Use the form below or give us a call.
            </p>
          </div>

          <form className="glass-panel p-8 sm:p-12 rounded-sm border-t-4 border-t-red-600 shadow-2xl relative">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-white/5 border-l-[60px] border-l-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="082 123 4567"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="service" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Service Type</label>
              <select
                id="service"
                className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none"
              >
                <option>General Service</option>
                <option>Diagnostics</option>
                <option>Performance Tuning (Honda)</option>
                <option>Brake Repair</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-xs font-bold text-[#586e45] uppercase tracking-wider">Vehicle Details / Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-900/80 border border-slate-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                placeholder="Make, Model, Year, and issues you are experiencing..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 uppercase italic tracking-wide transition-all transform hover:translate-y-[-2px] shadow-lg shadow-red-900/30 skew-x-[-5deg]"
            >
              <span className="block skew-x-[5deg]">Request Appointment</span>
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;