import { useState } from "react";
import { motion } from "framer-motion";
import { Scale, Shield, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseData } from "@/pages/Dashboard";

interface Argument {
  id: string;
  title: string;
  type: "primary" | "supporting" | "counter";
  strength: number;
  description: string;
  legalBasis: string;
  precedents: string[];
  counterPoint?: string;
}

const mockArguments: Argument[] = [
  {
    id: "1",
    title: "Breach of Contractual Obligations",
    type: "primary",
    strength: 92,
    description: "The defendant's failure to deliver goods as specified in Clause 4.2 of the agreement constitutes a clear breach of contract under Section 39 of the Indian Contract Act, 1872.",
    legalBasis: "Section 39, Indian Contract Act, 1872 — When a party to a contract has refused to perform, or disabled himself from performing, his promise in its entirety, the promisee may put an end to the contract.",
    precedents: ["Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)", "Murlidhar Chiranjilal v. Harishchandra (1962)"],
    counterPoint: "The defendant may argue force majeure or impossibility of performance under Section 56, claiming unforeseen circumstances prevented delivery.",
  },
  {
    id: "2",
    title: "Right to Claim Damages",
    type: "primary",
    strength: 85,
    description: "Under Section 73 of the Indian Contract Act, the plaintiff is entitled to compensation for loss or damage caused by the breach, including consequential losses suffered.",
    legalBasis: "Section 73, Indian Contract Act, 1872 — Compensation for loss or damage caused by breach of contract.",
    precedents: ["Hadley v. Baxendale (1854)", "ONGC v. Saw Pipes Ltd. (2003)"],
    counterPoint: "The defendant may argue that the claimed damages are speculative or remote and do not fall within the reasonable contemplation of the parties.",
  },
  {
    id: "3",
    title: "Violation of Good Faith",
    type: "supporting",
    strength: 68,
    description: "The defendant's conduct demonstrates a pattern of bad faith, including delayed communications and refusal to negotiate alternative arrangements.",
    legalBasis: "General principles of contractual good faith as recognized in Central Inland Water Transport Corp. v. Brojo Nath Ganguly (1986).",
    precedents: ["Central Inland Water v. Brojo Nath Ganguly (1986)"],
  },
  {
    id: "4",
    title: "Mitigation of Damages Defense",
    type: "counter",
    strength: 55,
    description: "The defendant may argue that the plaintiff failed to mitigate losses by not seeking alternative suppliers in a timely manner.",
    legalBasis: "Doctrine of Mitigation — The injured party has a duty to take reasonable steps to minimize losses.",
    precedents: ["British Westinghouse v. Underground Electric Railways (1912)"],
  },
];

const getStrengthColor = (s: number) => s >= 80 ? "text-success" : s >= 60 ? "text-warning" : "text-destructive";
const getStrengthBg = (s: number) => s >= 80 ? "bg-success" : s >= 60 ? "bg-warning" : "bg-destructive";
const getTypeBadge = (type: string) => {
  switch (type) {
    case "primary": return "gradient-gold text-primary-foreground";
    case "supporting": return "bg-info/20 text-info";
    case "counter": return "bg-destructive/20 text-destructive";
    default: return "";
  }
};

export const ArgumentsTab = ({ caseData }: { caseData: CaseData }) => {
  const [expanded, setExpanded] = useState<string | null>("1");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-xl font-semibold">Generated Arguments</h2>
        <Button variant="outline" className="border-border text-foreground gap-2">
          <Shield className="h-4 w-4" /> Generate Counter Arguments
        </Button>
      </div>

      {mockArguments.map((arg, i) => (
        <motion.div
          key={arg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-card border border-border rounded-xl overflow-hidden shadow-card"
        >
          <button
            onClick={() => setExpanded(expanded === arg.id ? null : arg.id)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className={`font-display text-2xl font-bold ${getStrengthColor(arg.strength)}`}>
                  {arg.strength}%
                </span>
                <div className="w-12 h-1.5 rounded-full bg-muted mt-1 overflow-hidden">
                  <div className={`h-full rounded-full ${getStrengthBg(arg.strength)}`} style={{ width: `${arg.strength}%` }} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getTypeBadge(arg.type)}`}>
                    {arg.type}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{arg.title}</h3>
              </div>
            </div>
            {expanded === arg.id ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
          </button>

          {expanded === arg.id && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              className="border-t border-border p-5 space-y-4"
            >
              <p className="text-sm text-secondary-foreground leading-relaxed">{arg.description}</p>

              <div className="bg-muted rounded-lg p-4">
                <p className="text-xs font-medium text-muted-foreground mb-1">Legal Basis</p>
                <p className="text-sm text-foreground">{arg.legalBasis}</p>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Relevant Precedents</p>
                <div className="flex flex-wrap gap-2">
                  {arg.precedents.map((p) => (
                    <span key={p} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {arg.counterPoint && (
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <p className="text-xs font-medium text-destructive mb-1 flex items-center gap-1">
                    <Shield className="h-3 w-3" /> Potential Counter Argument
                  </p>
                  <p className="text-sm text-secondary-foreground">{arg.counterPoint}</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};
