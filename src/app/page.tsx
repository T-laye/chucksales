"use client";
import About from "@/components/landingPage/About";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";
import Ready from "@/components/landingPage/Ready";
import How from "@/components/landingPage/How";
import Faq from "@/components/landingPage/Faq";
import { useBalance } from "wagmi";

export default function Home() {
  // const { data, status } = useBalance();

  // console.log(data, status, "hello");
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        <About />
        <Ready />
        <How />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
