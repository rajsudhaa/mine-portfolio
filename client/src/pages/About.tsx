import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Three.js", "WebGL", "GLSL", "Node.js", 
  "Tailwind CSS", "Framer Motion", "PostgreSQL", "Design Systems"
];

const education = [
  {
    year: "2023",
    degree: "Master of Interaction Design",
    school: "Digital Arts Academy"
  },
  {
    year: "2021",
    degree: "B.S. Computer Science",
    school: "Tech University"
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter">
          About <span className="text-stroke">Me</span>
        </h2>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div className="space-y-8">
            <div className="aspect-square bg-muted relative overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-acid mix-blend-multiply opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4 text-acid">Bio</h3>
              <p className="text-xl font-light leading-relaxed text-muted-foreground">
                I am a creative technologist obsessed with the space between code and canvas. 
                I build digital experiences that disrupt the mundane. My work is fueled by 
                late-night raves, brutalist architecture, and the infinite possibilities of the web.
              </p>
            </div>

            <Separator className="bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold uppercase mb-6 text-acid">Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-white/10 hover:border-acid hover:text-acid hover:bg-acid/10 transition-all cursor-crosshair font-mono text-sm uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Separator className="bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold uppercase mb-6 text-acid">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-xl font-bold group-hover:text-acid transition-colors">{edu.degree}</h4>
                      <span className="font-mono text-sm text-muted-foreground">{edu.year}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
