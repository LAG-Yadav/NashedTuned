import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface GalleryProps {
  isStandalone?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isStandalone = true }) => {
  const images = [
    {
        // Blue Engine Bay (Simulated match)
        src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
        cat: "VTEC Turbo",
        desc: "Precision Turbo Setup"
    },
    {
        // Pink/Red Valve Cover (Simulated match)
        src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1000&auto=format&fit=crop",
        cat: "K20 Build",
        desc: "Performance Head"
    },
    {
        // Grey Type R Rear (Simulated match)
        src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
        cat: "Type R",
        desc: "Chassis Setup"
    },
    {
        // Red S2000 (Simulated match)
        src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
        cat: "S2000",
        desc: "Maintenance"
    },
    {
        // Workshop Lineup
        src: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1000&auto=format&fit=crop",
        cat: "Workshop",
        desc: "The Fleet"
    },
    {
        // Grey Civic Front
        src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
        cat: "Civic",
        desc: "Detailing"
    },
  ];

  return (
    <section className={`${isStandalone ? 'pt-32' : 'pt-20'} pb-24 bg-[#0f172a] min-h-screen border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-[#586e45] font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase italic">Our <span className="text-red-600">Work</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto">A showcase of our workmanship, facility, and the beautiful machines we have the privilege to work on.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <RevealOnScroll key={idx} delay={idx * 50}>
              {/* Themed Border Container */}
              <div className="group relative p-1 bg-[#1e293b] clip-path-slant">
                 {/* Technical Border Corners */}
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#586e45] z-20"></div>
                 <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#586e45] z-20"></div>
                 <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#586e45] z-20"></div>
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#586e45] z-20"></div>

                <div className="relative overflow-hidden rounded-sm aspect-video cursor-pointer bg-slate-900">
                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 bg-[#586e45]/90 backdrop-blur px-3 py-1 z-20 skew-x-[-10deg] border-l-2 border-white">
                        <span className="block skew-x-[10deg] text-xs font-bold text-white uppercase tracking-wider">{img.cat}</span>
                    </div>

                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
                        <h3 className="text-white font-bold text-xl uppercase italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.desc}</h3>
                        <div className="w-12 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                    <img
                    src={img.src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                    />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;