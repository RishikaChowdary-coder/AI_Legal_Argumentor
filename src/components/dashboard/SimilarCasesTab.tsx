import { motion } from "framer-motion";
import { ExternalLink, Scale } from "lucide-react";

const similarCases = [
  {
    title: "Satyabrata Ghose v. Mugneeram Bangur & Co.",
    year: "1954",
    court: "Supreme Court of India",
    similarity: 89,
    principles: ["Frustration of contract", "Impossibility of performance", "Section 56 interpretation"],
    summary: "Landmark case on doctrine of frustration. Court held that a contract is not frustrated merely because performance becomes more onerous.",
  },
  {
    title: "ONGC v. Saw Pipes Ltd.",
    year: "2003",
    court: "Supreme Court of India",
    similarity: 82,
    principles: ["Liquidated damages", "Section 73 & 74", "Penalty vs genuine pre-estimate"],
    summary: "Clarified the law on liquidated damages under Indian Contract Act, holding that the party can claim reasonable compensation.",
  },
  {
    title: "Hadley v. Baxendale",
    year: "1854",
    court: "Court of Exchequer, England",
    similarity: 76,
    principles: ["Remoteness of damages", "Reasonable contemplation", "Consequential loss"],
    summary: "Established the foreseeability test for contract damages — recoverable damages must be reasonably contemplated.",
  },
  {
    title: "Indian Oil Corp. v. Amritsar Gas Service",
    year: "1991",
    court: "Supreme Court of India",
    similarity: 71,
    principles: ["Distributorship agreement", "Wrongful termination", "Damages for breach"],
    summary: "Held that wrongful termination of a distributorship agreement amounts to breach of contract entitling damages.",
  },
  {
    title: "Murlidhar Chiranjilal v. Harishchandra",
    year: "1962",
    court: "Supreme Court of India",
    similarity: 65,
    principles: ["Anticipatory breach", "Section 39", "Right of rescission"],
    summary: "Discussed the rights of the aggrieved party in cases of anticipatory breach of contract.",
  },
];

const getSimilarityColor = (s: number) => s >= 80 ? "text-success" : s >= 60 ? "text-warning" : "text-info";

export const SimilarCasesTab = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-semibold mb-2">Similar Cases Found</h2>
      {similarCases.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="h-4 w-4 text-primary shrink-0" />
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 cursor-pointer hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">{c.court} • {c.year}</p>
              <p className="text-sm text-secondary-foreground mb-3 leading-relaxed">{c.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.principles.map((p) => (
                  <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className={`font-display text-3xl font-bold ${getSimilarityColor(c.similarity)}`}>
                {c.similarity}%
              </span>
              <p className="text-xs text-muted-foreground mt-1">similarity</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
