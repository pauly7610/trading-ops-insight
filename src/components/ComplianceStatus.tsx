
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Download, CheckCircle, AlertTriangle, FileText, Clock } from "lucide-react";

const complianceFrameworks = [
  {
    name: "SEC 17a-4",
    description: "Electronic Records Management",
    score: 98.5,
    status: "compliant",
    lastAudit: "2024-01-15",
    nextReview: "2024-07-15",
    issues: 0
  },
  {
    name: "FINRA 4511",
    description: "General Books and Records Requirements",
    score: 97.2,
    status: "compliant",
    lastAudit: "2024-01-20",
    nextReview: "2024-07-20", 
    issues: 1
  },
  {
    name: "MiFID II",
    description: "Transaction Reporting and Record Keeping",
    score: 96.8,
    status: "compliant",
    lastAudit: "2024-01-10",
    nextReview: "2024-07-10",
    issues: 2
  },
  {
    name: "CFTC Part 46",
    description: "Records and Reporting for Swap Dealers",
    score: 94.1,
    status: "review_needed",
    lastAudit: "2024-01-05",
    nextReview: "2024-07-05",
    issues: 3
  }
];

const auditTrails = [
  {
    id: 1,
    event: "Trade Settlement Anomaly",
    timestamp: "2024-01-25 14:32:15",
    system: "Order Management",
    framework: "SEC 17a-4",
    status: "logged",
    hash: "0x7f8a9b..."
  },
  {
    id: 2,
    event: "Position Limit Check",
    timestamp: "2024-01-25 14:28:42", 
    system: "Risk Engine",
    framework: "MiFID II",
    status: "logged",
    hash: "0x3c4d5e..."
  },
  {
    id: 3,
    event: "Client Communication Log",
    timestamp: "2024-01-25 14:15:08",
    system: "CRM System",
    framework: "FINRA 4511",
    status: "logged", 
    hash: "0x9a8b7c..."
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "compliant": return "text-green-400 border-green-400";
    case "review_needed": return "text-yellow-400 border-yellow-400";
    case "non_compliant": return "text-red-400 border-red-400";
    default: return "text-slate-400 border-slate-400";
  }
};

const getScoreColor = (score: number) => {
  if (score >= 95) return "text-green-400";
  if (score >= 90) return "text-yellow-400";
  return "text-red-400";
};

const ComplianceStatus = () => {
  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-400" />
              Compliance Dashboard
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Export Audit Package
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">96.7%</div>
              <div className="text-sm text-slate-300">Overall Score</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-slate-300">Frameworks</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">6</div>
              <div className="text-sm text-slate-300">Open Issues</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">2,847</div>
              <div className="text-sm text-slate-300">Audit Events Today</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Frameworks */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Regulatory Framework Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium">{framework.name}</h3>
                    <p className="text-sm text-slate-300">{framework.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={getStatusColor(framework.status)}>
                      {framework.status === "compliant" ? "Compliant" : "Review Needed"}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Compliance Score</span>
                      <span className={`text-sm font-medium ${getScoreColor(framework.score)}`}>
                        {framework.score}%
                      </span>
                    </div>
                    <Progress value={framework.score} className="h-2" />
                  </div>
                  
                  <div className="text-sm text-slate-400">
                    <div>Last Audit: {framework.lastAudit}</div>
                    <div>Next Review: {framework.nextReview}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {framework.issues > 0 ? (
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm">{framework.issues} issues</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 text-green-400">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">No issues</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <FileText className="h-4 w-4 mr-1" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Audit Trail */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-400" />
            Real-time Audit Trail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditTrails.map((trail) => (
              <div key={trail.id} className="bg-slate-700 p-3 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-white font-medium">{trail.event}</span>
                      <Badge variant="outline" className="text-blue-400 border-blue-400 text-xs">
                        {trail.framework}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm text-slate-300">
                      <div>
                        <span className="text-slate-400">Time:</span> {trail.timestamp}
                      </div>
                      <div>
                        <span className="text-slate-400">System:</span> {trail.system}
                      </div>
                      <div>
                        <span className="text-slate-400">Hash:</span> 
                        <code className="ml-1 bg-slate-600 px-1 rounded text-xs">{trail.hash}</code>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
                    Verify
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline" className="text-slate-300 border-slate-600">
              View Full Audit Trail
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceStatus;
