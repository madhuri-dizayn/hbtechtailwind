import Navbar from "../components/Navbar/page";
import Slide1 from "../components/Slide1/page";
import Slide2 from "../components/Slide2/page";
import Slide3 from "../components/Slide3/page";
import Slide6 from "../components/Slide6/page";
import FooterSection from "../components/FooterSection/page";
import Slide4 from "../components/Slide4/page";
import Slide5 from "../components/Slide5/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <FooterSection />
      </div>
    </div>
  );
}
