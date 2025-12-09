import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/">
        <a className="text-2xl font-bold tracking-tighter hover:text-acid transition-colors duration-300 font-mono-glitch" data-testid="nav-logo">
          RAVE<span className="text-acid">.DEV</span>
        </a>
      </Link>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a 
                className={cn(
                  "text-sm uppercase tracking-widest font-bold relative group overflow-hidden block",
                  location === link.href ? "text-acid" : "text-white hover:text-acid"
                )}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-acid">
                  {link.label}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
