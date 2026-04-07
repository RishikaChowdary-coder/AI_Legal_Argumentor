import { motion } from "framer-motion";

const events = [
  { date: "10 Jan 2025", title: "Contract Executed", desc: "Supply agreement executed between Sharma Industries Pvt. Ltd. and Gupta Trading Co. on stamp paper as per Indian Stamp Act.", type: "milestone" },
  { date: "15 Mar 2025", title: "First Delivery Due", desc: "Defendant failed to deliver first batch of goods as per Clause 4.2 of the agreement.", type: "issue" },
  { date: "20 Mar 2025", title: "Written Reminder via Registered Post", desc: "Plaintiff sent written reminder through registered AD post requesting immediate delivery.", type: "action" },
  { date: "5 Apr 2025", title: "Partial Delivery (30%)", desc: "Defendant delivered only 30% of contracted goods, citing supply chain issues. Quality inspection pending.", type: "milestone" },
  { date: "10 May 2025", title: "Legal Notice u/s 80 CPC", desc: "Plaintiff's advocate issued legal notice under Section 80 CPC demanding full performance or ₹50,00,000 compensation within 15 days.", type: "action" },
  { date: "1 Jun 2025", title: "No Response to Notice", desc: "Defendant failed to respond within the statutory 2-month period under Section 80 CPC.", type: "issue" },
  { date: "15 Aug 2025", title: "Police Complaint Filed", desc: "Criminal complaint filed at local police station under Section 420 IPC (cheating) and Section 406 IPC (criminal breach of trust).", type: "action" },
  { date: "10 Jan 2026", title: "Mediation Attempted", desc: "Pre-litigation mediation under Section 12A Commercial Courts Act attempted; defendant did not appear.", type: "issue" },
  { date: "15 Mar 2026", title: "Suit Filed in Bombay HC", desc: "Commercial Suit No. 234/2026 filed before Bombay High Court (Original Side) under Commercial Courts Act, 2015.", type: "milestone" },
];

const typeColor: Record<string, string> = {
  milestone: "bg-primary border-primary",
  issue: "bg-destructive border-destructive",
  action: "bg-info border-info",
};

const typeBadge: Record<string, string> = {
  milestone: "bg-primary/10 text-primary",
  issue: "bg-destructive/10 text-destructive",
  action: "bg-info/10 text-info",
};

export const TimelineTab = () => {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold mb-6">Case Timeline</h2>
      <div className="relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />
        <div className="space-y-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5"
            >
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10 bg-card ${typeColor[e.type]}`}>
                <div className={`w-3 h-3 rounded-full ${typeColor[e.type]}`} />
              </div>
              <div className="bg-card border border-border rounded-xl p-4 flex-1 shadow-card">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-muted-foreground font-mono">{e.date}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${typeBadge[e.type]}`}>
                    {e.type}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">{e.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
