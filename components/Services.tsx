import React from 'react';
import { Wrench, Gauge, Cpu, CheckCircle2, Car, Clock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ServicesProps {
  isStandalone?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isStandalone = true }) => {
  const features = [
    {
      icon: Wrench,
      title: "General Repairs",
      desc: "Comprehensive bumper-to-bumper vehicle service and maintenance for all vehicle makes, with a specialty in Honda engineering."
    },
    {
      icon: Cpu,
      title: "Advanced Diagnostics",
      desc: "Using the latest OBD-II and proprietary software to accurately identify and fix issues before they become major problems."
    },
    {
      icon: Car,
      title: "Performance Tuning",
      desc: "Unlock your engine's true potential. Custom mapping, airflow optimization, and performance part installation."
    },
    {
      icon: Clock,
      title: "Online Booking",
      desc: "Convenient scheduling system to help you plan your next service without the hassle of phone tag."
    },
    {
      icon: CheckCircle2,
      title: "MIWA Accredited",
      desc: "We are held to the highest standards of the Retail Motor Industry, ensuring your warranty remains intact."
    },
    {
      icon: Gauge,
      title: "Transparency",
      desc: "We approach every repair with honesty. No hidden costs, no surprise repairs. Just honest mechanical work."
    }
  ];

  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 min-h-screen bg-[#0f172a] relative overflow-hidden`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#586e45]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-[#586e45] font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 mt-2 italic uppercase">World Class Standards</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto skew-x-[-20deg] mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From routine maintenance to high-performance builds, our accreditation certifies that we’re highly skilled on all levels.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="h-full">
              <div className="glass-panel p-8 rounded-sm h-full border-t-2 border-t-transparent hover:border-t-red-600 transition-all duration-300 group relative overflow-hidden">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-[#1e293b] border border-[#586e45]/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7 text-[#586e45] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase italic">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                    </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-20">
            <div className="glass-panel p-8 md:p-12 rounded-sm border-l-4 border-l-[#586e45] relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase italic">Ready to tune your ride?</h3>
                        <p className="text-slate-400">Schedule your appointment today and experience the Nashed difference.</p>
                    </div>
                    <a href="/#/contact" className="px-8 py-3 bg-white text-black font-bold uppercase italic hover:bg-slate-200 transition-colors skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Book Appointment</span>
                    </a>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Services;