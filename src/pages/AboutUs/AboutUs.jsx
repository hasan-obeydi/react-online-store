import { Link } from "react-router";
import Accordion from "../../components/common/Accordion/Accordion";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import { accordian } from "../../lib/about-us";
import { LOREM_TEXT } from "../../lib/constants";

const AboutUs = () => {
  return (
    <main className="container md:px-3 mt-8">
      <div>
        <SectionTitle title="ما کی هستیم ؟" description={LOREM_TEXT} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  mt-10">
        <div>
          <Accordion options={accordian} />
        </div>
        <div>
          <img className="" src="/assets/about-us.png" alt="about-us" />
        </div>
      </div>
      <div className="mt-10">
        <SectionTitle title="پاسخ خود را پیدا نکردید؟" />
        <p className="">
          شما میتوانید{" "}
          <Link to="/contact-us" className="text-blue-500 underline">
            از طریق این صفحه
          </Link>{" "}
          با ما تماس بگیرید و سوال خود را از تیم فنی بپرسید !
        </p>
      </div>
    </main>
  );
};

export default AboutUs;
