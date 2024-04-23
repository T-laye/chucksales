import React from "react";
import AboutCard from "../ui/AboutCard";

const About = () => {
  return (
    <section>
      <div className="section-container">
        <div className="flex flex-col gap-[100px] lg:gap-[200px]">
          <AboutCard
            icon="/icons/eye_icon.svg"
            btnTitle="Get Started"
            image="/images/trans_process.png"
            text="We believe in transparency above all else. With our platform, users can participate in presales with confidence, knowing that their contributions are handled securely and transparently."
            title="Transparent Presale Process"
            css="sm:flex-row-reverse"
          />
          <AboutCard
            icon="/icons/secure_icon.svg"
            btnTitle="Contribute"
            image="/images/secure_trans.jpeg"
            text="Security is our top priority. We leverage cutting-edge technology to ensure that all transactions on our platform are safe and secure, giving our users peace of mind."
            title="Secure Transactions"
            css="sm:flex-row"
          />
          <AboutCard
            icon="/icons/distribution_icon.svg"
            btnTitle="Contribute"
            image="/images/fair_distribution.png"
            text="We're committed to promoting fair distribution of presale tokens. Our platform is designed to prevent manipulation and ensure that all contributors have equal opportunities to participate in presales."
            title="Fair Distribution"
            css="sm:flex-row-reverse"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
