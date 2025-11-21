import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, AlertTriangle, Leaf } from "lucide-react";

const sections = [
  {
    id: "causes",
    title: "Causes of Global Warming",
    description: "Understanding the main drivers of climate change",
    icon: Factory,
    items: [
      "Greenhouse gas emissions from fossil fuels",
      "Deforestation and land use changes",
      "Industrial processes and manufacturing",
      "Agricultural practices and livestock",
    ],
    gradient: "bg-gradient-ocean",
  },
  {
    id: "effects",
    title: "Climate Change Effects",
    description: "The impacts we're seeing around the world",
    icon: AlertTriangle,
    items: [
      "Rising global temperatures and extreme heat",
      "Melting ice caps and rising sea levels",
      "More frequent extreme weather events",
      "Ecosystem disruption and biodiversity loss",
    ],
    gradient: "bg-gradient-alert",
  },
  {
    id: "solutions",
    title: "Solutions & Actions",
    description: "How we can make a difference",
    icon: Leaf,
    items: [
      "Transition to renewable energy sources",
      "Improve energy efficiency in buildings",
      "Sustainable transportation options",
      "Reforestation and ecosystem restoration",
    ],
    gradient: "bg-gradient-earth",
  },
];

export const InfoSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.id}
                id={section.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${section.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
