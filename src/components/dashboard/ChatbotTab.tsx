import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Namaste! I'm your AI legal assistant specializing in Indian law. I've analyzed your case under the Indian Contract Act, 1872 and relevant IPC/BNS provisions. Ask me about applicable sections, Supreme Court precedents, High Court rulings, or case strategy. How can I help?",
  },
];

const demoResponses: Record<string, string> = {
  default:
    "Based on my analysis, the primary legal issue involves **breach of contractual obligations** under the **Indian Contract Act, 1872**. Sections 39, 73, and 74 are directly applicable.\n\nThe plaintiff can also consider a parallel criminal complaint under **Section 420 IPC** (cheating) or **Section 318 BNS** (under the new Bharatiya Nyaya Sanhita).\n\nWould you like me to elaborate on specific sections, Supreme Court judgments, or defense strategies?",
  damages:
    "Under **Section 73 of the Indian Contract Act**, damages can be claimed as follows:\n\n1. **Direct damages** — difference between contract price and market price at breach date\n2. **Consequential damages** — foreseeable losses per *ONGC v. Saw Pipes Ltd. (2003) 5 SCC 705*\n3. **Interest** — typically 12-18% p.a. as per court discretion under Section 34 CPC\n4. **Liquidated damages** — under Section 74, the court awards \"reasonable compensation\" not exceeding the named amount\n\nAs per *Kailash Nath Associates v. DDA (2015) 4 SCC 136*, the Supreme Court clarified that Section 74 does not require proof of actual loss for claiming reasonable compensation.\n\nEstimated damages: ₹35-50 lakhs plus pendente lite interest.",
  precedent:
    "Key Indian precedents for your case:\n\n1. **Satyabrata Ghose v. Mugneeram Bangur (1954 SCR 310)** — 89% similarity, frustration doctrine under Section 56\n2. **ONGC v. Saw Pipes Ltd. (2003) 5 SCC 705** — 82% similarity, liquidated damages under Sections 73-74\n3. **Kailash Nath Associates v. DDA (2015) 4 SCC 136** — Section 74 interpretation\n4. **Indian Oil Corp. v. Amritsar Gas Service (1991) 1 SCC 533** — wrongful termination of agreement\n\nAll citations are from **SCC (Supreme Court Cases)** and available on **Indian Kanoon** and **SCC Online**. Shall I analyze any specific judgment?",
};

export const ChatbotTab = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const lowerInput = input.toLowerCase();
    let response = demoResponses.default;
    if (lowerInput.includes("damage") || lowerInput.includes("compensation")) response = demoResponses.damages;
    else if (lowerInput.includes("precedent") || lowerInput.includes("case law")) response = demoResponses.precedent;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-card flex flex-col h-[600px]">
      <div className="flex items-center gap-2 p-4 border-b border-border">
        <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-foreground">Legal AI Assistant</h3>
          <p className="text-xs text-muted-foreground">Powered by AI • Context-aware</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              msg.role === "assistant" ? "gradient-gold" : "bg-secondary"
            }`}>
              {msg.role === "assistant" ? (
                <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
              ) : (
                <User className="h-3.5 w-3.5 text-secondary-foreground" />
              )}
            </div>
            <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === "assistant"
                ? "bg-muted text-foreground"
                : "gradient-gold text-primary-foreground"
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-lg gradient-gold flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <div className="bg-muted rounded-xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.1s" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your case..."
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button type="submit" className="gradient-gold text-primary-foreground shrink-0" disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
