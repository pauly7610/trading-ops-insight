
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, Bot, User, ArrowRight } from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "high",
    title: "Latency Spike Detected - Order Management System",
    description: "P99 latency increased to 4.2ms, approaching threshold",
    timestamp: "2 minutes ago",
    status: "investigating",
    aiAction: "Auto-scaling triggered",
    assignee: "AI Agent"
  },
  {
    id: 2,
    severity: "medium",
    title: "Memory Usage Pattern Anomaly",
    description: "Unusual memory growth pattern detected in trading engine",
    timestamp: "8 minutes ago",
    status: "resolved",
    aiAction: "Memory cleaned up automatically",
    assignee: "AI Agent"
  },
  {
    id: 3,
    severity: "low",
    title: "Database Connection Pool Utilization",
    description: "Connection pool at 75% capacity, monitoring for scaling",
    timestamp: "15 minutes ago",
    status: "monitoring",
    aiAction: "Predictive scaling scheduled",
    assignee: "System"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high": return "text-red-400 border-red-400";
    case "medium": return "text-yellow-400 border-yellow-400";
    case "low": return "text-blue-400 border-blue-400";
    default: return "text-slate-400 border-slate-400";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "resolved": return <CheckCircle className="h-4 w-4 text-green-400" />;
    case "investigating": return <Clock className="h-4 w-4 text-yellow-400" />;
    case "monitoring": return <AlertTriangle className="h-4 w-4 text-blue-400" />;
    default: return <AlertTriangle className="h-4 w-4 text-slate-400" />;
  }
};

const AlertsPanel = () => {
  return (
    <div className="space-y-6">
      {/* AI Agent Status */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Bot className="h-5 w-5 mr-2 text-blue-400" />
            AI Agent Operations Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Active Agents</span>
                <Badge variant="outline" className="text-green-400 border-green-400">3 Online</Badge>
              </div>
              <div className="text-xl font-bold text-white">Monitoring</div>
              <p className="text-xs text-slate-400">Anomaly Detection, Triage, Remediation</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Auto-Resolved Today</span>
                <Badge variant="outline" className="text-blue-400 border-blue-400">12 Incidents</Badge>
              </div>
              <div className="text-xl font-bold text-white">94% Success</div>
              <p className="text-xs text-slate-400">Average resolution time: 1.2 minutes</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Learning Status</span>
                <Badge variant="outline" className="text-purple-400 border-purple-400">Active</Badge>
              </div>
              <div className="text-xl font-bold text-white">Training</div>
              <p className="text-xs text-slate-400">Processing new patterns from trading data</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Alerts & AI Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="bg-slate-700 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(alert.status)}
                      <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-slate-400">{alert.timestamp}</span>
                    </div>
                    
                    <h3 className="text-white font-medium mb-1">{alert.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{alert.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Bot className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-300">AI Action:</span>
                        <span className="text-blue-400">{alert.aiAction}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {alert.assignee === "AI Agent" ? 
                          <Bot className="h-4 w-4 text-green-400" /> : 
                          <User className="h-4 w-4 text-slate-400" />
                        }
                        <span className="text-slate-300">{alert.assignee}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
                      View Details
                    </Button>
                    {alert.status === "investigating" && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Approve AI Action
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Bot className="h-5 w-5 mr-2 text-blue-400" />
            AI Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-400 mt-2"></div>
              <div>
                <p className="text-white text-sm">
                  <strong>Predictive Alert:</strong> Based on current patterns, expect 15% increase in transaction volume at 2:30 PM. Auto-scaling will be triggered at 2:25 PM.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-400 mt-2"></div>
              <div>
                <p className="text-white text-sm">
                  <strong>Optimization Found:</strong> Database query optimization identified. Implementing changes could reduce latency by 12%.
                </p>
                <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                  Apply Optimization
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2"></div>
              <div>
                <p className="text-white text-sm">
                  <strong>Capacity Planning:</strong> Current growth rate suggests additional capacity needed within 2 weeks. Procurement timeline recommendation: Start approval process Monday.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsPanel;
