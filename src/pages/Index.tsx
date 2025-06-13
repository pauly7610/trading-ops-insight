
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingUp, Shield, Zap, Bell, Clock, CheckCircle, XCircle } from "lucide-react";
import MetricsOverview from "@/components/MetricsOverview";
import AlertsPanel from "@/components/AlertsPanel";
import ComplianceStatus from "@/components/ComplianceStatus";
import SystemHealth from "@/components/SystemHealth";
import AIAgentActivity from "@/components/AIAgentActivity";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-400" />
                <div>
                  <h1 className="text-xl font-bold text-white">ITRS FinObs</h1>
                  <p className="text-xs text-slate-400">Financial AI Observability Platform</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-slate-300">Live Trading Systems</span>
              </div>
              <Button variant="outline" size="sm" className="text-slate-300 border-slate-600">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="mt-4">
            <div className="flex space-x-1">
              {[
                { id: "overview", label: "Overview", icon: TrendingUp },
                { id: "alerts", label: "Alerts & AI", icon: AlertTriangle },
                { id: "compliance", label: "Compliance", icon: Shield },
                { id: "systems", label: "System Health", icon: Zap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6">
        {selectedTab === "overview" && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">System Uptime</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">99.98%</div>
                  <p className="text-xs text-slate-400">+0.02% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Active Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">3</div>
                  <p className="text-xs text-slate-400">-94% noise reduction</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">MTTR</CardTitle>
                  <Clock className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">4.2m</div>
                  <p className="text-xs text-slate-400">-35% improvement</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Compliance Score</CardTitle>
                  <Shield className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">98.5%</div>
                  <p className="text-xs text-slate-400">Audit ready</p>
                </CardContent>
              </Card>
            </div>

            <MetricsOverview />
            
            {/* AI Agent Status */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                  AI Agent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Auto-Remediation</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-slate-400">12 incidents resolved automatically today</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Predictive Analysis</span>
                      <span className="text-blue-400">Learning</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-slate-400">3 capacity alerts prevented</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Compliance Monitoring</span>
                      <span className="text-green-400">Compliant</span>
                    </div>
                    <Progress value={98} className="h-2" />
                    <p className="text-xs text-slate-400">All regulatory checks passed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === "alerts" && <AlertsPanel />}
        {selectedTab === "compliance" && <ComplianceStatus />}
        {selectedTab === "systems" && <SystemHealth />}
      </main>
    </div>
  );
};

export default Index;
