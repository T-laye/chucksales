import { lazy } from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ready from "@/components/Ready";



export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        <About />
        <Ready />
        <Footer />
      </main>
    </>
  );
}
