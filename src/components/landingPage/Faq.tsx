import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import FaqList from "@/components/ui/FaqList";
import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <section id="faq">
      <div className="section-container">
        <h2 className="font-sfBold md:text-center md:text-4xl lg:text-5xl">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="overflow-hidden rounded-2xl mt-10 md:mt-14 max-w-[786px] mx-auto">
          <FaqList
            question="What is Chucksale?"
            answer="Chucksale is a groundbreaking platform that simplifies the process of participating in cryptocurrency presales. Leveraging the Ethereum Layer 2 (L2) network, Chucksale offers users a seamless and transparent experience, revolutionizing the world of presale events in the cryptocurrency space.
"
          />

          <FaqList
            question="What is Chucksale?"
            answer="Chucksale is a groundbreaking platform that simplifies the process of participating in cryptocurrency presales. Leveraging the Ethereum Layer 2 (L2) network, Chucksale offers users a seamless and transparent experience, revolutionizing the world of presale events in the cryptocurrency space.
"
          />

          <FaqList
            question="What is Chucksale?"
            answer="Chucksale is a groundbreaking platform that simplifies the process of participating in cryptocurrency presales. Leveraging the Ethereum Layer 2 (L2) network, Chucksale offers users a seamless and transparent experience, revolutionizing the world of presale events in the cryptocurrency space.
"
          />

          <FaqList
            question="What is Chucksale?"
            answer="Chucksale is a groundbreaking platform that simplifies the process of participating in cryptocurrency presales. Leveraging the Ethereum Layer 2 (L2) network, Chucksale offers users a seamless and transparent experience, revolutionizing the world of presale events in the cryptocurrency space.
"
          />

          <FaqList
            question="What is Chucksale?"
            answer="Chucksale is a groundbreaking platform that simplifies the process of participating in cryptocurrency presales. Leveraging the Ethereum Layer 2 (L2) network, Chucksale offers users a seamless and transparent experience, revolutionizing the world of presale events in the cryptocurrency space."
            border={false}
          />
        </div>

        <div className="flex flex-col items-center mt-16 gap-2">
          <h4 className="md:text-2xl md:font-bold">Got any other enquiries</h4>
          <p className="text-xs text-[#FFFFFFCC] md:font-base">
            Reach out on telegram
          </p>
          <Link href="https://t.me/Ron_btc" className="inline-block text-primary md:font-base">
            Ron (CEO)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
