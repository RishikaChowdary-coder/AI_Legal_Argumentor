import { useState } from "react";
import { Scale, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CaseInput } from "@/components/dashboard/CaseInput";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";

export interface CaseData {
  title: string;
  description: string;
  caseType: string;
}

const Dashboard = () => {
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = (data: CaseData) => {
    setIsAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setCaseData(data);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-semibold">LexAI</span>
            </Link>
            <span className="text-border">|</span>
            <span className="text-sm text-muted-foreground">Dashboard</span>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" /> Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-8">
        {!caseData ? (
          <CaseInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-display text-2xl font-bold">{caseData.title}</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Case Type: <span className="text-primary">{caseData.caseType}</span>
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setCaseData(null)}
                className="border-border text-foreground"
              >
                New Case
              </Button>
            </div>
            <DashboardTabs caseData={caseData} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
