import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, FileText, Brain, Search, Shield, MessageSquare, BarChart3, Clock, Globe, Gavel, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Brain, title: "AI Argument Generator", desc: "Generate structured arguments citing IPC, CPC, CrPC, BNS & Indian statutes" },
  { icon: Search, title: "Indian Case Law Search", desc: "Search Supreme Court, High Court & Tribunal judgments ranked by relevance" },
  { icon: FileText, title: "Document Drafting", desc: "Draft legal notices, writ petitions, FIRs & plaints as per Indian formats" },
  { icon: Shield, title: "Counter Arguments", desc: "AI-generated counterpoints with Indian precedents and statutory defenses" },
  { icon: BarChart3, title: "Argument Strength", desc: "Confidence scoring based on Indian judicial trends and case law" },
  { icon: MessageSquare, title: "Legal Chatbot", desc: "Ask questions on Indian law — IPC, Constitution, Contract Act & more" },
  { icon: Clock, title: "Case Timeline", desc: "Visual timeline of events with Indian court filing milestones" },
  { icon: Globe, title: "Multi-Language", desc: "Support for English, Hindi, and Telugu legal analysis" },
  { icon: Gavel, title: "Outcome Prediction", desc: "Predict outcomes using Indian Supreme Court & High Court trends" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">LexAI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="gradient-gold text-primary-foreground font-semibold shadow-gold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Legal Intelligence</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Legal Arguments,{" "}
              <span className="text-gold">Intelligently</span>{" "}
              Crafted
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Analyze Indian cases, generate arguments citing IPC, CPC & Constitution, find Supreme Court precedents, and draft legal documents — powered by AI for Indian legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-gold text-primary-foreground font-semibold shadow-gold px-8 h-12 text-base">
                  Start Analyzing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-12 px-8 text-base">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16"
          >
            {[
              ["10K+", "Indian Cases Analyzed"],
              ["98%", "Accuracy Rate"],
              ["50+", "Indian Legal Templates"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-gold">{num}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for <span className="text-gold">Indian Legal Research</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of AI tools designed for Indian advocates, law students, and legal researchers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-elevated"
              >
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join thousands of legal professionals using AI to build stronger cases.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="gradient-gold text-primary-foreground font-semibold shadow-gold px-10 h-12">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold">LexAI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 LexAI. AI-powered legal intelligence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
