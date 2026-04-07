import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, Scale, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CaseData } from "@/pages/Dashboard";

interface CaseInputProps {
  onAnalyze: (data: CaseData) => void;
  isAnalyzing: boolean;
}

export const CaseInput = ({ onAnalyze, isAnalyzing }: CaseInputProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [caseType, setCaseType] = useState("");

  const handleSubmit = () => {
    if (!title || !description || !caseType) return;
    onAnalyze({ title, description, caseType });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
          <Scale className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-2">Analyze Your Case</h1>
        <p className="text-muted-foreground">
          Input your case details or upload documents. Our AI will analyze and generate insights.
        </p>
      </div>

      <div className="space-y-6 bg-card rounded-xl border border-border p-8 shadow-card">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Case Title</label>
          <Input
            placeholder="e.g., Ram Prasad v. Union of India — Writ Petition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Case Type</label>
            <Select value={caseType} onValueChange={setCaseType}>
              <SelectTrigger className="bg-muted border-border text-foreground">
                <SelectValue placeholder="Select case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="civil">Civil (CPC)</SelectItem>
                <SelectItem value="criminal">Criminal (CrPC / IPC / BNS)</SelectItem>
                <SelectItem value="constitutional">Constitutional (Writ Petitions)</SelectItem>
                <SelectItem value="corporate">Corporate & Company Law</SelectItem>
                <SelectItem value="family">Family & Matrimonial Law</SelectItem>
                <SelectItem value="property">Property & Land Revenue</SelectItem>
                <SelectItem value="labor">Labour & Industrial Disputes</SelectItem>
                <SelectItem value="tax">Tax & GST</SelectItem>
                <SelectItem value="ip">Intellectual Property</SelectItem>
                <SelectItem value="consumer">Consumer Protection (COPRA)</SelectItem>
                <SelectItem value="arbitration">Arbitration & Conciliation</SelectItem>
                <SelectItem value="environmental">Environmental (NGT)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Court / Forum</label>
            <Select>
              <SelectTrigger className="bg-muted border-border text-foreground">
                <SelectValue placeholder="Select court" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sc">Supreme Court of India</SelectItem>
                <SelectItem value="hc">High Court</SelectItem>
                <SelectItem value="district">District Court</SelectItem>
                <SelectItem value="tribunal">Tribunal (NCLT / NCLAT / ITAT)</SelectItem>
                <SelectItem value="consumer">Consumer Forum (NCDRC / SCDRC)</SelectItem>
                <SelectItem value="ngt">National Green Tribunal</SelectItem>
                <SelectItem value="family">Family Court</SelectItem>
                <SelectItem value="labor">Labour Court / Industrial Tribunal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Applicable Statutes (optional)</label>
          <Input
            placeholder="e.g., Indian Contract Act 1872, IPC Section 420, Article 21"
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Case Description</label>
          <Textarea
            placeholder="Describe the case facts, parties involved, legal issues, and any relevant context..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={8}
            className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        {/* File Upload Area */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm font-medium text-foreground mb-1">Upload Case Documents</p>
          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX — up to 20MB</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">AI will extract and parse the text automatically</span>
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!title || !description || !caseType || isAnalyzing}
          className="w-full gradient-gold text-primary-foreground font-semibold h-12 text-base shadow-gold disabled:opacity-50"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Analyzing Case...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Analyze with AI
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};
