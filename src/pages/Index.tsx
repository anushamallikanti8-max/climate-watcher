import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClimateMetrics } from "@/components/ClimateMetrics";
import { TemperatureChart } from "@/components/TemperatureChart";
import { InfoSection } from "@/components/InfoSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClimateMetrics />
      <TemperatureChart />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
