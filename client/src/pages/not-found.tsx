import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 bg-card/50 border-white/10 backdrop-blur-md rounded-none">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 text-acid">
            <AlertCircle className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-white uppercase tracking-tighter">404 // Lost in Void</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground font-mono">
            The coordinates you requested do not exist in this dimension.
          </p>

          <div className="mt-8">
            <Link href="/">
              <a className="text-acid hover:underline font-mono uppercase text-sm tracking-widest hover:bg-acid hover:text-black transition-colors px-2 py-1">
                [ Return to Base ]
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
