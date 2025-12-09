import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "I'll get back to you as soon as the bass drops.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 flex items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="max-w-2xl mx-auto w-full"
      >
        <div className="mb-12 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter">
            Get In <span className="text-acid">Touch</span>
          </h2>
          <p className="text-muted-foreground text-xl font-light">
            Available for freelance work and collaborations.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-acid/20 blur-[100px] pointer-events-none" />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase font-bold tracking-wider text-xs text-muted-foreground">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="ENTER YOUR NAME" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-acid h-12 text-lg font-mono placeholder:text-white/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase font-bold tracking-wider text-xs text-muted-foreground">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ENTER YOUR EMAIL" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-acid h-12 text-lg font-mono placeholder:text-white/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase font-bold tracking-wider text-xs text-muted-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="TELL ME ABOUT YOUR PROJECT" {...field} className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-acid min-h-[100px] text-lg font-mono resize-none placeholder:text-white/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-white text-black hover:bg-acid hover:text-black rounded-none h-14 text-lg font-bold uppercase tracking-wider transition-all duration-300">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
}
