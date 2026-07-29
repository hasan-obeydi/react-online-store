import Accordion from "../../components/common/Accordion/Accordion";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { accordian } from "../../lib/about-us";
import { LOREM_TEXT } from "../../lib/constants";

const AboutUs = () => {
  return (
    <section className="container md:px-3 mt-8">
      <div>
        <SectionTitle title="ما کی هستیم ؟" description={LOREM_TEXT} />
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <Accordion options={accordian} />
        </div>
        <div>
          <img className="" src="/assets/about-us.png" alt="about-us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
