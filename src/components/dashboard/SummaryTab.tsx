import { motion } from "framer-motion";
import { FileText, Users, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import type { CaseData } from "@/pages/Dashboard";

interface SummaryTabProps {
  caseData: CaseData;
}

const metrics = [
  { label: "Argument Strength", value: "78%", icon: TrendingUp, color: "text-success" },
  { label: "Key Issues Found", value: "5", icon: AlertTriangle, color: "text-warning" },
  { label: "Relevant Precedents", value: "12", icon: FileText, color: "text-info" },
  { label: "Favorable Outcome", value: "72%", icon: CheckCircle, color: "text-success" },
];

const keyFindings = [
  "The case involves breach of contractual obligations under Section 73 of the Indian Contract Act, 1872.",
  "Prima facie evidence suggests violation under Section 420 IPC (now Section 318 BNS) for cheating.",
  "Multiple precedents from Supreme Court of India and Bombay High Court support the plaintiff's claim.",
  "The limitation period under the Limitation Act, 1963 (Article 113) is within bounds — filed within 3 years.",
  "Documentary evidence (Exhibit A-D) and affidavits under Order XIX CPC establish the contractual relationship.",
  "The defendant may invoke Section 56 of the Indian Contract Act (doctrine of frustration) as a defense.",
];

const extractedEntities = [
  { type: "Plaintiff / Vaddi", value: "Sharma Industries Pvt. Ltd." },
  { type: "Defendant / Prativadi", value: "Gupta Trading Co." },
  { type: "Court", value: "Bombay High Court (Original Side)" },
  { type: "Case No.", value: "Commercial Suit No. 234/2026" },
  { type: "Filing Date", value: "15 March 2026" },
  { type: "Cause of Action", value: "Breach of Contract & Cheating" },
  { type: "Statutes", value: "Indian Contract Act, 1872; IPC §420; CPC Order VII" },
  { type: "Relief Sought", value: "Damages of ₹50,00,000 with 12% interest" },
];

export const SummaryTab = ({ caseData }: SummaryTabProps) => {
  return (
    <div className="space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 shadow-card"
          >
            <div className="flex items-center justify-between mb-3">
              <m.icon className={`h-5 w-5 ${m.color}`} />
              <span className={`font-display text-2xl font-bold ${m.color}`}>{m.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-6 shadow-card"
        >
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Key Findings
          </h3>
          <ul className="space-y-3">
            {keyFindings.map((finding, i) => (
              <li key={i} className="flex gap-3 text-sm text-secondary-foreground leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">•</span>
                {finding}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Extracted Entities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6 shadow-card"
        >
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" /> Extracted Entities
          </h3>
          <div className="space-y-3">
            {extractedEntities.map((entity) => (
              <div key={entity.type} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{entity.type}</span>
                <span className="text-sm font-medium text-foreground">{entity.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-card border border-border rounded-xl p-6 shadow-card"
      >
        <h3 className="font-display text-lg font-semibold mb-4">AI Case Summary</h3>
        <div className="text-sm text-secondary-foreground leading-relaxed space-y-3">
          <p>
            This case pertains to a breach of contract dispute between Sharma Industries Pvt. Ltd. (Plaintiff) and
            Gupta Trading Co. (Defendant), filed before the Bombay High Court (Original Side) as a Commercial Suit
            under the Commercial Courts Act, 2015. The plaintiff alleges non-delivery of goods under a supply
            agreement dated 10 January 2025, invoking Sections 39, 73, and 74 of the Indian Contract Act, 1872.
          </p>
          <p>
            The key legal issues are: (i) whether the defendant's failure constitutes a fundamental breach under
            Section 39, (ii) whether damages under Section 73 extend to consequential losses per the rule in
            <em> Hadley v. Baxendale</em> as adopted by the Supreme Court in <em>ONGC v. Saw Pipes Ltd. (2003)</em>,
            and (iii) whether a parallel criminal complaint under Section 420 IPC / 318 BNS is maintainable.
          </p>
          <p>
            Based on analysis of 12 Supreme Court and High Court precedents, including <em>Satyabrata Ghose v.
            Mugneeram Bangur (1954 SCR 310)</em> and <em>Indian Oil Corp. v. Amritsar Gas Service (1991)</em>,
            the AI assessment indicates a 72% probability of a favorable outcome. The plaintiff's case is
            strengthened by compliance with the limitation period under Article 113 of the Limitation Act, 1963.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
