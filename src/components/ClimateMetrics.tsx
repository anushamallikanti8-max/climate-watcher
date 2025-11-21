import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Thermometer, Wind, Droplets } from "lucide-react";

const metrics = [
  {
    title: "Global Temperature",
    value: "+1.2°C",
    change: "+0.08°C/decade",
    icon: Thermometer,
    trend: "up",
    color: "text-alert",
  },
  {
    title: "CO₂ Levels",
    value: "420 ppm",
    change: "+2.5 ppm/year",
    icon: Wind,
    trend: "up",
    color: "text-alert",
  },
  {
    title: "Sea Level Rise",
    value: "+3.4 mm",
    change: "per year",
    icon: Droplets,
    trend: "up",
    color: "text-alert",
  },
  {
    title: "Arctic Ice Loss",
    value: "-13%",
    change: "per decade",
    icon: TrendingUp,
    trend: "down",
    color: "text-alert",
  },
];

export const ClimateMetrics = () => {
  return (
    <section id="dashboard" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Climate Monitoring Dashboard</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time data showing the current state of our planet's climate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={metric.title} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">{metric.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
