import { Features } from "../pageComponent/features";
import { FeaturesGrid } from "../pageComponent/featuresGrid";
import { Header } from "../pageComponent/header";
import { LowerHeader } from "../pageComponent/lowerHeader";
import { Navbar } from "../pageComponent/navbar";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center w-full justify-center px-4">
        <Navbar />
      </div>

      <div className="flex items-center justify-center w-full">
        <Header />
      </div>
      <div className="w-full">
        <LowerHeader />
      </div>
      <div className="w-full">
        <Features />
      </div>
      <div className="w-full">
        <FeaturesGrid />
      </div>
    </div>
  );
};
