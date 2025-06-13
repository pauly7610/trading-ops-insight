
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const agentActions = [
  {
    id: 1,
    agent: "Anomaly Detection Agent",
    action: "Detected latency spike in Order Management System",
    timestamp: "2 minutes ago",
    status: "completed",
    outcome: "Auto-scaling triggered, latency normalized"
  },
  {
    id: 2,
    agent: "Compliance Monitor",
    action: "Generated SEC 17a-4 audit trail for settlement anomaly",
    timestamp: "8 minutes ago", 
    status: "completed",
    outcome: "Audit package ready for export"
  },
  {
    id: 3,
    agent: "Predictive Scaling Agent",
    action: "Forecasting capacity needs for market open",
    timestamp: "15 minutes ago",
    status: "in_progress",
    outcome: "Analysis 78% complete"
  },
  {
    id: 4,
    agent: "Root Cause Analyzer",
    action: "Investigating memory leak pattern in Risk Engine",
    timestamp: "22 minutes ago",
    status: "completed",
    outcome: "Memory cleanup scheduled and executed"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed": return <CheckCircle className="h-4 w-4 text-green-400" />;
    case "in_progress": return <Clock className="h-4 w-4 text-yellow-400" />;
    case "failed": return <AlertTriangle className="h-4 w-4 text-red-400" />;
    default: return <Bot className="h-4 w-4 text-slate-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "text-green-400 border-green-400";
    case "in_progress": return "text-yellow-400 border-yellow-400";
    case "failed": return "text-red-400 border-red-400";
    default: return "text-slate-400 border-slate-400";
  }
};

const AIAgentActivity = () => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 mr-2 text-blue-400" />
            AI Agent Activity Log
          </div>
          <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agentActions.map((action) => (
            <div key={action.id} className="bg-slate-700 p-4 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getStatusIcon(action.status)}
                    <span className="text-sm font-medium text-blue-400">{action.agent}</span>
                    <Badge variant="outline" className={getStatusColor(action.status)}>
                      {action.status.replace("_", " ").toUpperCase()}
                    </Badge>
                    <span className="text-xs text-slate-400">{action.timestamp}</span>
                  </div>
                  
                  <h4 className="text-white font-medium mb-1">{action.action}</h4>
                  <p className="text-slate-300 text-sm">{action.outcome}</p>
                </div>
                
                <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-green-400">24</div>
            <div className="text-sm text-slate-300">Actions Today</div>
          </div>
          
          <div className="bg-slate-700 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-blue-400">96%</div>
            <div className="text-sm text-slate-300">Success Rate</div>
          </div>
          
          <div className="bg-slate-700 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-yellow-400">1.2m</div>
            <div className="text-sm text-slate-300">Avg Resolution</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAgentActivity;
