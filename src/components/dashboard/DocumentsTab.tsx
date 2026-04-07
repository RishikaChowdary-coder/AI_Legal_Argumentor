import { motion } from "framer-motion";
import { FileText, Download, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseData } from "@/pages/Dashboard";

const documents = [
  {
    title: "Legal Notice under Section 80 CPC",
    type: "Legal Notice",
    desc: "Formal notice to the defendant demanding performance or compensation within 15 days, as mandated before filing a civil suit against the government.",
    format: "PDF / DOCX",
  },
  {
    title: "Plaint (Civil Suit) — Order VII CPC",
    type: "Plaint",
    desc: "Draft plaint for filing in Bombay High Court with cause of action, reliefs, court fee details, and verification as per Order VI & VII CPC.",
    format: "PDF / DOCX",
  },
  {
    title: "Writ Petition under Article 226/32",
    type: "Writ Petition",
    desc: "Draft writ petition for constitutional remedies — mandamus, certiorari, habeas corpus, prohibition, or quo warranto.",
    format: "PDF / DOCX",
  },
  {
    title: "Vakalatnama & Memo of Appearance",
    type: "Vakalatnama",
    desc: "Power of attorney for advocate to represent the client, along with memo of appearance for court records.",
    format: "PDF",
  },
  {
    title: "Case Summary & Arguments Brief",
    type: "Brief",
    desc: "Comprehensive case analysis citing Indian statutes, Supreme Court judgments, and argument strength analysis.",
    format: "PDF / DOCX",
  },
  {
    title: "FIR Draft / Criminal Complaint",
    type: "Complaint",
    desc: "Draft complaint under Section 154 CrPC (now Section 173 BNSS) or private complaint under Section 200 CrPC.",
    format: "PDF / DOCX",
  },
];

export const DocumentsTab = ({ caseData }: { caseData: CaseData }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-xl font-semibold">Generated Documents</h2>
        <Button variant="outline" className="border-border text-foreground gap-2">
          <Download className="h-4 w-4" /> Download All
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {documents.map((doc, i) => (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-5 shadow-card hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm mb-1 truncate">{doc.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {doc.type}
                </span>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{doc.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <File className="h-3 w-3" /> {doc.format}
                  </span>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary h-8 gap-1">
                    <Download className="h-3.5 w-3.5" /> Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
