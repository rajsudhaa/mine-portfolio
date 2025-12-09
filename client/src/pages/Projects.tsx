import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Neon Nexus",
    category: "Web Experience",
    description: "A 3D immersive rave venue explorer built with Three.js and WebGL.",
    tags: ["Three.js", "React", "WebGL"],
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cyber Dust",
    category: "Interactive Art",
    description: "Generative particle system reacting to audio input in real-time.",
    tags: ["Generative Art", "Audio API", "Canvas"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Void Commerce",
    category: "E-Commerce",
    description: "Dark mode first headless commerce storefront with glitch transitions.",
    tags: ["Next.js", "Shopify", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1976&auto=format&fit=crop"
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 50 
    } 
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-6xl md:text-8xl font-black mb-16 text-transparent text-stroke uppercase tracking-tighter">
          Selected <span className="text-acid">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-card/50 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-acid/50 transition-colors duration-500 rounded-none">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-acid/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-acid uppercase tracking-wider">{project.category}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold uppercase">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-white/20 hover:border-acid hover:text-acid transition-colors rounded-none font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
