import SectionBanner from "./section-banner";
import SectionBooks from "./section-books";
import SectionPhotographer from "./section-photographer";
import SectionServices from "./section-services";
import StepProcessSection from "./section-step-process";
import SectionTimeZone from "./section-time-zone";
import SectionWhyLLC from "./section-why-LLC";
import SectionWhyOutsourcing from "./section-why-oursourcing";

const HomePage = () => {
  return (
    <div className=" w-full h-full">
      <SectionBanner />
      <SectionWhyOutsourcing />
      <SectionWhyLLC />
      <SectionServices />
      <SectionTimeZone />
      <StepProcessSection />
      <SectionPhotographer />
      <SectionBooks />
    </div>
  );
};

export default HomePage;
