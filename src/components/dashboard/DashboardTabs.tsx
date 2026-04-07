import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Scale, Search, MessageSquare, Download, Shield, BarChart3, Clock } from "lucide-react";
import { SummaryTab } from "./SummaryTab";
import { ArgumentsTab } from "./ArgumentsTab";
import { SimilarCasesTab } from "./SimilarCasesTab";
import { ChatbotTab } from "./ChatbotTab";
import { DocumentsTab } from "./DocumentsTab";
import { TimelineTab } from "./TimelineTab";
import type { CaseData } from "@/pages/Dashboard";

interface DashboardTabsProps {
  caseData: CaseData;
}

const tabs = [
  { value: "summary", label: "Summary", icon: FileText },
  { value: "arguments", label: "Arguments", icon: Scale },
  { value: "similar", label: "Similar Cases", icon: Search },
  { value: "timeline", label: "Timeline", icon: Clock },
  { value: "documents", label: "Documents", icon: Download },
  { value: "chatbot", label: "Chatbot", icon: MessageSquare },
];

export const DashboardTabs = ({ caseData }: DashboardTabsProps) => {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="w-full justify-start bg-card border border-border h-auto p-1 gap-1 flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground gap-2 px-4 py-2"
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-6">
        <TabsContent value="summary"><SummaryTab caseData={caseData} /></TabsContent>
        <TabsContent value="arguments"><ArgumentsTab caseData={caseData} /></TabsContent>
        <TabsContent value="similar"><SimilarCasesTab /></TabsContent>
        <TabsContent value="timeline"><TimelineTab /></TabsContent>
        <TabsContent value="documents"><DocumentsTab caseData={caseData} /></TabsContent>
        <TabsContent value="chatbot"><ChatbotTab /></TabsContent>
      </div>
    </Tabs>
  );
};
