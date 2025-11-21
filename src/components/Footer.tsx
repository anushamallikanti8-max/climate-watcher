import { Thermometer } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Thermometer className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg bg-gradient-ocean bg-clip-text text-transparent">
                ClimateWatch
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Monitoring Earth's climate with real-time data and scientific insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Data Sources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>NASA Climate Data</li>
              <li>NOAA Global Monitoring</li>
              <li>IPCC Reports</li>
              <li>World Meteorological Org.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Subscribe to Updates</li>
              <li>Share Our Mission</li>
              <li>Support Climate Action</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 ClimateWatch. Data updated regularly from scientific sources.</p>
        </div>
      </div>
    </footer>
  );
};
