import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import ContactUsForm from "../../components/template/ContactUs/ContactUsForm";

const ContactUs = () => {
  return (
    <main className="container mt-8">
      <SectionTitle
        title={"با ما تماس بگیرید"}
        description={"از طریق فرم زیر میتوانید با ما تماس بگیرید."}
      />
      <div className="flex-between flex-col lg:flex-row box-style mt-8 mb-8 *:flex-1">
        <ContactUsForm />
        <div className="max-w-130 p-10">
          <img src={"/assets/contact-us.png"} />
        </div>
      </div>
      <SectionTitle
        title={"مراجعه حضوری"}
        description={
          "شما می‌توانید به صورت حضوری با همکاران ما در ارتباط باشید."
        }
      />
    </main>
  );
};

export default ContactUs;
