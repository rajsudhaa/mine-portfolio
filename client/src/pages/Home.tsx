import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
            className="text-[12vw] leading-[0.85] font-black uppercase text-white tracking-tighter mix-blend-difference"
          >
            Creative
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.4 }}
            className="text-[12vw] leading-[0.85] font-black uppercase text-transparent text-stroke hover:text-acid transition-colors duration-500 cursor-none"
          >
            Developer
          </motion.h1>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <img
              src="/mypic.jpg"
              alt="Profile"
              className="w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl shadow-acid/30 object-cover"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/20 pt-8">
          <div className="max-w-md">
            <p className="text-xl font-light text-muted-foreground">
              Building immersive digital experiences at the intersection of <span className="text-acid font-mono-glitch">design</span> and <span className="text-neon-purple font-mono-glitch">technology</span>.
            </p>
          </div>

          <Link href="/projects">
            <a 
              className="group flex items-center gap-4 text-2xl font-bold uppercase hover:text-acid transition-colors duration-300"
              data-testid="cta-view-work"
            >
              View Work
              <div className="bg-white text-black p-3 rounded-full group-hover:bg-acid transition-colors duration-300">
                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
