
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Server, Database, Activity, Zap, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const systems = [
  {
    name: "Order Management System",
    status: "healthy",
    uptime: "99.98%",
    latency: "2.1ms",
    cpu: 45,
    memory: 62,
    connections: 234,
    maxConnections: 500
  },
  {
    name: "Risk Engine",
    status: "healthy", 
    uptime: "99.95%",
    latency: "1.8ms",
    cpu: 38,
    memory: 71,
    connections: 156,
    maxConnections: 300
  },
  {
    name: "Market Data Feed",
    status: "warning",
    uptime: "99.89%",
    latency: "3.2ms",
    cpu: 72,
    memory: 84,
    connections: 445,
    maxConnections: 500
  },
  {
    name: "Settlement Engine",
    status: "healthy",
    uptime: "99.99%",
    latency: "1.5ms", 
    cpu: 28,
    memory: 45,
    connections: 89,
    maxConnections: 200
  }
];

const databases = [
  {
    name: "Trading DB",
    status: "healthy",
    connections: 78,
    maxConnections: 100,
    queryTime: "12ms",
    size: "2.4TB"
  },
  {
    name: "Reference Data",
    status: "healthy",
    connections: 45,
    maxConnections: 80,
    queryTime: "8ms", 
    size: "156GB"
  },
  {
    name: "Audit Log DB",
    status: "healthy",
    connections: 23,
    maxConnections: 50,
    queryTime: "15ms",
    size: "890GB"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "healthy": return "text-green-400 border-green-400";
    case "warning": return "text-yellow-400 border-yellow-400";
    case "critical": return "text-red-400 border-red-400";
    default: return "text-slate-400 border-slate-400";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "healthy": return <CheckCircle className="h-4 w-4 text-green-400" />;
    case "warning": return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
    case "critical": return <AlertTriangle className="h-4 w-4 text-red-400" />;
    default: return <AlertTriangle className="h-4 w-4 text-slate-400" />;
  }
};

const getUsageColor = (usage: number) => {
  if (usage >= 80) return "bg-red-400";
  if (usage >= 60) return "bg-yellow-400";
  return "bg-green-400";
};

const SystemHealth = () => {
  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Active Systems</CardTitle>
            <Server className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12/12</div>
            <p className="text-xs text-slate-400">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg CPU Usage</CardTitle>
            <Activity className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">45.8%</div>
            <p className="text-xs text-slate-400">Within normal range</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Connections</CardTitle>
            <Database className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">924</div>
            <p className="text-xs text-slate-400">62% of capacity</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg Latency</CardTitle>
            <Zap className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.1ms</div>
            <p className="text-xs text-slate-400">-15% vs yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Trading Systems */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Server className="h-5 w-5 mr-2 text-blue-400" />
            Trading Systems Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systems.map((system, index) => (
              <div key={index} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(system.status)}
                    <div>
                      <h3 className="text-white font-medium">{system.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span>Uptime: {system.uptime}</span>
                        <span>Latency: {system.latency}</span>
                        <span>Connections: {system.connections}/{system.maxConnections}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getStatusColor(system.status)}>
                      {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                    </Badge>
                    <Button size="sm" variant="outline" className="text-slate-300 border-slate-600">
                      Details
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">CPU Usage</span>
                      <span className="text-sm text-white">{system.cpu}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getUsageColor(system.cpu)}`}
                        style={{ width: `${system.cpu}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">Memory Usage</span>
                      <span className="text-sm text-white">{system.memory}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getUsageColor(system.memory)}`}
                        style={{ width: `${system.memory}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Database Health */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Database className="h-5 w-5 mr-2 text-green-400" />
            Database Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {databases.map((db, index) => (
              <div key={index} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(db.status)}
                    <h3 className="text-white font-medium">{db.name}</h3>
                  </div>
                  <Badge variant="outline" className={getStatusColor(db.status)}>
                    {db.status.charAt(0).toUpperCase() + db.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Connections:</span>
                    <span className="text-white">{db.connections}/{db.maxConnections}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Avg Query Time:</span>
                    <span className="text-white">{db.queryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Size:</span>
                    <span className="text-white">{db.size}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300">Connection Usage</span>
                    <span className="text-sm text-white">{Math.round((db.connections / db.maxConnections) * 100)}%</span>
                  </div>
                  <Progress value={(db.connections / db.maxConnections) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Trends */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
            AI-Powered Performance Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-4 rounded-lg border border-green-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium mb-1">Optimal Performance Detected</h4>
                  <p className="text-slate-300 text-sm">All systems are operating within optimal parameters. Average latency is 15% below baseline.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-4 rounded-lg border border-yellow-500/30">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium mb-1">Capacity Planning Alert</h4>
                  <p className="text-slate-300 text-sm">Market Data Feed approaching memory threshold. Recommend scaling resources before market open.</p>
                  <Button size="sm" className="mt-2 bg-yellow-600 hover:bg-yellow-700">
                    Schedule Auto-Scale
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500/30">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium mb-1">Performance Optimization Available</h4>
                  <p className="text-slate-300 text-sm">AI analysis suggests database index optimization could improve query performance by 23%.</p>
                  <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                    Review Recommendations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemHealth;
