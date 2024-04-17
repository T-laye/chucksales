import React from "react";
import HowCard from "./ui/HowCard";

const How = () => {
  return (
    <section>
      <div className="section-container">
        <h2 className="md:text-center font-sfBold">How it works</h2>
        <div className="relative mt-12 mx-auto max-w-[918px] bg-customGrayTransparent pl-10 sm:pl-12 pr-2 md:px-8 py-20 rounded-3xl flex flex-col gap-14 md:gap-28">
          <HowCard
            image="/images/how_1.png"
            number="1"
            text="Users connect their Ethereum wallets to the Chucksale platform to interact with smart contracts and participate in presale events."
            title="Connect wallet"
          />
          <HowCard
            image="/images/how_2.png"
            number="2"
            text="Users can also manually send funds to the designated presale address to purchase presale tokens at a predetermined price."
            title="Send funds"
            reverse={true}
          />
          <HowCard
            image="/images/how_3.png"
            number="3"
            text="Users receive a percentage of the presale token equivalent to their contribution amount."
            title="Receive tokens"
          />
          <HowCard
            image="/images/how_4.png"
            number="4"
            text="Chucksale provides a comprehensive dashboard for both developers and users. Developers can monitor the total amount raised during the presale event, while users can track their individual contributions and the total amount up to distribution."
            title="Dashboard"
            reverse={true}
          />
          <HowCard
            image="/images/how_5.png"
            number="5"
            text="After the presale event concludes, tokens are distributed to users based on their contributions. Chucksale ensures a fair and transparent distribution process, with tokens sent directly to users' wallets."
            title="Distribution"
          />
          {/* <HowCard reverse={true} /> */}
          <div className="bg-white w-[1px] h-[800px] md:h-[1200px] absolute top-[10%] left-4 md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default How;
