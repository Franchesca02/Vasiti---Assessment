// components
import SectionOne from "./Section-1/Section1";
import SectionThree from "./section-3";
import SectionTwo from "./section-two";
import SectionFive from "./SectionFive";
import ClickModal from "../Pages/create-testimony/ClickModal";
import SectionSix from "./section-six";
const LandingPage = () => {
  return (
    <div className="">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionThree />
      <div className="d-flex justify-content-center align-items-center">
        <ClickModal />
      </div>
      <SectionSix />
    </div>
  );
};
export default LandingPage;
