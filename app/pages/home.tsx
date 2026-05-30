import { Header } from "../pageComponent/header";
import { Navbar } from "../pageComponent/navbar";
import { LowerHeader } from "../pageComponent/lowerHeader";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex items-center w-screen justify-center">
        <Navbar />
      </div>

      <div className="flex items-center justify-center">
        <Header />
      </div>
      <div className="flex items-center justify-center">
        <LowerHeader />
      </div>
    </div>
  );
};
