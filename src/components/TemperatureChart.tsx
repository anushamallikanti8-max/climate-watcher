import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "1880", temp: -0.16 },
  { year: "1900", temp: -0.08 },
  { year: "1920", temp: -0.27 },
  { year: "1940", temp: 0.13 },
  { year: "1960", temp: -0.03 },
  { year: "1980", temp: 0.26 },
  { year: "2000", temp: 0.61 },
  { year: "2020", temp: 1.02 },
  { year: "2024", temp: 1.2 },
];

export const TemperatureChart = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Global Temperature Anomaly (1880-2024)</CardTitle>
            <CardDescription>
              Temperature change relative to 1951-1980 average (°C)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year" 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="hsl(var(--alert))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--alert))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
