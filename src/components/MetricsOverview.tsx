
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const latencyData = [
  { time: "09:00", latency: 2.1, threshold: 5 },
  { time: "09:15", latency: 1.8, threshold: 5 },
  { time: "09:30", latency: 2.3, threshold: 5 },
  { time: "09:45", latency: 1.9, threshold: 5 },
  { time: "10:00", latency: 2.7, threshold: 5 },
  { time: "10:15", latency: 2.1, threshold: 5 },
  { time: "10:30", latency: 1.6, threshold: 5 },
];

const volumeData = [
  { time: "09:00", volume: 1200, predicted: 1250 },
  { time: "09:15", volume: 1350, predicted: 1380 },
  { time: "09:30", volume: 1500, predicted: 1520 },
  { time: "09:45", volume: 1680, predicted: 1700 },
  { time: "10:00", volume: 1450, predicted: 1480 },
  { time: "10:15", volume: 1320, predicted: 1350 },
  { time: "10:30", volume: 1100, predicted: 1150 },
];

const MetricsOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Trading System Latency */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Trading System Latency
            <Badge variant="outline" className="text-green-400 border-green-400">
              Normal
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="threshold" 
                stroke="#ef4444" 
                strokeDasharray="5 5"
                strokeWidth={1}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-between text-sm text-slate-400">
            <span>Avg: 2.1ms</span>
            <span>P99: 2.7ms</span>
            <span>Threshold: 5ms</span>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Volume */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Transaction Volume
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              Predicted
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="volume" 
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.3}
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#6366f1" 
                strokeDasharray="3 3"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-between text-sm text-slate-400">
            <span>Current: 1,100 TPS</span>
            <span>Peak: 1,680 TPS</span>
            <span>Predicted: 1,150 TPS</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsOverview;
